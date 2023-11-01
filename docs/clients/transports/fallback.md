---
head:
  - - meta
    - property: og:title
      content: 备用传输
  - - meta
    - name: description
      content: 为客户端创建备用传输的函数。
  - - meta
    - property: og:description
      content: 为客户端创建备用传输的函数。

---

# 备用传输

`fallback`传输方式需要**多个**传输节点，如果一个传输请求失败了，它会使用列表中的下一个传输节点。

## 导入

```ts
import { fallback } from 'viem'
```

## Usage

```ts {4-5,9}
import { createPublicClient, fallback, http } from 'viem'
import { mainnet } from 'viem/chains'

const alchemy = http('https://eth-mainnet.g.alchemy.com/v2/...')
const infura = http('https://mainnet.infura.io/v3/...')

const client = createPublicClient({
  chain: mainnet,
  transport: fallback([alchemy, infura]),
})
```

### 传输排序

传输排序使列表中的`fallback`传输的每个传输都可以通过加权移动评分算法根据其**延迟**和**稳定性**自动排序。

每间隔10秒（`interval`），`fallback`传输将对列表中的每个传输执行ping操作。 对于过去10个ping（`sampleCount`），将根据它们是否响应（稳定性）以及响应速度（延迟）进行排名。 该算法对稳定性分数应用权重为`0.7`，对延迟分数应用权重为`0.3`，以得出其排名的最终分数。

在采样期内具有最佳延迟和稳定性得分的传输节点将首先被优先考虑。

使用 `rank` 选项使用自动排序：

```ts
const client = createPublicClient({
  chain: mainnet,
  transport: fallback(
    [alchemy, infura],
    { rank: true } // [!code focus]
  ),
})
```

也可以修改默认排名配置：

```ts
const client = createPublicClient({
  chain: mainnet,
  transport: fallback(
    [alchemy, infura],
    { // [!code focus:9]
      rank: {
        interval: 60_000,
        sampleCount: 5,
        timeout: 500,
        weights: {
          latency: 0.3,
          stability: 0.7
        }
      }
    }
  ),
})
```

## 参数

### rank（可选的）

- **Type:** `boolean | RankOptions`
- **Default:** `false`

是否根据传输的延迟和稳定性自动对其进行排名， 设置为`false`来禁用自动排序。

```ts
const transport = fallback([alchemy, infura], {
  rank: false, // [!code focus]
})
```

### rank.interval（可选的）

- **Type:** `number`
- **Default:** `client.pollingInterval`

排序器应当ping RPC URL 的轮询间隔（以毫秒为单位）。

```ts
const transport = fallback([alchemy, infura], {
  rank: { // [!code focus:3]
    interval: 5_000
  },
})
```

### rank.sampleCount（可选的）

- **Type:** `number`
- **Default:** `10`

要执行排序的先前样本的数量（默认是10个）。

```ts
const transport = fallback([alchemy, infura], {
  rank: { // [!code focus:3]
    sampleCount: 10
  },
})
```

### rank.timeout（可选的）

- **Type:** `number`
- **Default:** `1_000`

采样传输超时时间。

```ts
const transport = fallback([alchemy, infura], {
  rank: { // [!code focus:3]
    timeout: 500
  },
})
```

### rank.weights.latency（可选的）

- **Type:** `number`
- **Default:** `0.3`

延迟分数的权重。 权重与`weights`对象中的其他值成比例。

```ts
const transport = fallback([alchemy, infura], {
  rank: {
    weights: {
      latency: 0.4, // [!code focus:3]
      stability: 0.6
    }
  },
})
```

### rank.weights.stability（可选的）

- **Type:** `number`
- **Default:** `0.7`

稳定性得分的权重。 权重与`weights`对象中的其他值成比例。

```ts
const transport = fallback([alchemy, infura], {
  rank: {
    weights: {
      latency: 0.4,
      stability: 0.6 // [!code focus:3]
    }
  },
})
```

### retryCount（可选的）

- **Type:** `number`
- **Default:** `3`

请求失败时重试的最大次数。

> 注意：在重试之前回滚将会尝试所有的传输。

```ts
const transport = fallback([alchemy, infura], {
  retryCount: 5, // [!code focus]
})
```

### retryDelay（可选的）

- **Type:** `number`
- **Default:** `150`

每次重试之间的基本延迟（以毫秒为单位）。 默认情况下，Transport将使用[指数退避](https://en.wikipedia.org/wiki/Exponential_backoff) (`~~(1 << count) * retryDelay`)，这意味着重试之间的时间不是恒定的 。

```ts
const transport = fallback([alchemy, infura], {
  retryDelay: 100, // [!code focus]
})
```

 
