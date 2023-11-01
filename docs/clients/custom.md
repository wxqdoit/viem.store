---
head:
  - - meta
    - property: og:title
      content: 创建自定义客户端
  - - meta
    - name: description
      content: 创建自定义Viem客户端
  - - meta
    - property: og:description
      content: 创建自定义Viem客户端

---

# 创建自定义客户端

使用`createClient`函数并选择性地扩展(`.extend`)它来构建您自己的viem客户端–这就是viem的内部客户端([Public](/docs/clients/public)、[Wallet](/docs/clients/wallet) 和 [Test](/docs/clients/test)) 的创建方法。

如果你对客户端的行为有特定要求，并且想要使用自定义功能扩展该客户端（即创建 [EIP-4337 Bundler](/docs/third-party/account-abstraction)，或 [geth 调试](https://geth.ethereum.org/docs/interacting-with-geth/rpc/ns-debug) 客户端）。

`createClient` 函数使用给定的 [Transport](/docs/clients/intro) 来设置一个基础 viem 客户端，并在配置好[Chain](/docs/clients/chains)之后，就使用自定义属性（可以是操作或其他配置）来扩展客户端。

## 导入

```ts
import { createClient } from 'viem'
```

## 用例

使用你想要的[Chain](/docs/clients/chains)(如`mainnet`) 和[Transport](/docs/clients/intro) (如 `http`)来初始化客户端。

```ts
import { createClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createClient({ 
  chain: mainnet,
  transport: http()
})
```

接下来你既可以[使用一些操作和配置来拓展你的客户端](#extending-with-actions-or-configuration)，也可以按原样来使用它以达到[最大化应用程序中的tree-shaking](#tree-shaking)。

### 使用操作或配置进行扩展

你可以在操作或配置中通过用`.extend`函数来扩展你客户端。

下面是一个使用`debug_traceCall`RPC方法操作来实现[geth 调试](https://geth.ethereum.org/docs/interacting-with-geth/rpc/ns-debug) 客户端的简单实现。

```ts {12-21,23-29}
import { 
  createClient, 
  http,
  formatTransactionRequest,
  type CallParameters
} from 'viem'
import { mainnet } from 'viem/chains'

const debugClient = createClient({ 
  chain: mainnet,
  transport: http(),
}).extend(client => ({
  // ...
  async traceCall(args: CallParameters) {
    return client.request({
      method: 'debug_traceCall',
      params: [formatTransactionRequest(args), 'latest', {}]
    })
  },
  // ...
}))

const response = await debugClient.traceCall({
  from: '0xdeadbeef29292929192939494959594933929292',
  to: '0xde929f939d939d393f939393f93939f393929023',
  gas: 69420n,
  data: '0xf00d4b5d00000000000000000000000001291230982139282304923482304912923823920000000000000000000000001293123098123928310239129839291010293810'
})
// { failed: false, gas: 69420, returnValue: '...', structLogs: [] }
```

有关使用`.extend`的更简洁的实现，请查看viem的[公共客户端实现](https://github.com/wagmi-dev/viem/blob/29c053f5069a5b44e3791972c221368a2c71a254/src/clients/createPublicClient.ts#L48-L68)通过[公共操作](https://github.com/wagmi-dev/viem/blob/29c053f5069a5b44e3791972c221368a2c71a254/src/clients/decorators/public.ts#L1377-L1425)进行扩展。

### Tree-shaking

你可以不加其他额外的操作，按原样使用客户端，最大限度地提高应用程序中的tree-shaking。如果你对捆绑包大小很执着并且只想包含使用的操作，那么就非常有用。

在下面的例子中，我们直接从`viem`导入createClient，然后将Client作为第一个参数注入到所调用的方法中去。

```ts {3,10-11}
import { createClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getBlock, sendTransaction } from 'viem/actions'

const client = createClient({ 
  chain: mainnet,
  transport: http()
})

const blockNumber = await getBlock(client, { blockTag: 'latest' })
const hash = await sendTransaction(client, { ... })
```

## 参数

### transport

- **Type:** [Transport](/docs/glossary/types#transport)

公共客户端中的[Transport](/docs/clients/intro)。

```ts
const client = createClient({
  chain: mainnet,
  transport: http(), // [!code focus]
})
```

### account（可选的）

- **Type:** `Account | Address`

用在客户端中的账户，这将会作为`account`参数用到createClient操作中去。

它接受一个[JSON-RPC 账户](/docs/accounts/jsonRpc) 或者 [本地账户 (私钥账户等)](/docs/accounts/privateKey).

```ts
import { privateKeyToAccount } from 'viem/accounts'

const client = createClient({
  account: privateKeyToAccount('0x...') // [!code focus]
  chain: mainnet,
  transport: http(),
})
```

### chain（可选的）

- **Type:** [Chain](/docs/glossary/types#chain)

公共客户端中的[Chain](/docs/clients/chains)。


```ts
const client = createClient({
  chain: mainnet, // [!code focus]
  transport: http(),
})
```

### batch （可选的）

用于批处理设置的标识

### batch.multicall（可选的）

- **Type:** `boolean | MulticallBatchOptions`
- **Default:** `false`

切换来启用`eth_call`多次调用聚合.

```ts
const client = createClient({
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
const client = createClient({
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
const client = createClient({
  batch: {
    multicall: {
      wait: 16, // [!code focus]
    },
  },
  chain: mainnet,
  transport: http(),
})
```

### key （可选的）

- **Type:** `string`
- **Default:** `"public"`

客户端中的key。

```ts
const client = createClient({
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
const client = createClient({
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
const client = createClient({
  chain: mainnet,
  pollingInterval: 10_000, // [!code focus]
  transport: http(),
})
```
