---
head:
  - - meta
    - property: og:title
      content: WebSocket传输方式
  - - meta
    - name: description
      content: 为客户端创建WebSocket传输方式的方法。
  - - meta
    - property: og:description
      content: 为客户端创建WebSocket传输方式的方法。

---

# WebSocket 传输方式
`webSocket`传输方式，通过WebSocket连接到JSON-RPC API。

## 导入

```ts
import { webSocket } from 'viem'
```

## 用例

```ts {4}
import { createPublicClient, webSocket } from 'viem'
import { mainnet } from 'viem/chains'

const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...')

const client = createPublicClient({
  chain: mainnet, 
  transport,
})
```

::: warning
如果提供了`url`，那么传输将回退到链上的公共RPC URL。 强烈建议提供经过身份验证的RPC URL以防止速率限制。
:::

## 参数

### url

- **Type:** `string`

JSON-RPC API 的 url.

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...')
```

### key（可选的）

- **Type:** `string`
- **Default:** `"webSocket"`

传输方式的key。

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', { 
  key: 'alchemy',  // [!code focus]
})
```

### name（可选的）

- **Type:** `string`
- **Default:** `"WebSocket JSON-RPC"`

传输方式的名称。

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', { 
  name: 'Alchemy WebSocket Provider',  // [!code focus]
})
```

### retryCount（可选的）

- **Type:** `number`
- **Default:** `3`

请求失败时重试的最大次数。

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  retryCount: 5, // [!code focus]
})
```

### retryDelay（可选的）

- **Type:** `number`
- **Default:** `150`

每次重试之间的基本延迟（以毫秒为单位）。 默认情况下，Transport将使用[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`)，这意味着重试之间的时间不是恒定的 。

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  retryDelay: 100, // [!code focus]
})
```

### timeout（可选的）

- **Type:** `number`
- **Default:** `10_000`

请求超时时间。

```ts
const transport = webSocket('wss://eth-mainnet.g.alchemy.com/v2/...', {
  timeout: 60_000, // [!code focus]
})
```
