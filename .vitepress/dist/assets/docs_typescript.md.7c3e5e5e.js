import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.a5052463.js";const u=JSON.parse('{"title":"TypeScript","description":"viem中的TypeScript支持。","frontmatter":{"head":[["meta",{"property":"og:title","content":"TypeScript"}],["meta",{"name":"description","content":"viem中的TypeScript支持。"}],["meta",{"property":"og:description","content":"viem中的TypeScript支持。"}]]},"headers":[],"relativePath":"docs/typescript.md","filePath":"docs/typescript.md"}'),p={name:"docs/typescript.md"},o=l(`<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><p>viem被设计的尽可能类型安全，记住：</p><ul><li>当前需要使用TypeScript v5.0.4或者更高版本</li><li>在这个存储库中更改类型是非破坏性的，通常作为补丁更改发布（否则每个类型增强都将是一个主要版本！）</li><li>强烈将以你锁定viem软件包到特定的补丁版本，在升级时预期类型可能在任何版本之间被固定或升级。</li><li>viem 的非类型相关公共 API 仍然非常严格地遵循 semver。</li></ul><p>为了确保正确运行，请确认你在<code>tsconfig.json</code>中将<a href="https://www.typescriptlang.org/tsconfig#strict" target="_blank" rel="noreferrer"><code>strict</code></a>模式设置为<code>true</code>：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;strict&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;strict&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="类型推断" tabindex="-1">类型推断 <a class="header-anchor" href="#类型推断" aria-label="Permalink to &quot;类型推断&quot;">​</a></h2><p>viem能够基于<a href="https://docs.soliditylang.org/en/v0.8.15/abi-spec.html#json" target="_blank" rel="noreferrer">ABI</a>和<a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" rel="noreferrer">EIP-712</a>类型化数据定义（由<a href="https://abitype.dev" target="_blank" rel="noreferrer">ABIType</a>提供）进行类型推断，从你的合约到前端给你完全端到端以及类型安全的非常棒的开发体验，（例如，自动完成 ABI 函数名称并捕获拼写错误、强类型 ABI 函数参数等）。</p><p>为此，您必须将 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions" target="_blank" rel="noreferrer">const 断言</a> 添加到特定的配置参数（更多 有关以下内容的信息）或内联定义它们。 例如，<a href="/docs/contract/readContract.html"><code>readContract</code></a>的<code>abi</code>配置参数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: […], </span><span style="color:#6A737D;">// &lt;--- defined inline</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">readContract</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: […], </span><span style="color:#6A737D;">// &lt;--- defined inline</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> […] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// &lt;--- const 断言</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({ abi })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> […] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// &lt;--- const 断言</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">readContract</span><span style="color:#24292E;">({ abi })</span></span></code></pre></div><p>如果类型推断不起作用，那可能是你忘记添加 <code>const</code> assertion或者定义参数配置。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不幸的是，TypeScript 不支持将 JSON 导入为 const。查看@wagmi/cli以帮助解决此问题！它可以自动从 Etherscan 获取 ABI、从 Foundry/Hardhat 项目解析 ABI 等等。</p></div><h3 id="合约-abis" tabindex="-1">合约 ABIs <a class="header-anchor" href="#合约-abis" aria-label="Permalink to &quot;合约 ABIs&quot;">​</a></h3><p>The following actions and utilities support type inference when you add a const assertion to <code>abi</code> or define <code>abi</code> inline:</p><h4 id="功能方法" tabindex="-1">功能方法 <a class="header-anchor" href="#功能方法" aria-label="Permalink to &quot;功能方法&quot;">​</a></h4><ul><li><a href="/docs/actions/public/createEventFilter.html"><code>createEventFilter</code></a></li><li><a href="/docs/actions/public/watchEvent.html"><code>watchEvent</code></a></li><li><a href="/docs/contract/createContractEventFilter.html"><code>createContractEventFilter</code></a></li><li><a href="/docs/contract/deployContract.html"><code>deployContract</code></a></li><li><a href="/docs/contract/estimateContractGas.html"><code>estimateContractGas</code></a></li><li><a href="/docs/contract/multicall.html"><code>multicall</code></a></li><li><a href="/docs/contract/readContract.html"><code>readContract</code></a></li><li><a href="/docs/contract/simulateContract.html"><code>simulateContract</code></a></li><li><a href="/docs/contract/writeContract.html"><code>writeContract</code></a></li><li><a href="/docs/contract/watchContractEvent.html"><code>watchContractEvent</code></a></li></ul><h4 id="公用方法" tabindex="-1">公用方法 <a class="header-anchor" href="#公用方法" aria-label="Permalink to &quot;公用方法&quot;">​</a></h4><ul><li><a href="/docs/contract/decodeEventLog.html"><code>decodeEventLog</code></a></li><li><a href="/docs/contract/decodeFunctionResult.html"><code>decodeFunctionResult</code></a></li><li><a href="/docs/contract/encodeDeployData.html"><code>encodeDeployData</code></a></li><li><a href="/docs/contract/encodeErrorResult.html"><code>encodeErrorResult</code></a></li><li><a href="/docs/contract/encodeEventTopics.html"><code>encodeEventTopics</code></a></li><li><a href="/docs/contract/encodeFunctionData.html"><code>encodeFunctionData</code></a></li><li><a href="/docs/contract/encodeFunctionResult.html"><code>encodeFunctionResult</code></a></li><li><a href="/docs/abi/getAbiItem.html"><code>getAbiItem</code></a></li></ul><p>例如, <code>readContract</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">readContract</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//  ^? 常量数据: bigint | undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: </span><span style="color:#9ECBFF;">&#39;0xecb504d39723b0be0e3a9aa33d646642d1051ee1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;balanceOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [{ name: </span><span style="color:#9ECBFF;">&#39;account&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [{ type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [{ type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;transfer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;nonpayable&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;recipient&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;tokenId&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [{ type: </span><span style="color:#9ECBFF;">&#39;bool&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;balanceOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ^? (property) functionName?: &quot;balanceOf&quot; | &quot;totalSupply&quot; | undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 请注意&quot;transfer&quot;不包括在内,因为它不是一个&quot;read&quot;函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  args: [</span><span style="color:#9ECBFF;">&#39;0x27a69ffba1e939ddcfecc8c7e0f967b872bac65c&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ^? (property) args?: readonly [\`0x\${string}\`] | undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">readContract</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//  ^? 常量数据: bigint | undefined</span></span>
<span class="line"><span style="color:#24292E;">  address: </span><span style="color:#032F62;">&#39;0xecb504d39723b0be0e3a9aa33d646642d1051ee1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  abi: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;balanceOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inputs: [{ name: </span><span style="color:#032F62;">&#39;account&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      outputs: [{ type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inputs: [],</span></span>
<span class="line"><span style="color:#24292E;">      outputs: [{ type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;transfer&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;nonpayable&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inputs: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;recipient&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;tokenId&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      outputs: [{ type: </span><span style="color:#032F62;">&#39;bool&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;balanceOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ^? (property) functionName?: &quot;balanceOf&quot; | &quot;totalSupply&quot; | undefined</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 请注意&quot;transfer&quot;不包括在内,因为它不是一个&quot;read&quot;函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  args: [</span><span style="color:#032F62;">&#39;0x27a69ffba1e939ddcfecc8c7e0f967b872bac65c&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ^? (property) args?: readonly [\`0x\${string}\`] | undefined</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="eip-712-类型化数据" tabindex="-1">EIP-712 类型化数据 <a class="header-anchor" href="#eip-712-类型化数据" aria-label="Permalink to &quot;EIP-712 类型化数据&quot;">​</a></h3><p>向<code>types</code>添加const断言或内联定义<code>types</code>会将类型推断添加到<a href="/docs/actions/wallet/signTypedData.html"><code>signTypedData</code></a>的<code>value</code>配置参数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  domain: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Ether Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    version: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    chainId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    verifyingContract: </span><span style="color:#9ECBFF;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  types: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Person: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;wallet&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    Mail: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ^? (parameter) value?: { name: string; wallet: \`0x\${string}\` } | {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//         name: string;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//         wallet: \`0x\${string}\`;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//         name: string;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//         wallet: \`0x\${string}\`;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//     contents: string;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// } | undefined</span></span>
<span class="line"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  domain: {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Ether Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    version: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    chainId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    verifyingContract: </span><span style="color:#032F62;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  types: {</span></span>
<span class="line"><span style="color:#24292E;">    Person: [</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;wallet&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    Mail: [</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  value: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ^? (parameter) value?: { name: string; wallet: \`0x\${string}\` } | {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     from: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         name: string;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         wallet: \`0x\${string}\`;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     to: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         name: string;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//         wallet: \`0x\${string}\`;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//     contents: string;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// } | undefined</span></span>
<span class="line"><span style="color:#24292E;">    from: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    to: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><p>下面的公共方法在你使用const断言或内联参数定义的时候支持类型推断</p><ul><li><a href="/docs/abi/decodeAbiParameters.html"><code>decodeAbiParameters</code></a></li><li><a href="/docs/abi/encodeAbiParameters.html"><code>encodeAbiParameters</code></a></li><li><a href="/docs/abi/encodePacked.html"><code>encodePacked</code></a></li><li><a href="/docs/abi/parseAbi.html"><code>parseAbi</code></a></li><li><a href="/docs/abi/parseAbiItem.html"><code>parseAbiItem</code></a></li><li><a href="/docs/abi/parseAbiParameter.html"><code>parseAbiParameter</code></a></li><li><a href="/docs/abi/parseAbiParameters.html"><code>parseAbiParameters</code></a></li></ul><h2 id="配置内部类型" tabindex="-1">配置内部类型 <a class="header-anchor" href="#配置内部类型" aria-label="Permalink to &quot;配置内部类型&quot;">​</a></h2><p>对于高级用例，你可能想配置viem的内部类型。viem的绝大多数类型依赖由<a href="https://abitype.dev" target="_blank" rel="noreferrer">ABIType</a>提供的ABIs和EIP-712的类型化数据， 在这里查看更多如何配置类型的信息的ABIType<a href="https://abitype.dev/config.html" target="_blank" rel="noreferrer">文档</a></p><h2 id="window-兼容性补丁" tabindex="-1"><code>window</code> 兼容性补丁 <a class="header-anchor" href="#window-兼容性补丁" aria-label="Permalink to &quot;\`window\` 兼容性补丁&quot;">​</a></h2><ul><li><a href="https://github.com/wagmi-dev/viem/blob/4bdbf15be0d61b52a195e11c97201e707fb616cc/src/types/eip1193" target="_blank" rel="noreferrer"><code>EIP1193Provider</code></a>（包括完全类型化的“请求”函数和类型化事件）。 如果没有检测到浏览器扩展钱包，或者在服务器上展现，它可能是<code>undefined</code>。</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/window&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> window </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;undefined&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> window.ethereum.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#6A737D;">//      ^? const transaction: Transaction        </span></span>
<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;eth_getTransactionByHash&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">//  ^? (property) method: &quot;eth_blockNumber&quot; | &quot;eth_call&quot; | ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    params: [</span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#6A737D;">//  ^? (property) params: [hash: Hash]</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/window&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> window </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;undefined&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> window.ethereum.</span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#6A737D;">//      ^? const transaction: Transaction        </span></span>
<span class="line"><span style="color:#24292E;">    method: </span><span style="color:#032F62;">&#39;eth_getTransactionByHash&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">//  ^? (property) method: &quot;eth_blockNumber&quot; | &quot;eth_call&quot; | ...</span></span>
<span class="line"><span style="color:#24292E;">    params: [</span><span style="color:#032F62;">&#39;0x...&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6A737D;">//  ^? (property) params: [hash: Hash]</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,31),e=[o];function t(c,r,E,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
