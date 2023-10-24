import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.0fcaa977.js";const h=JSON.parse('{"title":"decodeEventLog","description":"Decodes ABI encoded event topics & data.","frontmatter":{"head":[["meta",{"property":"og:title","content":"decodeEventLog"}],["meta",{"name":"description","content":"Decodes ABI encoded event topics & data."}],["meta",{"property":"og:description","content":"Decodes ABI encoded event topics & data."}]]},"headers":[],"relativePath":"docs/contract/decodeEventLog.md","filePath":"docs/contract/decodeEventLog.md"}'),p={name:"docs/contract/decodeEventLog.md"},e=l(`<h1 id="decodeeventlog" tabindex="-1">decodeEventLog <a class="header-anchor" href="#decodeeventlog" aria-label="Permalink to &quot;decodeEventLog&quot;">​</a></h1><p>Decodes ABI encoded event topics &amp; data (from an <a href="/docs/glossary/terms.html#event-log">Event Log</a>) into an event name and structured arguments (both indexed &amp; non-indexed).</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { decodeEventLog } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { decodeEventLog } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-FfNcL" id="tab-Xf6wurT" checked="checked"><label for="tab-Xf6wurT">example.ts</label><input type="radio" name="group-FfNcL" id="tab-CfN8h9M"><label for="tab-CfN8h9M">abi.ts</label><input type="radio" name="group-FfNcL" id="tab-4YfpvyS"><label for="tab-4YfpvyS">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { decodeEventLog } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  {</span></span>
<span class="line"><span style="color:#6A737D;"> *    eventName: &#39;Transfer&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *    args: {</span></span>
<span class="line"><span style="color:#6A737D;"> *      from: &#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *      to: &#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 1n</span></span>
<span class="line"><span style="color:#6A737D;"> *    }</span></span>
<span class="line"><span style="color:#6A737D;"> *  }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { decodeEventLog } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> *  {</span></span>
<span class="line"><span style="color:#6A737D;"> *    eventName: &#39;Transfer&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *    args: {</span></span>
<span class="line"><span style="color:#6A737D;"> *      from: &#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *      to: &#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 1n</span></span>
<span class="line"><span style="color:#6A737D;"> *    }</span></span>
<span class="line"><span style="color:#6A737D;"> *  }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wagmiAbi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        indexed: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { indexed: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        indexed: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Transfer&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;event&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wagmiAbi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        indexed: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      { indexed: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        indexed: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Transfer&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;event&#39;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h3 id="partial-decode" tabindex="-1">Partial Decode <a class="header-anchor" href="#partial-decode" aria-label="Permalink to &quot;Partial Decode&quot;">​</a></h3><p>By default, if the <code>topics</code> and <code>data</code> does not conform to the ABI (a mismatch between the number of indexed/non-indexed arguments), <code>decodeEventLog</code> will throw an error.</p><p>For example, the following will throw an error as there is a mismatch in non-<code>indexed</code> arguments &amp; <code>data</code> length.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  abi: </span><span style="color:#B392F0;">parseAbi</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;event Transfer(address indexed, address, uint256)&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`data\` should be 64 bytes, but is only 32 bytes.</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [DecodeLogDataMismatch]: Data size of 32 bytes is too small for non-indexed event parameters.</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">  abi: </span><span style="color:#6F42C1;">parseAbi</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;event Transfer(address indexed, address, uint256)&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`data\` should be 64 bytes, but is only 32 bytes.</span></span>
<span class="line highlighted"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// [DecodeLogDataMismatch]: Data size of 32 bytes is too small for non-indexed event parameters.</span></span></code></pre></div><p>It is possible for <code>decodeEventLog</code> to try and partially decode the Log, this can be done by setting the <code>strict</code> argument to <code>false</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  abi: </span><span style="color:#B392F0;">parseAbi</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;event Transfer(address indexed, address, uint256)&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  strict: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * {</span></span>
<span class="line"><span style="color:#6A737D;"> *   eventName: &#39;Transfer&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *   args: [&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;]</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light has-highlighted-lines has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">  abi: </span><span style="color:#6F42C1;">parseAbi</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;event Transfer(address indexed, address, uint256)&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line highlighted"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line diff add"><span style="color:#24292E;">  strict: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * {</span></span>
<span class="line"><span style="color:#6A737D;"> *   eventName: &#39;Transfer&#39;,</span></span>
<span class="line"><span style="color:#6A737D;"> *   args: [&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;]</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="return-value" tabindex="-1">Return Value <a class="header-anchor" href="#return-value" aria-label="Permalink to &quot;Return Value&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">eventName</span><span style="color:#E1E4E8;">: string;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">: Inferred;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">eventName</span><span style="color:#24292E;">: string;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">: Inferred;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Decoded ABI event topics.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="abi" tabindex="-1">abi <a class="header-anchor" href="#abi" aria-label="Permalink to &quot;abi&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#abi"><code>Abi</code></a></li></ul><p>The contract&#39;s ABI.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  abi: wagmiAbi, </span></span>
<span class="line"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="topics" tabindex="-1">topics <a class="header-anchor" href="#topics" aria-label="Permalink to &quot;topics&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>[Hex, ...(Hex | Hex[] | null)[]]</code></li></ul><p>A set of topics (encoded indexed args) from the <a href="/docs/glossary/terms.html#event-log">Event Log</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  topics: [ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  topics: [ </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line has-focus"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="data-optional" tabindex="-1">data (optional) <a class="header-anchor" href="#data-optional" aria-label="Permalink to &quot;data (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>The data (encoded non-indexed args) from the <a href="/docs/glossary/terms.html#event-log">Event Log</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="eventname-optional" tabindex="-1">eventName (optional) <a class="header-anchor" href="#eventname-optional" aria-label="Permalink to &quot;eventName (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>An event name from the ABI. Provide an <code>eventName</code> to infer the return type of <code>decodeEventLog</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  eventName: </span><span style="color:#9ECBFF;">&#39;Transfer&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  eventName: </span><span style="color:#032F62;">&#39;Transfer&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="strict-optional" tabindex="-1">strict (optional) <a class="header-anchor" href="#strict-optional" aria-label="Permalink to &quot;strict (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><p>If <code>true</code>, <code>decodeEventLog</code> will throw an error if the <code>data</code> &amp; <code>topics</code> lengths to not conform to the event on the ABI. If <code>false</code>, <code>decodeEventLog</code> will try and <a href="#partial-decode">partially decode</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">topics</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decodeEventLog</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  eventName: </span><span style="color:#9ECBFF;">&#39;Transfer&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  topics: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">topics</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decodeEventLog</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: wagmiAbi,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  eventName: </span><span style="color:#032F62;">&#39;Transfer&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  topics: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x406dade31f7ae4b5dbc276258c28dde5ae6d5c2773c5745802c493a2360e55e0&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000070997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,36),o=[e];function c(t,r,E,i,d,y){return n(),a("div",null,o)}const b=s(p,[["render",c]]);export{h as __pageData,b as default};
