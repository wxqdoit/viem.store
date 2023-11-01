---
head:
  - - meta
    - property: og:title
      content: HTTP 传输方式
  - - meta
    - name: description
      content: 为客户端创建HTTP传输的函数。
  - - meta
    - property: og:description
      content: 为客户端创建HTTP传输的函数。

---

# HTTP 传输方式

`http` 传输方式，通过HTTP连接到JSON-RPC API。

## 导入

```ts
import { http } from 'viem'
```

## 用例

```ts {4}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const transport = http('https://eth-mainnet.g.alchemy.com/v2/...')

const client = createPublicClient({
  chain: mainnet,
  transport,
})
```

::: warning
如果没有提供`url`，那么传输将回退到链上的公共RPC URL。 强烈建议提供经过身份验证的RPC URL以防止速率限制。
:::

### 批量 JSON-RPC

`http`传输支持批量JSON-RPC。所以可以在单个HTTP请求中发送多个JSON-RPC请求。

Transport将在给定时间段内批量处理Action，并在单个批处理JSON-RPC HTTP请求中执行它们。 默认情况下，该时间段是[零延迟](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#zero_delays)，这意味着批量请求将在当前时间结束时执行 [JavaScript 消息队列](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#queue)。 也可以指定自定义时间段`wait`（以毫秒为单位）。

您可以通过将`batch`标志设置为`true`来启用批处理 JSON-RPC：

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: true // [!code focus]
})
```
现在，当在调用操作的时候，HTTP传输将会在消息队列的末尾（或自定义时间段）进行批处理并发送这些请求，以单个批量的JSON-RPC HTTP请求形式发送：

```ts
// 下面将会以单个批处理的形式发送JSON-RPC HTTP请求到RPC Provider.
const [blockNumber, balance, ensName] = await Promise.all([
  client.getBlockNumber(),
  client.getBalance({ address: '0xd2135CfB216b74109775236E36d4b433F1DF507B' }),
  client.getEnsName({ address: '0xd2135CfB216b74109775236E36d4b433F1DF507B' }),
])
```

## 参数

### url（可选的）

- **Type:** `string`
- **Default:** `chain.rpcUrls.default.http[0]`

JSON-RPC API的Url。

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...')
```

### batch（可选的）

- **Type:** `boolean | BatchOptions`
- **Default:** `false`

切换以启用批处理JSON-RPC

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: true // [!code focus]
})
```

### batch.batchSize（可选的）

- **Type:** `number`
- **Default:** `1_000`

批量发送的 JSON-RPC 请求的最大数量。

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: {
    batchSize: 2_000 // [!code focus]
  }
})
```

### batch.wait（可选的）

- **Type:** `number`
- **Default:** `0` ([zero delay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop#zero_delays))

发送批处理请求之前等待的最大毫秒数。

```ts 
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  batch: {
    wait: 16 // [!code focus]
  }
})
```

### fetchOptions（可选的）

- **Type:** [`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

[Fetch options](https://developer.mozilla.org/en-US/docs/Web/API/fetch)传递给内部`fetch`函数。 对于传递身份验证标头或缓存选项很有用。

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  fetchOptions: { // [!code focus:5]
    headers: {
      'Authorization': 'Bearer ...'
    }
  }
})
```

### key（可选的）

- **Type:** `string`
- **Default:** `"http"`

传输方式的key。


```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  key: 'alchemy', // [!code focus]
})
```

### name（可选的）

- **Type:** `string`
- **Default:** `"HTTP JSON-RPC"`

传输方式的名称。


```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  name: 'Alchemy HTTP Provider', // [!code focus]
})
```

### retryCount（可选的）

- **Type:** `number`
- **Default:** `3`

请求失败时重试的最大次数。

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  retryCount: 5, // [!code focus]
})
```

### retryDelay（可选的）

- **Type:** `number`
- **Default:** `150`

每次重试之间的基本延迟（以毫秒为单位）。 默认情况下，Transport将使用[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`)，这意味着重试之间的时间不是恒定的 。

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  retryDelay: 100, // [!code focus]
})
```

### timeout（可选的）

- **Type:** `number`
- **Default:** `10_000`

请求超时时间。

```ts
const transport = http('https://eth-mainnet.g.alchemy.com/v2/...', {
  timeout: 60_000, // [!code focus]
})
```

