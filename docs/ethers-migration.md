---
head:
  - - meta
    - property: og:title
      content: Ethers v5 → viem
  - - meta
    - name: description
      content: Ethers v5 → viem 迁移指南
  - - meta
    - property: og:description
      content: Ethers v5 → viem 迁移指南
---

# Ethers v5 → viem 迁移指南

这是一份很长的文件。请随意使用上面的搜索栏(⌘ K)或侧面的目录。如果你需要的APIs丢失或找不到，请[在这里进行奇偶性校验](https://github.com/wagmi-dev/viem/discussions/new?category=feature-request&title=Parity%20Request:)。

你可能注意到了viem中的一些API比Ether更详细一些。 我们喜欢更纯粹的代码并且强烈拥抱[清晰性与可组合性](/docs/introduction.html#developer-experience)。我们相信与过早抽象且难以更改的代码相比，[详细的APIs更灵活](https://www.youtube.com/watch?v=4anAwXYqLG8&t=789s)，更易于移动，更改和删除。

## 提供者 → 客户端

### getDefaultProvider 

#### Ethers

```ts {3}
import { getDefaultProvider } from 'ethers'

const provider = getDefaultProvider()
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})
```

> 这里更加详细 – 我们希望明确并清楚当前你正连接到那一条链，以及你正在用什么来进行传输，从而避免混淆。 :)

### JsonRpcProvider

#### Ethers

这个也可以与`StaticJsonRpcProvider`互换。

```ts {3}
import { providers } from 'ethers'

const provider = new providers.JsonRpcProvider('https://cloudflare-eth.com')
```

自定义链：

```ts {3-6}
import { providers } from 'ethers'

const provider = new providers.JsonRpcProvider('https://rpc.ankr.com/fantom/​', {
  name: 'Fantom',
  id: 250
})
```


#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://cloudflare-eth.com')
})
```

自定义链：

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { fantom } from 'viem/chains'

const client = createPublicClient({
  chain: fantom,
  transport: http('https://rpc.ankr.com/fantom/​')
})
```

> viem在`viem/chains`入口导出自定义链。

### InfuraProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.InfuraProvider('homestead', '<apiKey>')
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://mainnet.infura.io/v3/<apiKey>')
})
```

> viem没有自定义API提供者客户端 – 你只能传入RPC URL。

### AlchemyProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.AlchemyProvider('homestead', '<apiKey>')
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://eth-mainnet.g.alchemy.com/v2/<apiKey>')
})
```

> viem没有自定义API提供者客户端 – 你只能传入RPC URL。

### CloudflareProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.CloudflareProvider()
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://cloudflare-eth.com/')
})
```

> viem没有自定义API提供者客户端 – 你只能传入RPC URL。

### PocketProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.PocketProvider('homestead', '<apiKey>')
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://eth-mainnet.gateway.pokt.network/v1/lb/<apiKey>')
})
```

> viem没有自定义API提供者客户端 – 你只能传入RPC URL。

### AnkrProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.AnkrProvider('homestead', '<apiKey>')
```

#### viem

```ts {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http('https://rpc.ankr.com/eth/<apiKey>')
})
```

> viem没有自定义API提供者客户端 – 你只能传入RPC URL。

### FallbackProvider

#### Ethers

```ts {3-5}
import { providers } from 'ethers'

const alchemy = new providers.AlchemyProvider('homestead', '<apiKey>')
const infura = new providers.InfuraProvider('homestead', '<apiKey>')
const provider = new providers.FallbackProvider([alchemy, infura])
```

#### viem

```ts {4-5,9}
import { createPublicClient, http, fallback } from 'viem'
import { mainnet } from 'viem/chains'

const alchemy = http('https://eth-mainnet.g.alchemy.com/v2/<apiKey>')
const infura = http('https://mainnet.infura.io/v3/<apiKey>')

const client = createPublicClient({
  chain: mainnet,
  transport: fallback([alchemy, infura])
})
```

### IpcProvider

即将到来。

### JsonRpcBatchProvider

即将到来。

### Web3Provider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.Web3Provider(window.ethereum)
```

#### viem

```ts {4-7}
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})
```

### WebSocketProvider

#### Ethers

```ts {3}
import { providers } from 'ethers'

const provider = new providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/<apiKey>')
```

#### viem

```ts {4-7}
import { createPublicClient, webSocket } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: webSocket('wss://eth-mainnet.g.alchemy.com/v2/<apiKey>')
})
```

## 签名者 → 账户

### JsonRpcSigner

#### Ethers

```ts {5-6}
import { providers } from 'ethers'

const provider = new providers.Web3Provider(window.ethereum)

const [address] = await provider.listAccounts()
const signer = provider.getSigner(address)

signer.sendTransaction({ ... })
```

#### viem

```ts {4,7}
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: custom(window.ethereum)
})

client.sendTransaction({ ... })
```

> viem使用["账户"](https://ethereum.org/en/developers/docs/accounts/)而不是"Signer"。

### Wallet

#### Ethers

```ts {5}
import { providers, Wallet } from 'ethers'

const provider = new providers.Web3Provider(window.ethereum)

const wallet = new Wallet('0x...', provider)

wallet.sendTransaction({ ... })
```

#### viem

```ts {6,9}
import { createWalletClient, custom } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const account = privateKeyToAccount('0x...')

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: custom(window.ethereum)
})

client.sendTransaction({ ... })
```

> viem使用["账户"](https://ethereum.org/en/developers/docs/accounts/)而不是"Signer"。

## 提供者方法

#### Ethers

```ts {5-7}
import { getDefaultProvider } from 'ethers'

const provider = getDefaultProvider()

provider.getBlock(...)
provider.getTransaction(...)
...
```

#### viem

```ts {9-11}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

client.getBlock(...)
client.getTransaction(...)
...
```

> 扩展公共客户端的方法是**公共操作**. [阅读更多](/docs/actions/public/introduction)。

> 所有这些方法都存在API差异。使用页面顶部的搜索栏了解有关它们的更多信息。

## 签名者方法

### JsonRpcSigner

#### Ethers

```ts {8-9}
import { providers } from 'ethers'

const provider = new providers.Web3Provider(window.ethereum)

const [address] = await provider.listAccounts()
const signer = provider.getSigner(address)

signer.sendTransaction(...)
signer.signMessage(...)
...
```

#### viem

```ts {12-13}
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

const client = createWalletClient({
  account,
  chain: mainnet,
  transport: custom(window.ethereum)
})

client.sendTransaction({ ... })
client.signMessage({ ... })
...
```

> 扩展公共客户端的方法是**公共操作**. [阅读更多](/docs/actions/public/introduction)。

> 所有这些方法都存在API差异。使用页面顶部的搜索栏了解有关它们的更多信息。

## 合约交互

### 读合约

#### Ethers

```ts {6-8}
import { getDefaultProvider } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = getDefaultProvider()

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, provider)
const supply = await contract.totalSupply()
```

#### viem

```ts {10-13}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

const supply = await client.readContract({
  ...wagmiContractConfig,
  functionName: 'totalSupply'
})
```

### 写合约

#### Ethers

```ts {9-11}
import { Contract, providers } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = new providers.Web3Provider(window.ethereum)

const [address] = await provider.listAccounts()
const signer = provider.getSigner(address)

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, signer)
const hash = await contract.mint()
```

#### viem

```ts {17-22}
import { createPublicClient, createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})
const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})

const [address] = await walletClient.getAddresses()

const { request } = await publicClient.simulateContract({
  ...wagmiContractConfig,
  functionName: 'mint',
  account: address,
})
const hash = await walletClient.writeContract(request)
```

### 部署合约

#### Ethers

```ts {9-10}
import { ContractFactory, providers } from 'ethers'
import { abi, bytecode } from './abi'

const provider = new providers.Web3Provider(window.ethereum)

const [address] = await provider.listAccounts()
const signer = provider.getSigner(address)

const contract = new ContractFactory(abi, bytecode, signer)
await contract.deploy()
```

#### viem

```ts {12-16}
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { abi, bytecode } from './abi'

const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum)
})

const [address] = await walletClient.getAddresses()

await walletClient.deployContract({
  abi,
  account: address,
  bytecode,
})
```

### 合约事件

#### Ethers

```ts {6-15}
import { getDefaultProvider } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = getDefaultProvider()

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, provider)

const listener = (from, to, amount, event) => {
  // ...
}
contract.on('Transfer', listener)

// unsubscribe
contract.off('Transfer', listener)
```

#### viem

```ts {10-20}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

const unwatch = client.watchContractEvent({
  ...wagmiContractConfig,
  eventName: 'Transfer',
  onLogs: logs => {
    const { args: { from, to, amount }, eventName } = logs[0]
    // ...
  },
})

// unsubscribe
unwatch()
```
> 注意：在viem中通过间隔轮询对日志进行批处理，以避免过多回调调。你可以通过设置`batch: false`来禁止这个行为。

### Gas预估

#### Ethers

```ts {6-8}
import { getDefaultProvider } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = getDefaultProvider()

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, provider)
const gas = await contract.estimateGas.mint()
```

#### viem

```ts {10-13}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

const gas = await client.estimateContractGas({
  ...wagmiContractConfig, 
  functionName: 'mint'
})
```

### Call

#### Ethers

```ts {6-8}
import { getDefaultProvider } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = getDefaultProvider()

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, provider)
await contract.callStatic.mint()
```

#### viem

```ts {10-13}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

await client.simulateContract({
  ...wagmiContractConfig, 
  functionName: 'mint'
})
```

### 合约实例

#### Ethers

```ts {6-7}
import { getDefaultProvider } from 'ethers'
import { wagmiContractConfig } from './abi'

const provider = getDefaultProvider()

const { abi, address } = wagmiContractConfig
const contract = new Contract(address, abi, provider)

const supply = await contract.totalSupply()
const listener = (from, to, amount, event) => {
  // ...
}
contract.on('Transfer', listener)
contract.off('Transfer', listener)
```

#### viem

```ts {10-13}
import { createPublicClient, http, getContract } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiContractConfig } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

const contract = getContract({
  ...wagmiContractConfig,
  publicClient: client,
})

const supply = await contract.read.totalSupply()
const unwatch = contract.watchEvent.Transfer({
  onLogs: logs => {
    const { args: { from, to, amount }, eventName } = logs[0]
    // ...
  },
})
unwatch()
```

## ABI 工具

### abiCoder.encode

#### Ethers

```ts
import { utils } from 'ethers'

const abiCoder = utils.defaultAbiCoder()

// 对象
abiCoder.encode(
  [{ type: 'uint', name: 'x' }, { type: 'string', name: 'y' }],
  [1234, 'Hello world']
)

// 可读的
abiCoder.encode(
  ['uint', 'string'], 
  [1234, 'Hello World']
);
```

#### viem

```ts
import { encodeAbiParameters, parseAbiParameters } from 'viem'

// Object
encodeAbiParameters(
  [{ type: 'uint', name: 'x' }, { type: 'string', name: 'y' }],
  [1234, 'Hello world']
)

// Human Readable
encodeAbiParameters(
  parseAbiParameters('uint, string'),
  [1234, 'Hello world']
)
```

### abiCoder.decode

#### Ethers

```ts
import { utils } from 'ethers'

const abiCoder = utils.defaultAbiCoder()

// Object
abiCoder.decode(
  [{ type: 'uint', name: 'x' }, { type: 'string', name: 'y' }],
  '0x00000000000000000000000000000000000000000000000000000000000004d20000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000'
)

// Human Readable
abiCoder.decode(
  ['uint', 'string'], 
  '0x00000000000000000000000000000000000000000000000000000000000004d20000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000'
);
```

#### viem

```ts
import { decodeAbiParameters, parseAbiParameters } from 'viem'

// Object
decodeAbiParameters(
  [{ type: 'uint', name: 'x' }, { type: 'string', name: 'y' }],
  '0x00000000000000000000000000000000000000000000000000000000000004d20000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000'
)

// Human Readable
decodeAbiParameters(
  parseAbiParameters('uint, string'),
  '0x00000000000000000000000000000000000000000000000000000000000004d20000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000'
)
```

注意：不同于ethers，对于人类可读而言，viem 只支持[标准元组表达式](https://docs.soliditylang.org/en/latest/grammar.html#a4.SolidityParser.tupleExpression)。
例如： `(uint a, string b)` 是合法的，但是`tuple(uint a, string b)`就不合法。

### 碎片和接口
在viem中没有 "fragments" 和 "interfaces" 的概念。我们想尽可能贴近实际情况，而不是在ABIs上引入中间件抽象和额外层。我们鼓励使用ABI自身来替代fragments。
我们提供例如`getAbiItem`, `parseAbi` `parseAbiItem`, `parseAbiParameters` 以及 `parseAbiParameter`这些工具函数来interfaces和fragments的用例。

### Interface.format

viem支支持人类可读的-对象格式化。

#### Ethers

```ts {3-10}
import { utils } from 'ethers'

const interface = new Interface([
  'constructor(string symbol, string name)',
  'function transferFrom(address from, address to, uint amount)',
  'function transferFrom(address from, address to, uint amount, bool x)',
  'function mint(uint amount) payable',
  'function balanceOf(address owner) view returns (uint)'
])
const json = interface.format(utils.FormatTypes.json)
```

#### viem

```ts {3-10}
import { parseAbi } from 'viem'

const json = parseAbi([
  'constructor(string symbol, string name)',
  'function transferFrom(address from, address to, uint amount)',
  'function transferFrom(address from, address to, uint amount, bool x)',
  'function mint(uint amount) payable',
  'function balanceOf(address owner) view returns (uint)',
  'event Transfer(address indexed from, address indexed to, uint256 amount)'
])
```

### Fragment.from

#### ethers

```ts {3}
import { utils } from 'ethers'

const fragment = utils.Fragment.from('function balanceOf(address owner) view returns (uint)')
```

#### viem

```ts {3}
import { parseAbiItem } from 'viem'

const abiItem = parseAbiItem('function balanceOf(address owner) view returns (uint)')
```

### ParamType.from

#### ethers

```ts {3}
import { utils } from 'ethers'

const param = utils.ParamType.from('address owner')
```

#### viem

```ts {3}
import { parseAbiParameter } from 'viem'

const param = parseAbiParameter('address owner')
```

### Fragment Access

#### Ethers

```ts {4-6}
import { utils } from 'ethers'
import { abi } from './abi'

const interface = new utils.Interface(abi) 
interface.getFunction('transferFrom')
interface.getEvent('Transfer')
```

#### viem

```ts {4-5}
import { getAbiItem } from 'viem'
import { abi } from './abi'

getAbiItem({ abi, name: 'transferFrom' }) 
getAbiItem({ abi, name: 'Transfer' })
```

### Interface.encodeDeploy

#### Ethers

```ts {4-5}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const data = iface.encodeDeploy(['SYM', 'Some Name'])
```

#### viem

```ts {4-8}
import { encodeDeployData } from 'viem'
import { abi, bytecode } from './abi'

const data = encodeDeployData({ 
  abi,
  bytecode,
  args: ['SYM', 'Some Name']
})
```

> 注意: viem会将合约的字节码连接到ABI编码的数据上。

### Interface.encodeErrorResult

#### Ethers

```ts {4-8}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const data = iface.encodeErrorResult('AccountLocked', [
  '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
  utils.parseEther('1.0')
]);
```

#### viem

```ts {4-11}
import { encodeErrorResult, parseEther } from 'viem'
import { abi } from './abi'

const data = encodeErrorResult({ 
  abi: wagmiAbi,
  errorName: 'AccountLocked',
  args: [
    '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    parseEther('1.0')
  ]
})
```

### Interface.encodeFilterTopics

#### Ethers

```ts {4-8}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const data = iface.encodeFilterTopics('Transfer', [
  null,
  '0x8ba1f109551bD432803012645Ac136ddd64DBA72'
])
```

#### viem

```ts {4-10}
import { encodeEventTopics } from 'viem'
import { abi } from './abi'

const data = encodeEventTopics({ 
  abi,
  eventName: 'Transfer',
  args: {
    to: '0x8ba1f109551bD432803012645Ac136ddd64DBA72'
  }
})
```

### Interface.encodeFunctionData

#### Ethers

```ts {4-9}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const data = iface.encodeFunctionData('transferFrom', [
  '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
  '0xaB7C8803962c0f2F5BBBe3FA8bf41cd82AA1923C',
  parseEther('1.0')
])
```

#### viem

```ts {4-12}
import { encodeFunctionData, parseEther } from 'viem'
import { abi } from './abi'

const data = encodeFunctionData({ 
  abi,
  functionName: 'transferFrom',
  args: [
    '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    '0xaB7C8803962c0f2F5BBBe3FA8bf41cd82AA1923C',
    parseEther('1.0')
  ]
})
```

### Interface.encodeFunctionResult

#### Ethers

```ts {4-7}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const data = iface.encodeFunctionResult('balanceOf', [
  '0x8ba1f109551bD432803012645Ac136ddd64DBA72'
])
```

#### viem

```ts {4-8}
import { encodeFunctionResult, parseEther } from 'viem'
import { abi } from './abi'

const data = encodeFunctionResult({ 
  abi,
  functionName: 'balanceOf',
  value: ['0x8ba1f109551bD432803012645Ac136ddd64DBA72']
})
```

### Interface.decodeErrorResult

#### Ethers

```ts {4-5}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const result = iface.decodeErrorResult("AccountLocked", '0xf7c3865a0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba720000000000000000000000000000000000000000000000000de0b6b3a7640000')
```

#### viem

```ts {4-7}
import { decodeErrorResult, parseEther } from 'viem'
import { abi } from './abi'

const result = decodeErrorResult({ 
  abi,
  data: '0xf7c3865a0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba720000000000000000000000000000000000000000000000000de0b6b3a7640000'
})
```

### Interface.decodeEventLog

#### Ethers

```ts {4-13}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const result = iface.decodeEventLog(
  'Transfer', 
  data: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000', 
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72',
    '0x000000000000000000000000ab7c8803962c0f2f5bbbe3fa8bf41cd82aa1923c'
  ]
);
```

#### viem

```ts {4-12}
import { decodeEventLog, parseEther } from 'viem'
import { abi } from './abi'

const result = decodeEventLog({ 
  abi,
  data: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000', 
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72',
    '0x000000000000000000000000ab7c8803962c0f2f5bbbe3fa8bf41cd82aa1923c'
  ]
})
```

### Interface.decodeFunctionData

#### Ethers

```ts {4-5}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const result = iface.decodeFunctionData('transferFrom', '0x23b872dd0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72000000000000000000000000ab7c8803962c0f2f5bbbe3fa8bf41cd82aa1923c0000000000000000000000000000000000000000000000000de0b6b3a7640000');
```

#### viem

```ts {4-7}
import { decodeFunctionData, parseEther } from 'viem'
import { abi } from './abi'

const result = decodeFunctionData({ 
  abi,
  data: '0x23b872dd0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72000000000000000000000000ab7c8803962c0f2f5bbbe3fa8bf41cd82aa1923c0000000000000000000000000000000000000000000000000de0b6b3a7640000',
})
```

### Interface.decodeFunctionResult

#### Ethers

```ts {4-5}
import { utils } from 'ethers'
import { abi } from './abi'

const iface = new utils.Interface(abi); 
const result = iface.decodeFunctionResult('balanceOf', '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000');
```

#### viem

```ts {4-8}
import { decodeFunctionResult, parseEther } from 'viem'
import { abi } from './abi'

const result = decodeFunctionResult({ 
  abi,
  functionName: 'balanceOf',
  data: '0x0000000000000000000000000000000000000000000000000de0b6b3a7640000',
})
```

## 地址工具

### 获取地址

#### Ethers

```ts {3}
import { utils } from 'ethers'

const address = utils.getAddress('0x8ba1f109551bd432803012645ac136ddd64dba72')
```

#### viem

```ts {3}
import { getAddress } from 'viem'

const address = getAddress('0x8ba1f109551bd432803012645ac136ddd64dba72')
```

### 判断是否为合法地址

#### Ethers

```ts {3}
import { utils } from 'ethers'

const address = utils.isAddress('0x8ba1f109551bd432803012645ac136ddd64dba72')
```

#### viem

```ts {3}
import { isAddress } from 'viem'

const address = isAddress('0x8ba1f109551bd432803012645ac136ddd64dba72')
```

### 获取合约地址

#### Ethers

```ts {3}
import { utils } from 'ethers'

const address = utils.getContractAddress({ from: '0x...', nonce: 5 });
```

#### viem

```ts {3}
import { getContractAddress } from 'viem'

const address = getContractAddress({ from: '0x...', nonce: 5 })
```

### 获取Create2地址

#### Ethers

```ts {3-8}
import { utils } from 'ethers'

const from = '0x8ba1f109551bD432803012645Ac136ddd64DBA72';
const salt = '0x7c5ea36004851c764c44143b1dcb59679b11c9a68e5f41497f6cf3d480715331';
const initCode = '0x6394198df16000526103ff60206004601c335afa6040516060f3';
const initCodeHash = utils.keccak256(initCode);

const address = utils.getCreate2Address(from, salt, initCodeHash);
```

#### viem

```ts {3-8}
import { getContractAddress } from 'viem'

const address = getContractAddress({
  bytecode: '0x6394198df16000526103ff60206004601c335afa6040516060f3',
  from: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
  opcode: 'CREATE2',
  salt: '0x7c5ea36004851c764c44143b1dcb59679b11c9a68e5f41497f6cf3d480715331',
});
```

## 大数工具

### Ethers

很多

### viem

None. We use browser native [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## 字节操作工具

### 判断是否为字节类型

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.isBytes(new Uint8Array([1, 69, 420]))
```

#### viem

```ts {3}
import { isBytes } from 'viem'

isBytes(new Uint8Array([1, 69, 420]))
```

### 判断是否为十六进制字符串

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.isHexString('0xdeadbeef')
```

#### viem

```ts {3}
import { isHex } from 'viem'

isHex('0xdeadbeef')
```

### 判断是否为类字节类型

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.isBytesLike('0xdeadbeef')
```

#### viem

```ts {3}
import { isBytes, isHex } from 'viem'

isBytes('0xdeadbeef') || isHex('0xdeadbeef')
```

### 数值化数据(bufferArray)

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.arrayify('0xdeadbeef')
```

#### viem

```ts {3}
import { toBytes } from 'viem'

toBytes('0xdeadbeef')
```

### 16进制化数据

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexlify(new Uint8Array([1, 69, 420]))
```

#### viem

```ts {3}
import { toHex } from 'viem'

toHex(new Uint8Array([1, 69, 420]))
```

### 将数值转为16进制数据

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexValue(1)
```

#### viem

```ts {3}
import { toHex } from 'viem'

toHex(1)
```

### 格式化字符串为32字节的数据

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.formatBytes32String('Hello world')
// 0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000
```

#### viem

```ts {3-6}
import { stringToHex } from 'viem'

stringToHex(
  'Hello world', 
  { size: 32 }
)
// 0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000
```

### 解析32字节的数据为字符串

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.parseBytes32String('0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000')
// "Hello world"
```

#### viem

```ts {3-6}
import { hexToString } from 'viem'

hexToString(
  '0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000', 
  { size: 32 }
)
// "Hello world"
```

### 连接数组多个数据

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.concat([new Uint8Array([69]), new Uint8Array([420])])
```

#### viem

```ts {3}
import { concat, toBytes } from 'viem'

concat([new Uint8Array([69]), new Uint8Array([420])])
```

### 零值去除

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.stripZeros(new Uint8Array([0, 0, 0, 0, 0, 69]))
```

#### viem

```ts {3}
import { trim } from 'viem'

trim(new Uint8Array([0, 0, 0, 0, 0, 69]))
```

### 零值填充

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.zeroPad(new Uint8Array([69]), 32)
```

#### viem

```ts {3}
import { pad } from 'viem'

pad(new Uint8Array([69]), { size: 32 })
```

### 连接多个十六进制数据

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexConcat(['0x00000069', '0x00000420'])
```

#### viem

```ts {3}
import { concat, toBytes } from 'viem'

concat(['0x00000069', '0x00000420'])
```

### 获取十六进制数据长度

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexDataLength('0x00000069')
```

#### viem

```ts {3}
import { size } from 'viem'

size('0x00000069')
```

### 十六进制数据截取

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexDataSlice('0x00000069', 4)
```

#### viem

```ts {3}
import { slice } from 'viem'

slice('0x00000069', 4)
```

### 十六进制零值去除

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexStripZeros('0x00000069')
```

#### viem

```ts {3}
import { trim } from 'viem'

trim('0x00000069')
```

### 十六进制零值填充

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.hexZeroPad('0x69', 32)
```

#### viem

```ts {3}
import { pad } from 'viem'

pad('0x69', { size: 32 })
```

## 显示逻辑和输入工具

### 单位格式化

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.formatUnits(BigNumber.from('1000000000'), 9)
```

#### viem

```ts {3}
import { formatUnits } from 'viem'

formatUnits(1000000000n, 9)
```

### Ether格式化

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.formatEther(BigNumber.from('1000000000000000000'))
```

#### viem

```ts {3}
import { formatEther } from 'viem'

formatEther(1000000000000000000n)
```

### 带单位解析

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.parseUnits('1.0', 18)
```

#### viem

```ts {3}
import { parseUnits } from 'viem'

parseUnits('1', 18)
```

### parseEther

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.parseEther('1.0')
```

#### viem

```ts {3}
import { parseEther } from 'viem'

parseEther('1')
```

## 编码工具

### RLP 编码

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.RLP.encode('0x12345678')
```

#### viem

```ts {3}
import { toRlp } from 'viem'

toRlp('0x12345678')
```

### RLP 解码

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.RLP.decode('0x8412345678')
```

#### viem

```ts {3}
import { fromRlp } from 'viem'

fromRlp('0x8412345678')
```

## 哈希化工具

### id

#### Ethers

```ts {3,5-6}
import { utils } from 'ethers'

utils.id('function ownerOf(uint256 tokenId)')

// hash utf-8 data
utils.id('hello world')
```

#### viem

```ts {3,5-6}
import { getFunctionSelector, keccak256, toHex } from 'viem'

getFunctionSelector('function ownerOf(uint256 tokenId)')

// hash utf-8 data
keccak256(toHex('hello world'))
```

### keccak256

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.keccak256(utils.toUtf8Bytes('hello world'))
```

#### viem

```ts {3}
import { keccak256, toBytes } from 'viem'

keccak256(toBytes('hello world'))
```

### Base64编码/解码

viem does not provide Base64 encoding utilities. 

You can use browser native [`atob`](https://developer.mozilla.org/en-US/docs/Web/API/atob) and [`btoa`](https://developer.mozilla.org/en-US/docs/Web/API/btoa) instead.

### Base58编码/解码

viem does not provide Base58 encoding utilities.

You can use libraries such as [`base58-js`](https://www.npmjs.com/package/base58-js) or [`bs58`](https://github.com/cryptocoinjs/bs58) instead.

### namehash

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.namehash('awkweb.eth')
```

#### viem

```ts {3}
import { namehash } from 'viem'

namehash('awkweb.eth')
```

### solidityPack & solidityKeccak256

#### Ethers

```ts {3,4}
import { utils } from 'ethers'

utils.solidityPack(['int16', 'uint48'], [-1, 12])
utils.solidityKeccak256(['int16', 'uint48'], [-1, 12])
```

#### viem

```ts {3,4}
import { encodePacked, keccak256 } from 'viem'

encodePacked(['int16', 'uint48'], [-1, 12])
keccak256(encodePacked(['int16', 'uint48'], [-1, 12]))
```

## 字符串工具

### 转为Utf8字节

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.toUtf8Bytes('Hello World')
```

#### viem

```ts {3}
import { stringToBytes } from 'viem'

stringToBytes('Hello World')
```

### 转为Utf8字符串

#### Ethers

```ts {3}
import { utils } from 'ethers'

utils.toUtf8String(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
```

#### viem

```ts {3}
import { bytesToString } from 'viem'

bytesToString(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]))
```

## 交易工具

### 序列化交易

#### Ethers

```ts
import { utils } from 'ethers'

const serialized = utils.serializeTransaction({
  chainId: 1,
  maxFeePerGas: utils.parseGwei('20'),
  maxPriorityFeePerGas: utils.parseGwei('2'),
  nonce: 69,
  to: "0x1234512345123451234512345123451234512345",
  type: 2,
  value: utils.parseEther('0.01'),
})
```

#### viem

```ts
import { serializeTransaction, parseEther, parseGwei } from 'viem'

const serialized = serializeTransaction({
  chainId: 1,
  gas: 21001n,
  maxFeePerGas: parseGwei('20'),
  maxPriorityFeePerGas: parseGwei('2'),
  nonce: 69,
  to: "0x1234512345123451234512345123451234512345",
  value: parseEther('0.01'),
})
```

### 解析交易

#### Ethers

```ts
import { utils } from 'ethers'

const transaction = utils.parseTransaction('0x02ef0182031184773594008477359400809470997970c51812dc3a010c7d01b50e0d17dc79c8880de0b6b3a764000080c0')
```

#### viem

```ts
import { parseTransaction } from 'viem'

const transaction = parseTransaction('0x02ef0182031184773594008477359400809470997970c51812dc3a010c7d01b50e0d17dc79c8880de0b6b3a764000080c0')
```
