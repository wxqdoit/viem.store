---
head:
  - - meta
    - property: og:title
      content: FAQ
  - - meta
    - name: description
      content: 常见问题
  - - meta
    - property: og:description
      content: 常见问题
---

# 常见问题

关于viem的常见问题。

**TL;DR（太长了；不用读）：viem尝试避免在现有的系统基础上创建不必要的抽象层.**

如果你发现下面的常见问题不完整，请随时添加到本文档中。

[[toc]]

## 为什么使用 "Wallet" 和 "Account" 来代替 "Signer"

viem尝试更加接近[Ethereum.org 上的术语](https://ethereum.org/en/glossary/) "Wallet" 和 "Account"。而 "Signer" 这个词是改编自ethers.js.

所以在进行深入讨论之前先弄清楚这些术语：

- Wallet: 持有账户的应用程序或接口。
- Account: 表示地址、余额、随机数以及可选存储和代码的对象。
- Private Key: 证明帐户的所有权，并可以签署消息和交易。

在viem的上下文中，一个钱包客户端是持有一个账户的接口，而账户可能持有也可能不持有私钥。

在viem中有两种类型的账户：
- 本地账户： 可以**同步和直接地**签名消息以及用私钥进行交易。签名是有保障的。
- JSON-RPC 账户： 可以通过JSON-RPC从目标钱包**直接请求**签名和交易（例如：浏览器扩展钱包或者WalletConnect）。目标钱包持有账户和私钥，签名没有保障（目标钱包可能不允许该帐户操作，或者钱包可能拒绝请求）。

我们不要使用"Signer"这个术语，是因为本地签名和通过JSON-RPC签名动作之间存在明显的差异。

## 为什么带有完全命名输入的合约函数`args`被表示为未命名元组类型而不是对象类型？

看看这个例子！假设合约中有以下函数：

```sol
function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
```
所有输入均已命名（`sender`、`recipient`和`amount`），因此可能会尝试将参数表示为以下TypeScript类型：

```ts
type Args = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
}
```
这稍微改善了开发人员的体验，因为现在可以在编辑器中看到参数的名称。

```ts
import { createWalletClient, parseAbi } from 'viem'

const client = createWalletClient(…)
client.writeContract({
  address: '0x…',
  abi: parseAbi([
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
  ]),
  functionName: 'transferFrom',
  args: {
    sender: '0x…',
    recipient: '0x…',
    amount: 100n,
  },
})
```
但是这只在所有输入都有名称情况下才有效（某些编译器会从输入中删除名称）。 如果参数没有命名，则必须使用数组：

```ts
client.writeContract({
  address: '0x…',
  abi: parseAbi([
    'function transferFrom(address, address, uint256) returns (bool)',
  ]),
  functionName: 'transferFrom',
  args: ['0x…', '0x…', 100n],
})
```
当函数有重写的时候，可能会变得更加复杂：
This can get even more complicated when a function has overrides:

```sol
function safeTransferFrom(address, address, uint256)
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)
```
在这种情况下，重载参数的类型开始彼此不同：

```ts
type Args =
  | [`0x${string}`, `0x${string}`, bigint]
  | {
      from: `0x${string}`;
      to: `0x${string}`;
      tokenId: bigint;
      data: string;
    }
```
如果你想在这你的代码中切换这两种重载方式，你需要完全更改类型，而不是在末尾添加参数或删除某个位置的参数（对象不会强制执行类型级别的排序，所以你可以安妮想要的吮吸填写参数。这也意味着viem还需要在运行时内部验证顺序，从而增加一些额外的开销。相当于自动按顺序转为数组）

```diff
client.writeContract({
  address: '0x…',
  abi: parseAbi([
    'function safeTransferFrom(address, address, uint256)',
    'function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)',
  ]),
  functionName: 'safeTransferFrom',
- args: ['0x…', '0x…', 100n],
+ args: {
+   from: '0x…',
+   to: '0x…',
+   tokenId: 100n,
+   data: '0x…',
+ },
})
```

虽然重载很少出现，但是遇到这种操作就足够[惊人](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)了，那么表示args的最好的办法是什么？ 它们是在合约层面上定位的，所以在viem中用这种方式来表示也是有意义的。

不过，对开发者来说，并不是失去一切！ TypeScript 中的数组类型可以附加名称：

```ts
type Args = [from: `0x${string}`, to: `0x${string}`, tokenId: bigint]
```
当你使用自动补全的时候，这些名称会在编辑器中显示出来，所以你也可以得到很好的开发体验。不幸的是，TypeScript目前不支持动态命名元组，但我们正在密切关注[此问题](https://github.com/microsoft/TypeScript/issues/44939)，一旦实现，我们将添加它到viem中。 与此同时，请坚持住！

## 为什么合约函数返回值的类型是数组而不是对象

假设您的ABI如下所示：

```ts
[
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      { name: "roundId", type: "uint80" },
      { name: "answer", type: "int256" },
      { name: "startedAt", type: "uint256" },
      { name: "updatedAt", type: "uint256" },
      { name: "answeredInRound", type: "uint80" },
    ],
    stateMutability: "view",
    type: "function",
  }
]
```
你可能会很困扰为什么下面不返回一个对象

```ts
import { createPublicClient, parseAbi } from 'viem'

const client = createPublicClient(…)
const res = await client.readContract({
  address: '0x…',
  abi: […], // abi from above
  functionName: 'latestRoundData',
})
res
// ^? const res: [bigint, bigint, bigint, bigint, bigint]
```

意料之中的情况，`"latestRoundData"` `outputs`是数组类型，所以你也会得到一个返回值为数组的解码值，viem只是将显式类型元组映射为对象

为什么 viem 遵循这种方法？ 以下是具有两种不同返回类型的“latestRoundData”的合约函数定义：

```sol
function latestRoundData() external view
  returns (
    uint80 roundId,
    int256 answer,
    uint256 startedAt,
    uint256 updatedAt,
    uint80 answeredInRound
  );

struct Data {
  uint80 roundId;
  uint256 answer;
  uint256 startedAt;
  uint256 updatedAt;
  uint80 answeredInRound
}

function latestRoundData() external view returns (Data data);
```
第一个函数返回五个参数的集合，所以viem将其映射成为一个数组，我们不将它转为对象的原因是因为在对结构进行解码时，会变得很不明确。如何确定“返回”元组（第一个函数）和“结构”元组（第二个函数）之间的区别。

另一个原因时人们可能想它是一个数组类型（因为它是一组返回值），其他的库，像是ethers，它通过返回混合数组/对象类型来缓解这种情况，但这种类型在JavaScript中不可序列化，并且 viem 更喜欢不尝试“破解”JavaScript 类型。

## 为什么钱包客户端不支持公共操作？

钱包客户端不支持公共操作，因为钱包提供商（注入的`window.ethereum`、WalletConnect v2等）可能不提供大多数“节点”/“公共”RPC方法，例如`eth_call`、`eth_newFilter`、 `eth_getLogs` 等。这是因为钱包提供商正常运行不需要这些方法。 例如，钱包提供商可能只支持“eth_sendTransaction”和“eth_sign”，而不支持其他任何内容。

