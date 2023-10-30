---
head:
  - - meta
    - property: og:title
      content: 公共客户端
  - - meta
    - name: description
      content: 一个函数创建公共客户端。
  - - meta
    - property: og:description
      content: 一个函数创建公共客户端。

---

# 公共客户端
公共客户端是一个面向公众[JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)方法的接口，如检索区块高度，交易，从智能合约读取数据等等。访问[Public Actions](/docs/actions/public/introduction)。

通过`createPublicClient`函数来创建一个客户端，并赋予[Transport](/docs/clients/intro)来配置[Chain](/docs/clients/chains)。

## 导入

```ts
import { createPublicClient } from 'viem'
```

## 用例

使用您想要的[Chain](/docs/clients/chains)（例如`mainnet`）和[Transport](/docs/clients/intro)（例如`http`）初始化客户端。

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({ 
  chain: mainnet,
  transport: http()
})
```

然后开始使用[公共操作](/docs/actions/public/introduction):

```ts
const blockNumber = await client.getBlockNumber() // [!code focus:10]
```

## 优化

公共客户端还支持[`eth_call`聚合](#multicall)来提高性能。

### `eth_call` 聚合 (通过 Multicall)

公共客户端支持将 `eth_call` 请求聚合为单个多调用 (`aggregate3`) 请求。

这意味着对于任何使用 `eth_call` 请求的方法（如 `readContract`），公共客户端会打包请求，然后通过单一multicall请求发送到RPC提供者。这就可以显著提高网络性能，并减少Alchemy、Infura 等 RPC 提供商使用的[计算单元 (CU)](https://docs.alchemy.com/reference/compute-units) 数量。

公共客户端会在一段时间内把eth_call请求聚合起来。通常在默认情况下，viem会在当前[JavaScript消息队列](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#queue)的末尾执行这些批量请求，但是用户可以设置自定义等待事时间（以毫秒计）

你可以通过设置`batch.multicall` 字段为 `true`来启用`eth_call`：

```ts
const client = createPublicClient({
  batch: {
    multicall: true, // [!code focus]
  },
  chain: mainnet,
  transport: http(),
})
```

> 也可以[自定义`multicall`选项](#batch-multicall-batchsize-optional)。

现在，当你使用`readContract`方法，公共客户端会打包，然后公共客户端将在消息队列末尾（或自定义时间段）在单个“eth_call”多调用请求中批量发送这些请求：


```ts
const contract = getContract({ address, abi })

// 下面的示例将只会向 RPC 提供者发送单个请求。
const [name, totalSupply, symbol, tokenUri, balance] = await Promise.all([
  contract.read.name(),
  contract.read.totalSupply(),
  contract.read.symbol(),
  contract.read.tokenURI([420n]),
  contract.read.balanceOf([address]),
])
```

> 阅读更多[合约实例](/docs/contract/getContract.html).

## 参数

### transport

- **Type:** [Transport](/docs/glossary/types#transport)

公共客户端的中的[Transport](/docs/clients/intro)。

```ts
const client = createPublicClient({
  chain: mainnet,
  transport: http(), // [!code focus]
})
```

### chain（可选的）

- **Type:** [Chain](/docs/glossary/types#chain)
- 
公共客户端的中的[Chain](/docs/clients/chains)。


```ts
const client = createPublicClient({
  chain: mainnet, // [!code focus]
  transport: http(),
})
```

### batch（可选的）

用于批处理设置的标识

### batch.multicall（可选的）

- **Type:** `boolean | MulticallBatchOptions`
- **Default:** `false`


切换来启用`eth_call`多次调用聚合.

```ts
const client = createPublicClient({
  batch: {
    multicall: true, // [!code focus]
  },
  chain: mainnet,
  transport: http(),
})
```

### batch.multicall.batchSize（可选的）

- **Type:** `number`
- **Default:** `1_024`

每个多次调用的调用数据块的最大值（使用bytes计算）。

> 注意：有一些RPC Providers限制单个请求中可以被发送的数据大小，最好是检查一下RPC Provider，你的`eth_call` 请求中是否有`calldata`大小限制

```ts
const client = createPublicClient({
  batch: {
    multicall: {
      batchSize: 512, // [!code focus]
    },
  },
  chain: mainnet,
  transport: http(),
})
```

### batch.multicall.wait（可选的）

- **Type:** `number`
- **Default:** `0` ([zero delay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#zero_delays))

发送批处理请求之前等待的最大毫秒数。

```ts
const client = createPublicClient({
  batch: {
    multicall: {
      wait: 16, // [!code focus]
    },
  },
  chain: mainnet,
  transport: http(),
})
```

### cacheTime（可选的）

- **Type:** `number`
- **Default:** `client.pollingInterval`

缓存数据在内存中保留的时间（以毫秒为单位）。

```ts
const client = createPublicClient({
  cacheTime: 10_000, // [!code focus]
  chain: mainnet,
  transport: http(),
})
```

### key（可选的）

- **Type:** `string`
- **Default:** `"public"`

客户端中的key。

```ts
const client = createPublicClient({
  chain: mainnet,
  key: 'public', // [!code focus]
  transport: http(),
})
```

### name（可选的）

- **Type:** `string`
- **Default:** `"Public Client"`

客户端的名字。

```ts
const client = createPublicClient({
  chain: mainnet,
  name: 'Public Client', // [!code focus]
  transport: http(),
})
```

### pollingInterval（可选的）

- **Type:** `number`
- **Default:** `4_000`

轮询启用的操作的间隔时间（毫秒）

```ts
const client = createPublicClient({
  chain: mainnet,
  pollingInterval: 10_000, // [!code focus]
  transport: http(),
})
```

## 例子

在下面的[公共客户端示例](https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/clients_public-client) 查看`createPublicClient`的用例：

<iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/clients_public-client?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"></iframe>
