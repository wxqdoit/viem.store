import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.0fcaa977.js";const F=JSON.parse('{"title":"encodeFunctionResult","description":"Encodes structured return data into ABI encoded data.","frontmatter":{"head":[["meta",{"property":"og:title","content":"encodeFunctionResult"}],["meta",{"name":"description","content":"Encodes structured return data into ABI encoded data."}],["meta",{"property":"og:description","content":"Encodes structured return data into ABI encoded data."}]]},"headers":[],"relativePath":"docs/contract/encodeFunctionResult.md","filePath":"docs/contract/encodeFunctionResult.md"}'),p={name:"docs/contract/encodeFunctionResult.md"},o=l(`<h1 id="encodefunctionresult" tabindex="-1">encodeFunctionResult <a class="header-anchor" href="#encodefunctionresult" aria-label="Permalink to &quot;encodeFunctionResult&quot;">​</a></h1><p>Encodes structured return data into ABI encoded data. It is the opposite of <a href="/docs/contract/decodeFunctionResult.html"><code>decodeFunctionResult</code></a>.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeFunctionResult } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeFunctionResult } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Given an ABI (<code>abi</code>) and a function (<code>functionName</code>), pass through the values (<code>values</code>) to encode:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-T-Ja9" id="tab-SdLXfQw" checked="checked"><label for="tab-SdLXfQw">example.ts</label><input type="radio" name="group-T-Ja9" id="tab-Ym4wiQe"><label for="tab-Ym4wiQe">abi.ts</label><input type="radio" name="group-T-Ja9" id="tab-Tbl6QWc"><label for="tab-Tbl6QWc">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeFunctionResult } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: [</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeFunctionResult } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: [</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wagmiAbi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [{ name: </span><span style="color:#9ECBFF;">&#39;tokenId&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputs: [{ name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wagmiAbi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [{ name: </span><span style="color:#032F62;">&#39;tokenId&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outputs: [{ name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></div></div><h3 id="a-more-complex-example" tabindex="-1">A more complex example <a class="header-anchor" href="#a-more-complex-example" aria-label="Permalink to &quot;A more complex example&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-baN4i" id="tab-IloHlHd" checked="checked"><label for="tab-IloHlHd">example.ts</label><input type="radio" name="group-baN4i" id="tab-D9Ck7hc"><label for="tab-D9Ck7hc">abi.ts</label><input type="radio" name="group-baN4i" id="tab-54Aiy8H"><label for="tab-54Aiy8H">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { decodeFunctionResult } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;getInfo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      foo: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        sender: </span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        x: </span><span style="color:#79B8FF;">69420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        y: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      sender: </span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      z: </span><span style="color:#79B8FF;">69</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000010f2c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000045</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { decodeFunctionResult } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;getInfo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      foo: {</span></span>
<span class="line"><span style="color:#24292E;">        sender: </span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        x: </span><span style="color:#005CC5;">69420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        y: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      sender: </span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      z: </span><span style="color:#005CC5;">69</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000010f2c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac0000000000000000000000000000000000000000000000000000000000000045</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wagmiAbi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;getInfo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputs: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            components: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;sender&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;bool&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;tuple&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;sender&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;uint32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;res&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;tuple&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    stateMutability: </span><span style="color:#9ECBFF;">&#39;pure&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wagmiAbi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;getInfo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outputs: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        components: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            components: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;sender&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;bool&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;tuple&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;sender&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;z&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;uint32&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;res&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;tuple&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    stateMutability: </span><span style="color:#032F62;">&#39;pure&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div></div></div><h3 id="without-functionname" tabindex="-1">Without <code>functionName</code> <a class="header-anchor" href="#without-functionname" aria-label="Permalink to &quot;Without \`functionName\`&quot;">​</a></h3><p>If your <code>abi</code> contains only one ABI item, you can omit the <code>functionName</code> (it becomes optional):</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeFunctionResult } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abiItem</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  inputs: [{ name: </span><span style="color:#9ECBFF;">&#39;owner&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;balanceOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  outputs: [{ name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  value: [</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeFunctionResult } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abiItem</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  inputs: [{ name: </span><span style="color:#032F62;">&#39;owner&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;balanceOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  outputs: [{ name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line diff remove"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  value: [</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;0x000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span></span></code></pre></div><h2 id="return-value" tabindex="-1">Return Value <a class="header-anchor" href="#return-value" aria-label="Permalink to &quot;Return Value&quot;">​</a></h2><p>The decoded data. Type is inferred from the ABI.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="abi" tabindex="-1">abi <a class="header-anchor" href="#abi" aria-label="Permalink to &quot;abi&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#abi"><code>Abi</code></a></li></ul><p>The contract&#39;s ABI.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: [</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: [</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="functionname" tabindex="-1">functionName <a class="header-anchor" href="#functionname" aria-label="Permalink to &quot;functionName&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>The function to encode from the ABI.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  value: [</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  value: [</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="values" tabindex="-1">values <a class="header-anchor" href="#values" aria-label="Permalink to &quot;values&quot;">​</a></h3><ul><li><strong>Type</strong>: <a href="/docs/glossary/types.html#hex"><code>Hex</code></a></li></ul><p>Return values to encode.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeFunctionResult</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  value: [</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeFunctionResult</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">  functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  value: [</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac&#39;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,27),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{F as __pageData,b as default};
