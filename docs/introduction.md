---
head:
  - - meta
    - property: og:title
      content: 为什么使用viem
  - - meta
    - name: description
      content: 关于我们构建viem的概述.
  - - meta
    - property: og:description
      content: 关于我们构建viem的概述.
---

# 为什么使用viem

## 存在的问题

当前低级的以太坊接口抽象状态至少存在以下四个问题之一：**开发者体验**，**稳定性**，**包的大小**以及**性能** — 四个困境。

作为一个流行的React Hooks以太坊库[wagmi](https://wagmi.sh)的作者，我们很难将现在这些低级的TypeScript构建的以太坊库用以工作。我们希望提供给wagmi用户最好的开发体验，但是我们在构建wagmi时受到基础技术的限制。我们知道与全球最大的区块链系统交互需要一个始终稳定，可预测的实现，包体积很小且高性能的模块是非常重要的。

所以我们创建了**viem**: 一个与以太坊交互的低级无状态基本架构的TypeScript接口，着重于可靠性，高效率且具备出色开发体验的ethers.js和web3.js替代方案。

## 开发人员体验

viem通过模块化，可组合的APIs，完善的文档以及自动类型安全与推导提供出色的开发者体验。

它给用户提供十分方便的区块链构建方法来创建以太坊应用和库。尽管viem的APIs比其他库冗长，但我们相信这是让viem的模块化构建更加灵活的正确考虑。它更容易被移植，修改和删除，同时它允许开发者更好的理解以太坊的概念，以及理解传递某些属性的 _理由和目的_。总的来说，学习如何使用viem是一个非常好的方式去了解如何与以太坊交互。

我们的目标是为每一个viem的模块都提供完善的文档和用例。viem使用[文档](https://gist.github.com/zsup/9434452)和[测试驱动](<https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.>)来构建模块，从而生成可预测且稳定的APIs。

viem也为用户提供[健壮的类型化APIs](/docs/typescript)，允许用户通过[自动完成](https://twitter.com/awkweb/status/1555678944770367493)，[类型接口](https://twitter.com/jakemoxey/status/1570244174502588417?s=20)和静态验证来获得最流行的体验。

## 稳定性

稳定性是viem的基本原则。作为[wagmi](https://wagmi.sh)的作者，我们有许大大小小的组织都严重以来viem，并希望它对用户来说是完全稳定的。

viem通过实现下述的步骤来确保稳定性：

- 我们针对以太坊的分叉节点做测试套件
- 我们旨在实现完整的测试覆盖并测试所有潜在的行为案例
- 我们创建确定以及干净的APIs

## 包大小

在开发网页应用时维护一个小体积的包的非常重要的。终端用户为了与以太坊交互不应该下载超过100kB的包。在很慢的3G网络上加载一个100kB的库至少需要**两秒**（加上与HTTP建立连接的时间）。

此外，viem是通tree-shaking缩减体积，意味着你看到的模块都包含在最后的包里面。

<div class="h-4"></div>
<img src="/bench-bundlesize.svg" />

## 高性能

此外上述提到的快速加载，viem通过仅在需要时才执行繁重的异步任务，以及优化编码/解码算法来进一步提升性能。下面是基准测试说明：

<div class="m-auto mt-10 space-y-14 w-10/12">
  <img src="/bench-isaddress.svg" />
  <img src="/bench-parseabi.svg" />
  <img src="/bench-encodeabi.svg" />
</div>

## 灵活性

不像其他低级接口那样，用户没有自主性，viem允许用户自主选择且依然保持合理以及安全的默认设置。这些可以让用户创建他们自己想要的实现，就像[wagmi](https://wagmi.sh)一样，无需繁琐的解决办法就可以达到目的。

---
**viem**将通过类型安全和优秀的开发体验，从而帮助开发者以更高的准确性和正确性进行开发构建。它与[wagmi](https://wagmi.sh)集成的非常好，所以开发者无需在太多学习成本的情况下开始使用viem。
