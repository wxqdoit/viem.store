---
head:
  - - meta
    - property: og:title
      content: 迁移指南
  - - meta
    - name: description
      content: 迁移到viem较新版本的指南。
  - - meta
    - property: og:description
      content: 迁移到viem较新版本的指南。
---

# 迁移指南

如果你之前使用较早版本的`viem`，你需要确认升级到下面列出的APIs：

## 1.x.x 重大变化

1.x.x版本只包括对事件日志解码行为进行非常小的改动，移除了ether.js钱包适配器。如果你没有直接使用这些APIs，你无需将你的代码更新到这个版本。

### 移除`ethersWalletToAccount`

`ethersWalletToAccount`适配器已经被移除了。

这个是适配器是在viem没有私钥和HD帐户被引入的。从0.2开始，viem提供了创建和导入[私钥](https://viem.sh/docs/accounts/privateKey.html)和[HD账户](https://viem.sh/docs/accounts/mnemonic.html)的所有功能。

如果你仍然需要它，你可以复制粘贴[旧的实现](https://github.com/wagmi-dev/viem/blob/a9a71507032db896295fa1f3fa2dd6c2bdc85137/src/adapters/ethers.ts)。

### `logIndex`和`transactionIndex`

`logIndex`和`transactionIndex`在`Log`中的返回现在用`number`替代`bigint`。

```ts
const log: Log = {
  ...
  logIndex: 1n, // [!code --]
  logIndex: 1, // [!code ++]
  transactionIndex: 1n, // [!code --]
  transactionIndex: 1, // [!code ++]
  ...
}
```

### 次要的：`decodeEventLog`行为修改

`decodeEventLog`不再尝试部分解码事件。如果日志不符合ABI(indexed/non-indexed参数与 topics/data不匹配)，它将会抛出错误。

例如，下面的日志将会抛出错误，因为non-`indexed`参数与`data`的长度不匹配。

```ts {2-4}
decodeEventLog({
  abi: parseAbi(['event Transfer(address indexed, address, uint256)']),
  // `data`应该是64字节的, 但它只是32字节的。
  data: '0x0000000000000000000000000000000000000000000000000000000000000001'
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  ]
})
```
以前，上面的代码只会解码`indexed`参数。

如果你想解码部分事件日志（以前的方式），你可以是用`strct`模式：

```ts 
decodeEventLog({
  abi: parseAbi(['event Transfer(address indexed, address, uint256)']),
  data: '0x0000000000000000000000000000000000000000000000000000000000000001'
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  ],
  strict: false // [!code ++]
})
```

## 0.3.x 重大改变

0.3.x版本只包含几个关于RPC错误的重大更改。如果你没有直接使用下面列出的APIs，你不用在这个版本更新代码.

### 将`RequestError`重命名为`RpcError`

为了更加明确，我们将`RequestError`重命名为`RpcError`。

```ts
import { RequestError } from 'viem'  // [!code --]
import { RpcError } from 'viem'  // [!code ++]

throw new RequestError(new Error('An error occurred.'))  // [!code --]
throw new RpcError(new Error('An error occurred.'))  // [!code ++]
```

### 移除`RpcRequestError`

`RpcRequestError`被移除了，使用`RpcError`来代替它。

```ts
import { RpcRequestError } from 'viem' // [!code --]
import { RpcError } from 'viem'  // [!code ++]

throw new RpcRequestError(new Error('An error occurred.')) // [!code --]
throw new RpcError(new Error('An error occurred.')) // [!code ++]
```

### 将`RpcError`重命名为`RpcRequestError`

为提高一致性，`RpcError`被重命名为`RpcRequestError`。

```ts
import { RpcError } from 'viem' // [!code --]
import { RpcRequestError } from 'viem'  // [!code ++]

const err = new RpcError({ // [!code --]
const err = new RpcRequestError({  // [!code ++]
  body: { foo: 'bar' },
  error: { code: 420, message: 'Error' },
  url: 'https://example-rpc.com',
})
```

## 0.2.x 重大改变

### `sendTransaction`, `writeContract`, `deployContract`这些方法需要`chain`

`sendTransaction`, `writeContract`, `deployContract`的操作，需要需要`chain`。

你可以再Client加入Chain：

```ts
import { createWalletClient, custom, getAccount } from 'viem'
import { mainnet } from 'viem/chains'

export const walletClient = createWalletClient({
  chain: mainnet, // [!code ++]
  transport: custom(window.ethereum)
})
 
const account = getAccount('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
 
const hash = await walletClient.sendTransaction({ 
  account,
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n
})
```
或者你可以直接在方法中传入Chain：

```ts
import { createWalletClient, custom, getAccount } from 'viem'
import { mainnet } from 'viem/chains'

export const walletClient = createWalletClient({
  chain: mainnet, // [!code --]
  transport: custom(window.ethereum)
})
 
const account = getAccount('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
 
const hash = await walletClient.sendTransaction({ 
  account,
  chain: mainnet, // [!code ++]
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n
})
```

### `recoverAddress`, `recoverMessageAddress`, `verifyMessage`这些方法现在是异步的

以下函数现在是`async`函数而不是同步函数：

- `recoverAddress`
- `recoverMessageAddress`
- `verifyMessage`

```ts
import { recoverMessageAddress } from 'viem'

recoverMessageAddress({ message: 'hello world', signature: '0x...' }) // [!code --]
await recoverMessageAddress({ message: 'hello world', signature: '0x...' }) // [!code ++]
```

### `assertChain` removed from `sendTransaction`

在`sendTransaction`, `writeContract` & `deployContract`中移除`assertChain`参数。如果你希望绕过链检查（除非出于测试目的，否则不推荐），可以通过传入`chain: null`：

```ts
await walletClient.sendTransaction({
  assertChain: false, // [!code --]
  chain: null, // [!code ++]
  ...
})
```

### `getAccount`被移除

移除`getAccount`函数.

#### 如果是JSON-RPC账户,直接用它自己的地址。

现在你可以在`account`选项上直接传入地址。

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const address = '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'

const client = createWalletClient({
  account: getAccount(address), // [!code --]
  account: address, // [!code ++]
  chain: mainnet,
  transport: custom(window.ethereum)
})
```

#### 如果是以太坊钱包适配器，使用`ethersWalletToAccount`.

如果你一起拿使用以太坊钱包适配器，你可以使用`ethersWalletToAccount`函数。

> 注意: viem 0.2.0 现在蛋[私钥](/docs/accounts/privateKey.html)和[助记词账户](/docs/accounts/mnemonic.html)的实现。可能你现在不需要适配器了，适配器可能在将来的版本移除。

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { getAccount } from 'viem/ethers' // [!code --]
import { ethersWalletToAccount } from 'viem/ethers' // [!code ++]
import { Wallet } from 'ethers'

const account = getAccount(new Wallet('0x...')) // [!code --]
const account = ethersWalletToAccount(new Wallet('0x...')) // [!code ++]

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: custom(window.ethereum)
})
```

#### 对于本地账户, 使用`toAccount`。

如果你使用自定义签名实现，可以使用`toAccount`方法。

```ts
import { createWalletClient, http, getAccount } from 'viem' // [!code --]
import { createWalletClient, http } from 'viem' // [!code ++]
import { toAccount } from 'viem/accounts' // [!code ++]
import { mainnet } from 'viem/chains'
import { getAddress, signMessage, signTransaction } from './sign-utils' 

const privateKey = '0x...' 
const account = getAccount({ // [!code --]
const account = toAccount({ // [!code ++]
  address: getAddress(privateKey),
  signMessage(message) {
    return signMessage(message, privateKey)
  },
  signTransaction(transaction) {
    return signTransaction(transaction, privateKey)
  },
  signTypedData(typedData) {
    return signTypedData(typedData, privateKey)
  }
})

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: http()
})
```

### 在`signMessage`方法中重命名`data`

在`signMessage`方法中`data`被重命名为`message`。

```ts
walletClient.signMessage({
  data: 'hello world', // [!code --]
  message: 'hello world', // [!code ++]
})
```
