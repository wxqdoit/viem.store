---
aside: false
editLink: false
title: viem
titleTemplate: :title · 为以太坊网络创建的TypeScript接口
description: viem是类型安全的,轻量可组合的，通过它来创建可靠的以太坊应用和类库。
layout: home
---

<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import HomeSponsors from './.vitepress/theme/components/HomeSponsors.vue'
</script>

<div class="max-w-[1120px] mx-auto vp-doc relative px-[24px] mb-[96px] mt-[32px] md:px-0 md:mb-[64px]">

<div class="pt-[48px] max-sm:pt-0">
  <div class="absolute -left-28 right-0 -top-10 bottom-0 bg-[url('/colosseum-light.svg')] dark:bg-[url('/colosseum.svg')] bg-no-repeat z-[-1] max-sm:w-[200%] max-sm:-left-[200px] max-sm:hidden" />
  <div class="px-7 max-sm:px-0 flex justify-between z-0 max-md:justify-center">
    <div class="space-y-8 max-w-[400px] flex flex-col items-start max-md:items-center">
      <img class="h-[72px] logo max-sm:h-[60px]" src="/logo-light-hug.svg" alt="viem logo">
      <div class="font-medium text-[21px] max-sm:text-[18px] text-[#919193] max-md:text-center">用<span class="text-black dark:text-white">轻量级</span>, <span class="text-black dark:text-white">可组合</span>, 和 <span class="text-black dark:text-white">类型安全</span>以及模块化的以太坊接口</div>来创建可靠的应用和库。
      <div class="flex justify-center space-x-2">
        <VPButton tag="a" size="medium" theme="brand" href="/docs/getting-started" text="开始使用" />
        <VPButton class="max-sm:hidden" tag="a" size="medium" theme="alt" href="/docs/introduction" text="为什么使用viem?" />
        <VPButton tag="a" size="medium" theme="alt" href="https://github.com/wagmi-dev/viem" text="在GitHub上查看" />
      </div>
    </div>
    <div class="flex flex-col justify-between w-[440px] space-y-10 max-lg:w-[300px] max-md:hidden">
      <div class="h-full">

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

  </div>
  <!-- TODO: Extract Bundle Size, Coverage badge data from respective APIs. -->
  <div class="flex justify-between space-x-2">
  <a href="https://github.com/wagmi-dev/viem/stargazers" class="cursor-pointer h-10 max-w-[120px] flex-1 relative rounded-lg overflow-hidden border border-black/10 dark:border-white/20" style="color: inherit;" rel="noreferrer noopener" target="_blank">
    <div class="absolute flex z-0 p-[6px] h-full w-full">
      <div class="flex-1 bg-white/60 dark:bg-black/40 flex items-center w-full h-full rounded-md">
        <span class="font-medium text-[15px] opacity-80 w-full text-center">Stars</span>
      </div>
      <div class="flex items-center h-full px-2">
        <span class="font-medium text-[15px] text-center w-full text-black dark:text-white">1.3k</span>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-black/5 dark:bg-white/10 z-[-1]" />
    <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-[2px] backdrop-filter z-[-1]" />
  </a>
  <a href="https://app.codecov.io/gh/wagmi-dev/viem" class="cursor-pointer h-10 max-w-[160px] flex-1 relative rounded-lg overflow-hidden border border-green-400/50" style="color: inherit;" rel="noreferrer noopener" target="_blank">
    <div class="absolute flex z-0 p-[6px] h-full w-full">
      <div class="flex-1 bg-white/60 dark:bg-black/40 flex items-center w-full h-full rounded-md">
        <span class="font-medium text-[15px] opacity-80 w-full text-center">coverage</span>
      </div>
      <div class="flex items-center h-full px-2">
        <span class="font-medium text-[15px] text-center w-full text-green-400">100%</span>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-green-400 opacity-10 z-[-1]" />
    <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-[2px] backdrop-filter z-[-1]" />
  </a>
  <a href="https://github.com/wagmi-dev/viem/blob/main/LICENSE" class="cursor-pointer h-10 max-w-[130px] flex-1 relative rounded-lg overflow-hidden border border-black/10 dark:border-white/20 max-lg:hidden" style="color: inherit;" rel="noreferrer noopener" target="_blank">
    <div class="absolute flex z-0 p-[6px] h-full w-full">
      <div class="flex-1 bg-white/60 dark:bg-black/40 flex items-center w-full h-full rounded-md">
        <span class="font-medium text-[15px] opacity-80 w-full text-center">license</span>
      </div>
      <div class="flex items-center h-full px-2">
        <span class="font-medium text-[15px] text-center w-full text-black dark:text-white">MIT</span>
      </div>
    </div>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-black/5 dark:bg-white/10 z-[-1]" />
    <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-[2px] backdrop-filter z-[-1]" />
  </a>
  </div>
  </div>
  </div>
  <div class="flex justify-between flex-wrap mt-16 max-sm:hidden">
    <div class="pr-2 w-1/4 max-lg:pb-3 max-sm:px-0 max-lg:w-1/2 max-sm:w-full">
      <div class="relative w-full h-[168px] max-lg:h-[142px] overflow-hidden">
        <div class="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg h-full px-5 py-6 absolute z-10 flex flex-col justify-between w-full">
          <div class="text-xl font-medium text-black dark:text-white">模块化</div>
          <div class="text-[17px] font-medium text-[#919193]">使用可组合的模块来快速构建应用程序和库</div>
        </div>
        <div class="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
        <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
      </div>
    </div>
    <div class="pl-2 pr-2 max-sm:px-0 max-lg:pb-3 max-lg:pr-0 w-1/4 max-lg:w-1/2 max-sm:w-full">
      <div class="relative w-full h-[168px] max-lg:h-[142px]">
        <div class="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg h-full px-5 py-6 absolute z-10 flex flex-col w-full">
          <div class="text-xl font-medium text-black dark:text-white">轻量级</div>
          <div class="mt-[14px] text-[17px] font-medium text-[#919193]">优化包大小，通过tree-shaking去除无用模块</div>
          <a href="/docs/introduction.html#bundle-size" class="text-[17px] font-medium">查看更多</a>
        </div>
        <div class="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
        <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
      </div>
    </div>
    <div class="pl-2 pr-2 max-lg:pb-3 max-sm:px-0 max-lg:pl-0 w-1/4 max-lg:w-1/2 max-sm:w-full">
      <div class="relative w-full h-[168px] max-lg:h-[142px]">
        <div class="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg h-full px-5 py-6 absolute z-10 flex flex-col justify-between w-full">
          <div class="text-xl font-medium text-black dark:text-white">高效的</div>
          <div class="text-[17px] font-medium text-[#919193]">与其他替代库相比，拥有更加优化的架构</div>
        </div>
        <div class="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
        <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
      </div>
    </div>
    <div class="pl-2 w-1/4 max-sm:px-0 max-lg:w-1/2 max-sm:w-full">
      <div class="relative w-full h-[168px] max-lg:h-[142px]">
        <div class="border-black dark:border-white border border-solid border-opacity-10 dark:border-opacity-10 rounded-lg h-full px-5 py-6 absolute z-10 flex flex-col justify-between w-full">
          <div class="text-xl font-medium text-black dark:text-white">类型化的APIs</div>
          <div class="text-[17px] font-medium text-[#919193]">使用完善的强类型的TypeScript来实现程序化API</div>
        </div>
        <div class="absolute left-0 right-0 top-0 bottom-0 dark:bg-[#313136] opacity-20 z-0" />
        <div class="absolute left-0 right-0 top-0 bottom-0 backdrop-filter backdrop-blur-[2px] z-0" />
      </div>
    </div>
  </div>
</div>

<div class="h-16" />

<div class="max-w-2xl mx-auto">
<h1>概览</h1>
<hr class="h-2" />

```ts
// 1. 导入模块.
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

// 2. 使用你需要的链和传输方式来设置（公共）客户端.
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

// 3. 实现一个功能!
const blockNumber = await client.getBlockNumber()
```

<div class="h-8" />
<h1>特性</h1>
<hr class="h-2" />

viem支持下面所有的开箱即用的功能：

- 提供[JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)的抽象，让开发工作更轻松
- 提供一流的APIs与[智能合约](https://ethereum.org/en/glossary/#smart-contract)交互
- 语言与官方以太坊术语同步密切相关 [Ethereum terminology](https://ethereum.org/en/glossary/)
- 可以导入你的浏览器扩展, WalletConnect 或者私钥钱包
- 使用浏览器本地的[BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)，而不是庞大的BigNumber库
- 提供处理[ABIs](https://ethereum.org/en/glossary/#abi)（编码/解码/检查）的工具
- 使用TypeScript（从ABI和EIP-712 [infer types](/docs/typescript)中进行类型推断）
- 完美支持[Anvil](https://book.getfoundry.sh/)，[Hardhat](https://hardhat.org/) 以及 [Ganache](https://trufflesuite.com/ganache/)
- 针对[分叉](https://ethereum.org/en/glossary/#fork)以太坊网络运行的测试套件

<div class="h-8" />
<h1>社区</h1>
<hr class="h-2" />
查看下面的信息以获取更多与wagmi相关的内容：

- 在推特上关注[@wagmi_sh](https://twitter.com/wagmi_sh), [@jakemoxey](https://twitter.com/jakemoxey)以及 [@awkweb](https://twitter.com/awkweb)
- 加入[GitHub的讨论](https://github.com/wagmi-dev/viem/discussions)
- 用viem[分享你的项目或组织](https://github.com/wagmi-dev/viem/discussions/104)

<div class="h-8" />
<h1>支持</h1>
<hr class="h-2" />

帮助支持未来的发展并使 wagmi 成为一个可持续的开源项目：

- [GitHub 赞助](https://github.com/sponsors/wagmi-dev?metadata_campaign=docs_support)
- [Gitcoin 捐款](https://wagmi.sh/gitcoin)
- [wagmi-dev.eth](https://etherscan.io/enslookup-search?search=wagmi-dev.eth)

<div class="h-8" />
<h1>赞助商</h1>
<hr class="h-2" />

<HomeSponsors />
</div>

<style scoped>
  html:not(.dark) img.dark {
    display: none;
  }
  .dark img.light {
    display: none;
  }

  .dark .logo {
    filter: invert(1);
  }

  .card {
    background-color: var(--vp-c-bg-soft);
  }

  .language-bash {
    overflow-y: hidden;
  }

  .vp-code-group, .vp-code-group .language-bash {
    height: 100%;
  }

  .vp-code-group .language-bash {
    height: 100%;
    margin-bottom: 0px;
  }

  .vp-code-group {
    margin-top: 0px;
  }

  .vp-code-group .blocks {
    height: calc(100% - 37px);
  }

  .vp-code-group .tabs label {
    font-size: 16px;
  }

  .vp-code-group .tabs {
    justify-content: left;
  }

  .vp-code-group .shiki {
    padding-top: 16px;
  }

  .vp-code-group code {
    font-size: 22px;
  }
  
  /*.vp-code-group {
    width: 100% !important;
}*/

  .tabs {
    display: flex;
    justify-content: center;
  }
</style>

</div>
