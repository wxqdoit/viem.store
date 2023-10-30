import{_ as s,c as a,o as n,Q as l,k as p}from"./chunks/framework.a5052463.js";const m=JSON.parse('{"title":"multicall","description":"Batches up multiple functions on a contract in a single call.","frontmatter":{"head":[["meta",{"property":"og:title","content":"multicall"}],["meta",{"name":"description","content":"Batches up multiple functions on a contract in a single call."}],["meta",{"property":"og:description","content":"Batches up multiple functions on a contract in a single call."}]]},"headers":[],"relativePath":"docs/contract/multicall.md","filePath":"docs/contract/multicall.md"}'),o={name:"docs/contract/multicall.md"},e=l(`<h1 id="multicall" tabindex="-1">multicall <a class="header-anchor" href="#multicall" aria-label="Permalink to &quot;multicall&quot;">​</a></h1><p>Similar to <a href="/docs/contract/readContract.html"><code>readContract</code></a>, but batches up multiple functions on a contract in a single RPC call via the <a href="https://github.com/mds1/multicall" target="_blank" rel="noreferrer"><code>multicall3</code> contract</a>.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qUYfv" id="tab-c-6fu0w" checked="checked"><label for="tab-c-6fu0w">example.ts</label><input type="radio" name="group-qUYfv" id="tab-ueAg-27"><label for="tab-ueAg-27">abi.ts</label><input type="radio" name="group-qUYfv" id="tab-KNc18UK"><label for="tab-KNc18UK">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { wagmiAbi } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./abi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wagmiContract</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">wagmiContract,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">wagmiContract,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      args: [</span><span style="color:#79B8FF;">69420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">wagmiContract,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;mint&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * [</span></span>
<span class="line"><span style="color:#6A737D;"> *  { result: 424122n, status: &#39;success&#39; },</span></span>
<span class="line"><span style="color:#6A737D;"> *  { result: &#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;, status: &#39;success&#39; },</span></span>
<span class="line"><span style="color:#6A737D;"> *  { error: [ContractFunctionExecutionError: ...], status: &#39;failure&#39; }</span></span>
<span class="line"><span style="color:#6A737D;"> * ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { wagmiAbi } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./abi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wagmiContract</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">wagmiContract,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">wagmiContract,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      args: [</span><span style="color:#005CC5;">69420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">wagmiContract,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;mint&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * [</span></span>
<span class="line"><span style="color:#6A737D;"> *  { result: 424122n, status: &#39;success&#39; },</span></span>
<span class="line"><span style="color:#6A737D;"> *  { result: &#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;, status: &#39;success&#39; },</span></span>
<span class="line"><span style="color:#6A737D;"> *  { error: [ContractFunctionExecutionError: ...], status: &#39;failure&#39; }</span></span>
<span class="line"><span style="color:#6A737D;"> * ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wagmiAbi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;totalSupply&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputs: [{ name: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;uint256&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    stateMutability: </span><span style="color:#9ECBFF;">&quot;view&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [{ name: </span><span style="color:#9ECBFF;">&quot;tokenId&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;uint256&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;ownerOf&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputs: [{ name: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;address&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    stateMutability: </span><span style="color:#9ECBFF;">&quot;view&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;mint&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    outputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    stateMutability: </span><span style="color:#9ECBFF;">&quot;view&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&quot;function&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wagmiAbi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;totalSupply&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outputs: [{ name: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;uint256&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    stateMutability: </span><span style="color:#032F62;">&quot;view&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [{ name: </span><span style="color:#032F62;">&quot;tokenId&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;uint256&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;ownerOf&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outputs: [{ name: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;address&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    stateMutability: </span><span style="color:#032F62;">&quot;view&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;mint&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    outputs: [],</span></span>
<span class="line"><span style="color:#24292E;">    stateMutability: </span><span style="color:#032F62;">&quot;view&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&quot;function&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="return-value" tabindex="-1">Return Value <a class="header-anchor" href="#return-value" aria-label="Permalink to &quot;Return Value&quot;">​</a></h2><p><code>({ data: &lt;inferred&gt;, status: &#39;success&#39; } | { error: string, status: &#39;reverted&#39; })[]</code></p><p>An array of results with accompanying status.</p><p>Additionally, when <a href="#allowfailure-optional"><code>allowFailure</code></a> is set to <code>false</code>, it directly returns an array of inferred data:</p><p><code>(&lt;inferred&gt;)[]</code></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="contracts-address" tabindex="-1">contracts.address <a class="header-anchor" href="#contracts-address" aria-label="Permalink to &quot;contracts.address&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#address"><code>Address</code></a></li></ul><p>The contract address.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line has-focus"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="contracts-abi" tabindex="-1">contracts.abi <a class="header-anchor" href="#contracts-abi" aria-label="Permalink to &quot;contracts.abi&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#abi"><code>Abi</code></a></li></ul><p>The contract ABI.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="contracts-functionname" tabindex="-1">contracts.functionName <a class="header-anchor" href="#contracts-functionname" aria-label="Permalink to &quot;contracts.functionName&quot;">​</a></h3><ul><li><strong>Type</strong>: <code>string</code></li></ul><p>The function name to call.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="contracts-args-optional" tabindex="-1">contracts.args (optional) <a class="header-anchor" href="#contracts-args-optional" aria-label="Permalink to &quot;contracts.args (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> Inferred from ABI.</li></ul><p>Arguments to pass to function call.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;balanceOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      args: [</span><span style="color:#9ECBFF;">&#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;balanceOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      args: [</span><span style="color:#032F62;">&#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;</span><span style="color:#24292E;">] </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="allowfailure-optional" tabindex="-1">allowFailure (optional) <a class="header-anchor" href="#allowfailure-optional" aria-label="Permalink to &quot;allowFailure (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><p>Whether or not the <code>multicall</code> function should throw if a call reverts. If set to <code>true</code> (default), and a call reverts, then <code>multicall</code> will fail silently and its error will be logged in the <code>results</code> array.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  allowFailure: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  allowFailure: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="account-optional" tabindex="-1">account (optional) <a class="header-anchor" href="#account-optional" aria-label="Permalink to &quot;account (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Account | Address</code></li></ul><p>Optional Account sender override.</p><p>Accepts a <a href="/docs/clients/wallet.html#json-rpc-accounts">JSON-RPC Account</a> or <a href="/docs/clients/wallet.html#local-accounts-private-key-mnemonic-etc">Local Account (Private Key, etc)</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="batchsize-optional" tabindex="-1">batchSize (optional) <a class="header-anchor" href="#batchsize-optional" aria-label="Permalink to &quot;batchSize (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <a href="/docs/clients/public.html#batch-multicall-batchsize-optional"><code>client.batch.multicall.batchSize</code></a> (if set) or <code>1024</code></li></ul><p>The maximum size (in bytes) for each calldata chunk. Set to <code>0</code> to disable the size limit.</p><blockquote><p>Note: Some RPC Providers limit the amount of calldata (<code>data</code>) that can be sent in a single <code>eth_call</code> request. It is best to check with your RPC Provider to see if there are any calldata size limits to <code>eth_call</code> requests.</p></blockquote><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  batchSize: </span><span style="color:#79B8FF;">4096</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 4kB </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  batchSize: </span><span style="color:#005CC5;">4096</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 4kB </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="multicalladdress-optional" tabindex="-1">multicallAddress (optional) <a class="header-anchor" href="#multicalladdress-optional" aria-label="Permalink to &quot;multicallAddress (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#address"><code>Address</code></a></li><li><strong>Default:</strong> <code>client.chain.contracts.multicall3.address</code></li></ul><p>Address of Multicall Contract.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">results</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">multicall</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  contracts: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">      functionName: </span><span style="color:#9ECBFF;">&#39;totalSupply&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  multicallAddress: </span><span style="color:#9ECBFF;">&#39;0xca11bde05977b3631167028862be2a173976ca11&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">results</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">multicall</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  contracts: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">      functionName: </span><span style="color:#032F62;">&#39;totalSupply&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  multicallAddress: </span><span style="color:#032F62;">&#39;0xca11bde05977b3631167028862be2a173976ca11&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="live-example" tabindex="-1">Live Example <a class="header-anchor" href="#live-example" aria-label="Permalink to &quot;Live Example&quot;">​</a></h2><p>Check out the usage of <code>multicall</code> in the live <a href="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/contracts_multicall" target="_blank" rel="noreferrer">Multicall Example</a> below.</p>`,46),t=p("iframe",{frameborder:"0",width:"100%",height:"500px",src:"https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/contracts_multicall?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"},null,-1),c=[e,t];function r(E,i,y,u,d,F){return n(),a("div",null,c)}const b=s(o,[["render",r]]);export{m as __pageData,b as default};
