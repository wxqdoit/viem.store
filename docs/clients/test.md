---
head:
  - - meta
    - property: og:title
      content: 测试客户端
  - - meta
    - name: description
      content: 一个方法创建测试客户端
  - - meta
    - property: og:description
      content: 一个方法创建测试客户端

---

# 测试客户端

测试客户端是一个用于测试JSON-RPC API方法可访问性的接口，可通过本地以太坊测试节点，例如[Anvil](https://book.getfoundry.sh/anvil/) 或 [Hardhat](https://https://hardhat.org/)通过[测试操作](/docs/actions/test/introduction)进行挖块、伪装账户、设置费用等。

`createTestClient`函数使用给定的 [Transport](/docs/clients/intro) 来设置一个测试RPC客户端。

## 导入

```ts
import { createTestClient } from 'viem'
```

## 用例

使用想要的[Chain](/docs/clients/chains)、[Transport](/docs/clients/intro)（例如`http`）和[mode](#mode)（例如`"anvil"`）初始化客户端 ）。

```ts
import { createTestClient, http } from 'viem'
import { foundry } from 'viem/chains'

const client = createTestClient({
  chain: foundry,
  mode: 'anvil',
  transport: http(), 
})
```

现在可以使用 [测试操作](/docs/actions/test/introduction)了：

```ts
const mine = await client.mine({ blocks: 1 }) // [!code focus:10]
```

### 使用公共/钱包操作来拓展测试客户端

当与以太坊测试节点交互时，可能还会发现自己想要使用相同的链和传输与公共操作和钱包操作进行交互。 可以使用以下操作扩展测试客户端，而不是创建三个不同的客户端：

```ts
import { createTestClient, http, publicActions, walletActions } from 'viem'
import { foundry } from 'viem/chains'

const client = createTestClient({
  chain: foundry,
  mode: 'anvil',
  transport: http(), 
})
  .extend(publicActions)
  .extend(walletActions)

const blockNumber = await client.getBlockNumber() // Public Action
const hash = await client.sendTransaction({ ... }) // Wallet Action
const mine = await client.mine({ blocks: 1 }) // Test Action
```

## Parameters

### mode

- **Type:** `"anvil" | "hardhat" | "ganache"`

测试客户端的模式。

```ts
const client = createTestClient({
  chain: foundry,
  mode: 'anvil', // [!code focus]
  transport: http(), 
})
```

### transport

- **Type:** [Transport](/docs/glossary/types#transport)

测试客户端的[Transport](/docs/clients/intro)。

```ts
const client = createTestClient({
  chain: foundry,
  mode: 'anvil', 
  transport: http(),  // [!code focus]
})
```

### account（可选的）

- **Type:** `Account | Address`

供客户使用的帐户。 这将用于需要`account`作为参数的操作。

account的值可以是[JSON-RPC账户](/docs/accounts/jsonRpc)或者[本地账户(私钥，助记词等)](/docs/accounts/privateKey)。

```ts
import { privateKeyToAccount } from 'viem/accounts'

const client = createTestClient({
  account: privateKeyToAccount('0x...') // [!code focus]
  chain: foundry,
  mode: 'anvil',
  transport: http(),
})
```

### chain（可选的）

- **Type:** [Chain](/docs/glossary/types#chain)

测试客户端中的[Chain](/docs/clients/chains)。

```ts
const client = createTestClient({
  chain: foundry, // [!code focus]
  mode: 'anvil',
  transport: http(), 
})
```

### cacheTime（可选的）

- **Type:** `number`
- **Default:** `client.pollingInterval`

缓存数据在内存中保留的时间（以毫秒为单位）。

```ts
const client = createTestClient({
  cacheTime: 10_000, // [!code focus]
  chain: foundry,
  mode: 'anvil',
  transport: http(),
})
```

### name（可选的）

- **Type:** `string`
- **Default:** `"Test Client"`

客户端的名字。

```ts
const client = createTestClient({
  chain: foundry,
  mode: 'anvil', 
  name: 'Anvil Client',  // [!code focus]
  transport: http(),
})
```

### pollingInterval（可选的）

- **Type:** `number`
- **Default:** `4_000`

轮询启用的操作的间隔时间（毫秒）

```ts
const client = createTestClient({
  chain: foundry,
  mode: 'anvil', 
  pollingInterval: 10_000,  // [!code focus]
  transport: http(),
})
```
