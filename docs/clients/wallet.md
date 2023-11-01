---
head:
  - - meta
    - property: og:title
      content: 钱包客户端
  - - meta
    - name: description
      content: 一个方法创建钱包客户端.
  - - meta
    - property: og:description
      content: 一个方法创建钱包客户端.

---

# 钱包客户端

钱包客户端是一个用于与[一以太坊账户](https://ethereum.org/en/glossary/#account)交互的接口，它通过[钱包操作](/docs/actions/wallet/introduction)提供恢复账户，执行交易，签名消息等功能。


使用`createWalletClient` 函数创建一个钱包客户端，并赋予一个[Transport](/docs/clients/intro)。

钱包客户端支持签名：

- [JSON-RPC账户](#json-rpc-accounts)（例如： 浏览器扩展钱包、WalletConnect等）。
- [本地账户](#local-accounts-private-key-mnemonic-etc)（例如： 私钥/助记词钱包）。

## 导入

```ts
import { createWalletClient } from 'viem'
```

## JSON-RPC账户

[JSON-RPC账户](/docs/accounts/jsonRpc) **推迟**通过JSON-RPC将交易和消息签名到目标钱包。 一个例子是通过浏览器扩展钱包（例如 MetaMask）使用`window.ethereum`发送交易。

下面是一个设置JSON-RPC账户的示例：

#### 1：初始化一个钱包客户端

在我们设置账户和开始使用钱包操作之前，我们需要用[`custom` Transport](/docs/clients/transports/custom)来设置好钱包客户端，并在里面传入`window.ethereum`Provider：

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})
```

#### 2: 设置JSON-RPC账户

我们需要检索可以在钱包中访问的地址（例如 MetaMask）。

```ts
import { createWalletClient, custom } from 'viem' // [!code focus]
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})

const [address] = await client.getAddresses() // [!code focus:10]
// or: const [address] = await client.requestAddresses() // [!code focus:10]
```

> 注意：有一些钱包（如metamask）可能需要先通过[`client.requestAddresses`](/docs/actions/wallet/requestAddresses)请求账户地址
> Note: Some Wallets (like MetaMask) may require you to request access to Account addresses via [`client.requestAddresses`](/docs/actions/wallet/requestAddresses) first.

#### 3: 使用[钱包操作](/docs/actions/wallet/introduction)

现在可以在需要用户签名的钱包操作中使用该地址：

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})

const [address] = await client.getAddresses()

const hash = await client.sendTransaction({ // [!code focus:10]
  account: address,
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
})
```

#### 可选项：提升帐户

如果你不希望在每次请求`account`操作的时候都传入账户，你可以提升账户到钱包客户端。

```ts
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

const client = createWalletClient({ // [!code focus:99]
  account, // [!code ++]
  chain: mainnet,
  transport: http()
})

const hash = await client.sendTransaction({
  account, // [!code --]
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
})
```

## 本地账户（私钥，助记词等）

本地帐户在通过JSON-RPC执行方法`之前`使用私钥执行事务和消息的签名。

在viem中使用本地账户有下面三种方法：

- [私钥账户](/docs/accounts/privateKey)
- [助记词账户](/docs/accounts/mnemonic)
- [分层确定性(HD)账户](/docs/accounts/hd)

下面是集成**私钥账户**的步骤，分层确定性(HD)账户的设置方法也是一样的。

#### 1: 初始化钱包客户端

在设置账户和开始使用钱包操作之前，需要[`http` Transport](/docs/clients/transports/http)来设置钱包客户端：

```ts
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: http()
})
```

#### 2: 设置本地账户

下面使用`privateKeyToAccount`来实例化一个私钥帐户：

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts' // [!code focus]
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: http()
})

const account = privateKeyToAccount('0x...') // [!code focus:1]
```

#### 3: 使用 [钱包操作](/docs/actions/wallet/introduction)

现在可以在需要用户签名的钱包操作中使用设好的帐户：

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: http()
})

const account = privateKeyToAccount('0x...')

const hash = await client.sendTransaction({ // [!code focus:5]
  account,
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
})
```

#### 可选项：提升帐户

如果你不希望在每次请求`account`操作的时候都传入账户，你可以提升账户到钱包客户端

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const account = privateKeyToAccount('0x...')

const client = createWalletClient({ // [!code focus:99]
  account, // [!code ++]
  chain: mainnet,
  transport: http()
})

const hash = await client.sendTransaction({
  account, // [!code --]
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
})
```

#### 可选的：通过公共操作进行扩展

在使用本地帐户时，可能需要使用与钱包客户端相同的参数（`transport`、`chain`等）实例化的[公共客户端](/docs/clients/public)。

在这种情况下，可以使用[公共操作](/docs/actions/public/introduction)来扩展钱包客户端，这样可以避免处理多个客户端。

```ts {12}
import { createWalletClient, http, publicActions } from 'viem'
import { mainnet } from 'viem/chains'

const account = privateKeyToAccount('0x...')

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: http()
}).extend(publicActions) // [!code ++]

const { request } = await client.simulateContract({ ... }) // Public Action
const hash = await client.writeContract(request) // Wallet Action
```

## 参数

### account（可选的）

- **Type:** `Account | Address`

用于钱包客户端的账户。这将用于需要`account`作为参数的操作。

接受[JSON-RPC账户](#json-rpc-accounts) 或者 [本地账户(私钥等)](#local-accounts-private-key-mnemonic-etc)。

```ts
import { createWalletClient, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

const client = createWalletClient({
  account: privateKeyToAccount('0x...') // [!code focus]
  key: 'foo', 
  transport: custom(window.ethereum)
})

const hash = await client.sendTransaction({
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
})
```

### chain（可选的）

- **Type:** [Chain](/docs/glossary/types#chain)

钱包客户端中的[Chain](/docs/clients/chains)。

用[`sendTransaction`](/docs/actions/wallet/sendTransaction) 和 [`writeContract`](/docs/contract/writeContract) 来断言该链与钱包的活动链相匹配的操作。

```ts
const client = createWalletClient({
  chain: mainnet, // [!code focus]
  transport: custom(window.ethereum)
})
```

### cacheTime（可选的）

- **Type:** `number`
- **Default:** `client.pollingInterval`

缓存数据在内存中保留的时间（以毫秒为单位）。

```ts
const client = createWalletClient({
  cacheTime: 10_000, // [!code focus]
  chain: mainnet,
  transport: custom(window.ethereum)
})
```

### key（可选的）

- **Type:** `string`
- **Default:** `"wallet"`

客户端中的key

```ts
import { createWalletClient, custom } from 'viem'

const client = createWalletClient({
  key: 'foo', // [!code focus]
  transport: custom(window.ethereum)
})
```

### name（可选的）

- **Type:** `string`
- **Default:** `"Wallet Client"`

客户端中的name

```ts
import { createWalletClient, custom } from 'viem'

const client = createWalletClient({
  name: 'Foo Wallet Client', // [!code focus]
  transport: custom(window.ethereum)
})
```

### pollingInterval（可选的）

- **Type:** `number`
- **Default:** `4_000`

轮询启用的操作的间隔时间（毫秒）

```ts
import { createWalletClient, custom } from 'viem'

const client = createWalletClient({
  pollingInterval: 10_000, // [!code focus]
  transport: custom(window.ethereum)
})
```
