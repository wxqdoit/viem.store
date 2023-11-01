---
head:
  - - meta
    - property: og:title
      content: 自定义传输方式
  - - meta
    - name: description
      content: 为客户端创建自定义传输的函数。
  - - meta
    - property: og:description
      content: 为客户端创建自定义传输的函数。

---

# 自定义传输方式

`custom` 传输接受[EIP-1193 `request` 函数](https://eips.ethereum.org/EIPS/eip-1193#request-1) 作为参数。 此传输方式对于与注入的钱包、提供 EIP-1193 提供程序的钱包（例如 WalletConnect 或 Coinbase SDK）集成，甚至支持提供自定义`request`功能。

## 导入

```ts
import { custom } from 'viem'
```

## Usage

在`custom`传输的时候，你可以使用任何的[EIP-1193 兼容的](https://eips.ethereum.org/EIPS/eip-1193) 以太坊提供商：

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})
```
或者自定义：

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { customRpc } from './rpc'

const client = createWalletClient({ 
  chain: mainnet,
  transport: custom({
    async request({ method, params }) {
      const response = await customRpc.request(method, params)
      return response
    }
  })
})
```

## 参数

### provider

- **Type:** `custom`

[EIP-1193 `request` 函数](https://eips.ethereum.org/EIPS/eip-1193#request)。

```ts
import { customRpc } from './rpc'

const transport = custom({
  async request({ method, params }) { // [!code focus:3]
    const response = await customRpc.request(method, params)
    return response
  }
})
```

### key（可选的）

- **Type:** `string`
- **Default:** `"custom"`

传输方式的key

```ts
const transport = custom(
  window.ethereum,
  { 
    key: 'windowProvider', // [!code focus]
  }
)
```

### name（可选的）

- **Type:** `string`
- **Default:** `"Ethereum Provider"`

传输方式的名称

```ts
const transport = custom(
  window.ethereum,
  { 
    name: 'Window Ethereum Provider', // [!code focus]
  }
)
```

### retryCount（可选的）

- **Type:** `number`
- **Default:** `3`

请求失败时重试的最大次数。

```ts
const transport = custom(window.ethereum, {
  retryCount: 5, // [!code focus]
})
```

### retryDelay（可选的）

- **Type:** `number`
- **Default:** `150`

每次重试之间的基本延迟（以毫秒为单位）。 默认情况下，Transport将使用[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`)，这意味着重试之间的时间不是恒定的 。

```ts
const transport = custom(window.ethereum, {
  retryDelay: 100, // [!code focus]
})
```

## 注意事项

- 如果你使用[公共客户端](/docs/clients/public)与`custom`传输方式进行配对，请确保provider支持[公共操作](/docs/actions/public/introduction)。
