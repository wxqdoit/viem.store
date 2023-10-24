---
head:
  - - meta
    - property: og:title
      content: 开始使用
  - - meta
    - name: description
      content: 只需要几行代码就可以开始使用viem
  - - meta
    - property: og:description
      content: 只需要几行代码就可以开始使用viem
---

# 开始使用

## 概览

vime是一个为以太坊提供低级无状态基本架构的TypeScript接口。viem着眼于开发者体验，稳定性，体积以及性能：

- **开发者体验** 自动[类型安全和推导](/docs/typescript)，完善的文档, 完整整的APIs。
- **稳定性** 针对以太坊分叉王的测试套件，完整的[测试覆盖](https://app.codecov.io/gh/wagmi-dev/viem)。
- **体积** 去除无用包之后轻量的体积。
- **性能** 优化编码/解码，只在必要的时候执行异步任务。

你可以在[为什么使用viem](/docs/introduction)章节学习更多关于这个项目的理由。

## 安装

::: code-group

```bash [npm]
npm i viem
```

```bash [pnpm]
pnpm i viem
```

```bash [bun]
bun i viem
```

:::

## 快速开始

### 1. 设置客户端和传输方式
首先通过[Transport](/docs/clients/intro) 和 [Chain](/docs/clients/chains)设置你的[Client](/docs/clients/intro)。

```tsx {4-7}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
```

::: info
在一个产品级应用中, 传入你经过认证的RPC提供者（Alchemy, Infura, Ankr, 等等）是非常推荐的. 如果没有提供URL，viem将会默认配置一个公共RPC提供者。 [阅读更多](/docs/clients/transports/http.html#usage)。
:::

### 2. 执行操作

现在设置好了客户端，你可以与以太坊进行交互和执行[操作](/docs/actions/public/introduction)！

```tsx {9}
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const blockNumber = await client.getBlockNumber()
```

### 在线示例

<iframe class="mt-6" frameborder="0" src="https://stackblitz.com/edit/viem-getting-started?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=1&hideExplorer=1&devtoolsheight=1&ctl=1"></iframe>
