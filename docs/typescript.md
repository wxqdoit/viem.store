---
head:
  - - meta
    - property: og:title
      content: TypeScript
  - - meta
    - name: description
      content: viem中的TypeScript支持。
  - - meta
    - property: og:description
      content: viem中的TypeScript支持。
---

# TypeScript

viem被设计的尽可能类型安全，记住：

- 当前需要使用TypeScript v5.0.4或者更高版本
- 在这个存储库中更改类型是非破坏性的，通常作为补丁更改发布（否则每个类型增强都将是一个主要版本！）
- 强烈将以你锁定viem软件包到特定的补丁版本，在升级时预期类型可能在任何版本之间被固定或升级。
- viem 的非类型相关公共 API 仍然非常严格地遵循 semver。

为了确保正确运行，请确认你在`tsconfig.json`中将[`strict`](https://www.typescriptlang.org/tsconfig#strict)模式设置为`true`：

```json [tsconfig.json]
{
  "compilerOptions": {
    "strict": true
  }
}
```

## 类型推断

viem能够基于[ABI](https://docs.soliditylang.org/en/v0.8.15/abi-spec.html#json)和[EIP-712](https://eips.ethereum.org/EIPS/eip-712)类型化数据定义（由[ABIType](https://abitype.dev)提供）进行类型推断，从你的合约到前端给你完全端到端以及类型安全的非常棒的开发体验，（例如，自动完成 ABI 函数名称并捕获拼写错误、强类型 ABI 函数参数等）。

为此，您必须将 [const 断言](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) 添加到特定的配置参数（更多 有关以下内容的信息）或内联定义它们。 例如，[`readContract`](/docs/contract/readContract)的`abi`配置参数：

```ts
const result = client.readContract({
  abi: […], // <--- defined inline
})
```

```ts
const abi = […] as const // <--- const 断言
const result = client.readContract({ abi })
```

如果类型推断不起作用，那可能是你忘记添加 `const` assertion或者定义参数配置。

::: tip
不幸的是，TypeScript 不支持将 JSON 导入为 const。查看@wagmi/cli以帮助解决此问题！它可以自动从 Etherscan 获取 ABI、从 Foundry/Hardhat 项目解析 ABI 等等。
:::

### 合约 ABIs

The following actions and utilities support type inference when you add a const assertion to `abi` or define `abi` inline:

#### 功能方法

- [`createEventFilter`](/docs/actions/public/createEventFilter)
- [`watchEvent`](/docs/actions/public/watchEvent)
- [`createContractEventFilter`](/docs/contract/createContractEventFilter)
- [`deployContract`](/docs/contract/deployContract)
- [`estimateContractGas`](/docs/contract/estimateContractGas)
- [`multicall`](/docs/contract/multicall)
- [`readContract`](/docs/contract/readContract)
- [`simulateContract`](/docs/contract/simulateContract)
- [`writeContract`](/docs/contract/writeContract)
- [`watchContractEvent`](/docs/contract/watchContractEvent)

#### 公用方法

- [`decodeEventLog` ](/docs/contract/decodeEventLog)
- [`decodeFunctionResult` ](/docs/contract/decodeFunctionResult)
- [`encodeDeployData` ](/docs/contract/encodeDeployData)
- [`encodeErrorResult` ](/docs/contract/encodeErrorResult)
- [`encodeEventTopics` ](/docs/contract/encodeEventTopics)
- [`encodeFunctionData` ](/docs/contract/encodeFunctionData)
- [`encodeFunctionResult` ](/docs/contract/encodeFunctionResult)
- [`getAbiItem` ](/docs/abi/getAbiItem)

例如, `readContract`:

```ts
const result = client.readContract({
  //  ^? 常量数据: bigint | undefined
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  abi: [
    {
      name: 'balanceOf',
      type: 'function',
      stateMutability: 'view',
      inputs: [{ name: 'account', type: 'address' }],
      outputs: [{ type: 'uint256' }],
    },
    {
      name: 'totalSupply',
      type: 'function',
      stateMutability: 'view',
      inputs: [],
      outputs: [{ type: 'uint256' }],
    },
    {
      name: 'transfer',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        { name: 'recipient', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      outputs: [{ type: 'bool' }],
    },
  ],

  functionName: 'balanceOf',
  // ^? (property) functionName?: "balanceOf" | "totalSupply" | undefined
  // 请注意"transfer"不包括在内,因为它不是一个"read"函数

  args: ['0x27a69ffba1e939ddcfecc8c7e0f967b872bac65c'],
  // ^? (property) args?: readonly [`0x${string}`] | undefined
})
```

### EIP-712 类型化数据
向`types`添加const断言或内联定义`types`会将类型推断添加到[`signTypedData`](/docs/actions/wallet/signTypedData)的`value`配置参数：

```ts
const result = client.signTypedData({
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },

  types: {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
    ],
  },

  value: {
    // ^? (parameter) value?: { name: string; wallet: `0x${string}` } | {
    //     from: {
    //         name: string;
    //         wallet: `0x${string}`;
    //     };
    //     to: {
    //         name: string;
    //         wallet: `0x${string}`;
    //     };
    //     contents: string;
    // } | undefined
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
})
```

### 其他

下面的公共方法在你使用const断言或内联参数定义的时候支持类型推断

- [`decodeAbiParameters` ](/docs/abi/decodeAbiParameters)
- [`encodeAbiParameters` ](/docs/abi/encodeAbiParameters)
- [`encodePacked` ](/docs/abi/encodePacked)
- [`parseAbi` ](/docs/abi/parseAbi)
- [`parseAbiItem` ](/docs/abi/parseAbiItem)
- [`parseAbiParameter` ](/docs/abi/parseAbiParameter)
- [`parseAbiParameters` ](/docs/abi/parseAbiParameters)

## 配置内部类型

对于高级用例，你可能想配置viem的内部类型。viem的绝大多数类型依赖由[ABIType](https://abitype.dev)提供的ABIs和EIP-712的类型化数据， 在这里查看更多如何配置类型的信息的ABIType[文档](https://abitype.dev/config.html)

## `window` 兼容性补丁
- [`EIP1193Provider`](https://github.com/wagmi-dev/viem/blob/4bdbf15be0d61b52a195e11c97201e707fb616cc/src/types/eip1193)（包括完全类型化的“请求”函数和类型化事件）。 如果没有检测到浏览器扩展钱包，或者在服务器上展现，它可能是`undefined`。

```ts
import 'viem/window';

if (typeof window !== 'undefined') {
  const transaction = await window.ethereum.request({
//      ^? const transaction: Transaction        
    method: 'eth_getTransactionByHash',
//  ^? (property) method: "eth_blockNumber" | "eth_call" | ...
    params: ['0x...']
//  ^? (property) params: [hash: Hash]
  })
}
```
