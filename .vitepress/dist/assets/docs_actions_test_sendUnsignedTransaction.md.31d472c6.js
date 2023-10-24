import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.0fcaa977.js";const f=JSON.parse('{"title":"sendUnsignedTransaction","description":"Executes a transaction regardless of the signature.","frontmatter":{"head":[["meta",{"property":"og:title","content":"sendUnsignedTransaction"}],["meta",{"name":"description","content":"Executes a transaction regardless of the signature."}],["meta",{"property":"og:description","content":"Executes a transaction regardless of the signature."}]]},"headers":[],"relativePath":"docs/actions/test/sendUnsignedTransaction.md","filePath":"docs/actions/test/sendUnsignedTransaction.md"}'),p={name:"docs/actions/test/sendUnsignedTransaction.md"},o=l(`<h1 id="sendunsignedtransaction" tabindex="-1">sendUnsignedTransaction <a class="header-anchor" href="#sendunsignedtransaction" aria-label="Permalink to &quot;sendUnsignedTransaction&quot;">​</a></h1><p>Executes a transaction regardless of the signature.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wDu8H" id="tab-JC5tToM" checked="checked"><label for="tab-JC5tToM">example.ts</label><input type="radio" name="group-wDu8H" id="tab-W1iXD94"><label for="tab-W1iXD94">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { testClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">1000000000000000000</span><span style="color:#F97583;">n</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// &#39;0x...&#39;</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { testClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({ </span></span>
<span class="line has-focus"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">1000000000000000000</span><span style="color:#D73A49;">n</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// &#39;0x...&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createTestClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { foundry } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">testClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createTestClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: foundry,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;anvil&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(), </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createTestClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { foundry } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">testClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createTestClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: foundry,</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;anvil&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(), </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#hash"><code>Hash</code></a></p><p>The transaction hash.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="from" tabindex="-1">from <a class="header-anchor" href="#from" aria-label="Permalink to &quot;from&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#address"><code>Address</code></a></li></ul><p>The Transaction sender.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">1000000000000000000</span><span style="color:#F97583;">n</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">1000000000000000000</span><span style="color:#D73A49;">n</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="to" tabindex="-1">to <a class="header-anchor" href="#to" aria-label="Permalink to &quot;to&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>The transaction recipient or contract address.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">1000000000000000000</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  nonce: </span><span style="color:#79B8FF;">69</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">1000000000000000000</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  nonce: </span><span style="color:#005CC5;">69</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="accesslist-optional" tabindex="-1">accessList (optional) <a class="header-anchor" href="#accesslist-optional" aria-label="Permalink to &quot;accessList (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#accesslist"><code>AccessList</code></a></li></ul><p>The access list.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  accessList: [ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      address: </span><span style="color:#9ECBFF;">&#39;0x1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      storageKeys: [</span><span style="color:#9ECBFF;">&#39;0x1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  accessList: [ </span></span>
<span class="line has-focus"><span style="color:#24292E;">    {</span></span>
<span class="line has-focus"><span style="color:#24292E;">      address: </span><span style="color:#032F62;">&#39;0x1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      storageKeys: [</span><span style="color:#032F62;">&#39;0x1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line has-focus"><span style="color:#24292E;">    },</span></span>
<span class="line has-focus"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="data-optional" tabindex="-1">data (optional) <a class="header-anchor" href="#data-optional" aria-label="Permalink to &quot;data (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>0x\${string}</code></li></ul><p>A contract hashed method call with encoded args.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  data: </span><span style="color:#9ECBFF;">&#39;0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">1000000000000000000</span><span style="color:#F97583;">n</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  data: </span><span style="color:#032F62;">&#39;0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">1000000000000000000</span><span style="color:#D73A49;">n</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="gasprice-optional" tabindex="-1">gasPrice (optional) <a class="header-anchor" href="#gasprice-optional" aria-label="Permalink to &quot;gasPrice (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>The price (in wei) to pay per gas. Only applies to <a href="/docs/glossary/terms.html#legacy-transaction">Legacy Transactions</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  gasPrice: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#B392F0;">parseEther</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  gasPrice: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#6F42C1;">parseEther</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="maxfeepergas-optional" tabindex="-1">maxFeePerGas (optional) <a class="header-anchor" href="#maxfeepergas-optional" aria-label="Permalink to &quot;maxFeePerGas (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>Total fee per gas (in wei), inclusive of <code>maxPriorityFeePerGas</code>. Only applies to <a href="/docs/glossary/terms.html#eip-1559-transaction">EIP-1559 Transactions</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  maxFeePerGas: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">),  </span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#B392F0;">parseEther</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  maxFeePerGas: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">),  </span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#6F42C1;">parseEther</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="maxpriorityfeepergas-optional" tabindex="-1">maxPriorityFeePerGas (optional) <a class="header-anchor" href="#maxpriorityfeepergas-optional" aria-label="Permalink to &quot;maxPriorityFeePerGas (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>Max priority fee per gas (in wei). Only applies to <a href="/docs/glossary/terms.html#eip-1559-transaction">EIP-1559 Transactions</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  maxFeePerGas: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  maxPriorityFeePerGas: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#B392F0;">parseEther</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  maxFeePerGas: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  maxPriorityFeePerGas: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#6F42C1;">parseEther</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="nonce-optional" tabindex="-1">nonce (optional) <a class="header-anchor" href="#nonce-optional" aria-label="Permalink to &quot;nonce (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Unique number identifying this transaction.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  value: </span><span style="color:#79B8FF;">1000000000000000000</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  nonce: </span><span style="color:#79B8FF;">69</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">1000000000000000000</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  nonce: </span><span style="color:#005CC5;">69</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="value-optional" tabindex="-1">value (optional) <a class="header-anchor" href="#value-optional" aria-label="Permalink to &quot;value (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Value in wei sent with this transaction.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">sendUnsignedTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  from: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  to: </span><span style="color:#9ECBFF;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  value: </span><span style="color:#B392F0;">parseEther</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">  nonce: </span><span style="color:#79B8FF;">69</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">sendUnsignedTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  from: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  to: </span><span style="color:#032F62;">&#39;0x70997970c51812dc3a010c7d01b50e0d17dc79c8&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  value: </span><span style="color:#6F42C1;">parseEther</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">  nonce: </span><span style="color:#005CC5;">69</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,44),e=[o];function c(t,r,E,i,y,d){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{f as __pageData,F as default};