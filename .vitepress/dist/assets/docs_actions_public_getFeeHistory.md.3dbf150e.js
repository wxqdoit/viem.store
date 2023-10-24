import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.0fcaa977.js";const h=JSON.parse('{"title":"getFeeHistory","description":"Returns a collection of historical gas information.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getFeeHistory"}],["meta",{"name":"description","content":"Returns a collection of historical gas information."}],["meta",{"property":"og:description","content":"Returns a collection of historical gas information."}]]},"headers":[],"relativePath":"docs/actions/public/getFeeHistory.md","filePath":"docs/actions/public/getFeeHistory.md"}'),o={name:"docs/actions/public/getFeeHistory.md"},e=l(`<h1 id="getfeehistory" tabindex="-1">getFeeHistory <a class="header-anchor" href="#getfeehistory" aria-label="Permalink to &quot;getFeeHistory&quot;">​</a></h1><p>Returns a collection of historical gas information.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TCVUy" id="tab-4LaQFNn" checked="checked"><label for="tab-4LaQFNn">example.ts</label><input type="radio" name="group-TCVUy" id="tab-QXAxOPc"><label for="tab-QXAxOPc">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feeHistory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getFeeHistory</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockCount: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  rewardPercentiles: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">]</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feeHistory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getFeeHistory</span><span style="color:#24292E;">({ </span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockCount: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  rewardPercentiles: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">]</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#feehistory"><code>FeeHistory</code></a></p><p>The fee history.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="blockcount" tabindex="-1">blockCount <a class="header-anchor" href="#blockcount" aria-label="Permalink to &quot;blockCount&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feeHistory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getFeeHistory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockCount: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  rewardPercentiles: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feeHistory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getFeeHistory</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockCount: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  rewardPercentiles: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="rewardpercentiles" tabindex="-1">rewardPercentiles <a class="header-anchor" href="#rewardpercentiles" aria-label="Permalink to &quot;rewardPercentiles&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number[]</code></li></ul><p>A monotonically increasing list of percentile values to sample from each block&#39;s effective priority fees per gas in ascending order, weighted by gas used.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feeHistory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getFeeHistory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockCount: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  rewardPercentiles: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feeHistory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getFeeHistory</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  blockCount: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  rewardPercentiles: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">] </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocknumber-optional" tabindex="-1">blockNumber (optional) <a class="header-anchor" href="#blocknumber-optional" aria-label="Permalink to &quot;blockNumber (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Highest number block of the requested range.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feeHistory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getFeeHistory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockCount: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockNumber: </span><span style="color:#79B8FF;">1551231</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  rewardPercentiles: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feeHistory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getFeeHistory</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  blockCount: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockNumber: </span><span style="color:#005CC5;">1551231</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  rewardPercentiles: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocktag-optional" tabindex="-1">blockTag (optional) <a class="header-anchor" href="#blocktag-optional" aria-label="Permalink to &quot;blockTag (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&#39;latest&#39; | &#39;earliest&#39; | &#39;pending&#39; | &#39;safe&#39; | &#39;finalized&#39;</code></li><li><strong>Default:</strong> <code>&#39;latest&#39;</code></li></ul><p>Highest number block of the requested range.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">feeHistory</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getFeeHistory</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockCount: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockTag: </span><span style="color:#9ECBFF;">&#39;safe&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  rewardPercentiles: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">feeHistory</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getFeeHistory</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  blockCount: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockTag: </span><span style="color:#032F62;">&#39;safe&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  rewardPercentiles: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="json-rpc-method" tabindex="-1">JSON-RPC Method <a class="header-anchor" href="#json-rpc-method" aria-label="Permalink to &quot;JSON-RPC Method&quot;">​</a></h2><ul><li>Calls <a href="https://docs.alchemy.com/reference/eth-feehistory" target="_blank" rel="noreferrer"><code>eth_feeHistory</code></a>.</li></ul>`,26),p=[e];function t(c,r,i,y,E,d){return n(),a("div",null,p)}const b=s(o,[["render",t]]);export{h as __pageData,b as default};