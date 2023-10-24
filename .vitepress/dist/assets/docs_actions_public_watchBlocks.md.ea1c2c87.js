import{_ as a,c as n,o as l,Q as s,k as o}from"./chunks/framework.0fcaa977.js";const k=JSON.parse('{"title":"watchBlocks","description":"Watches and returns information for incoming blocks.","frontmatter":{"head":[["meta",{"property":"og:title","content":"watchBlocks"}],["meta",{"name":"description","content":"Watches and returns information for incoming blocks."}],["meta",{"property":"og:description","content":"Watches and returns information for incoming blocks."}]]},"headers":[],"relativePath":"docs/actions/public/watchBlocks.md","filePath":"docs/actions/public/watchBlocks.md"}'),p={name:"docs/actions/public/watchBlocks.md"},e=s(`<h1 id="watchblocks" tabindex="-1">watchBlocks <a class="header-anchor" href="#watchblocks" aria-label="Permalink to &quot;watchBlocks&quot;">​</a></h1><p>Watches and returns information for incoming blocks.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Pass through your Public Client, along with a listener.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6HQbE" id="tab--c076Bg" checked="checked"><label for="tab--c076Bg">example.ts</label><input type="radio" name="group-6HQbE" id="tab-QjzUqz2"><label for="tab-QjzUqz2">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">( </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  { </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block) }</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">)</span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * &gt; {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  baseFeePerGas: 10789405161n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  difficulty: 11569232145203128n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  extraData: &#39;0x75732d656173742d38&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * </span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * &gt; {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  baseFeePerGas: 12394051511n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  difficulty: 11512315412421123n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  extraData: &#39;0x5123ab1512dd14aa&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light has-focused-lines has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">( </span></span>
<span class="line has-focus"><span style="color:#24292E;">  { </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block) }</span></span>
<span class="line has-focus"><span style="color:#24292E;">)</span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * &gt; {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  baseFeePerGas: 10789405161n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  difficulty: 11569232145203128n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  extraData: &#39;0x75732d656173742d38&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * </span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * &gt; {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  baseFeePerGas: 12394051511n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  difficulty: 11512315412421123n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  extraData: &#39;0x5123ab1512dd14aa&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>UnwatchFn</code></p><p>A function that can be invoked to stop watching for new blocks.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="onblock" tabindex="-1">onBlock <a class="header-anchor" href="#onblock" aria-label="Permalink to &quot;onBlock&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>(block: Block) =&gt; void</code></li></ul><p>The block information.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  { </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block) } </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  { </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block) } </span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="onerror-optional" tabindex="-1">onError (optional) <a class="header-anchor" href="#onerror-optional" aria-label="Permalink to &quot;onError (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>(error: Error) =&gt; void</code></li></ul><p>Error thrown from getting a block.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error) </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;">: </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error) </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="blocktag-optional" tabindex="-1">blockTag (optional) <a class="header-anchor" href="#blocktag-optional" aria-label="Permalink to &quot;blockTag (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&#39;latest&#39; | &#39;earliest&#39; | &#39;pending&#39; | &#39;safe&#39; | &#39;finalized&#39;</code></li><li><strong>Default:</strong> <code>&#39;latest&#39;</code></li></ul><p>Watch for new blocks on a given tag.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    blockTag: </span><span style="color:#9ECBFF;">&#39;safe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block), </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    blockTag: </span><span style="color:#032F62;">&#39;safe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block), </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="emitmissed-optional" tabindex="-1">emitMissed (optional) <a class="header-anchor" href="#emitmissed-optional" aria-label="Permalink to &quot;emitMissed (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><p>Whether or not to emit missed blocks to the callback.</p><p>Missed blocks may occur in instances where internet connection is lost, or the block time is lesser than the <a href="/docs/clients/public.html#pollinginterval-optional">polling interval</a> of the client.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    emitMissed: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    emitMissed: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="emitonbegin-optional" tabindex="-1">emitOnBegin (optional) <a class="header-anchor" href="#emitonbegin-optional" aria-label="Permalink to &quot;emitOnBegin (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code></li></ul><p>Whether or not to emit the block to the callback when the subscription opens.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    emitOnBegin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    emitOnBegin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="includetransactions-optional" tabindex="-1">includeTransactions (optional) <a class="header-anchor" href="#includetransactions-optional" aria-label="Permalink to &quot;includeTransactions (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li></ul><p>Whether or not to include transactions (as a structured array of <code>Transaction</code> objects).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    includeTransactions: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    includeTransactions: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="poll-optional" tabindex="-1">poll (optional) <a class="header-anchor" href="#poll-optional" aria-label="Permalink to &quot;poll (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>false</code> for WebSocket Clients, <code>true</code> for non-WebSocket Clients</li></ul><p>Whether or not to use a polling mechanism to check for new blocks instead of a WebSocket subscription.</p><p>This option is only configurable for Clients with a <a href="/docs/clients/transports/websocket.html">WebSocket Transport</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, webSocket } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">webSocket</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    poll: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, webSocket } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">webSocket</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line has-focus"><span style="color:#24292E;">    poll: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="pollinginterval-optional" tabindex="-1">pollingInterval (optional) <a class="header-anchor" href="#pollinginterval-optional" aria-label="Permalink to &quot;pollingInterval (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Polling frequency (in ms). Defaults to the Client&#39;s <code>pollingInterval</code> config.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">unwatch</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">watchBlocks</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onBlock</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(block),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    pollingInterval: </span><span style="color:#79B8FF;">1_000</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">unwatch</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">watchBlocks</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onBlock</span><span style="color:#24292E;">: </span><span style="color:#E36209;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(block),</span></span>
<span class="line has-focus"><span style="color:#24292E;">    pollingInterval: </span><span style="color:#005CC5;">1_000</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Check out the usage of <code>watchBlocks</code> in the live <a href="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks_watching-blocks" target="_blank" rel="noreferrer">Watch Blocks Example</a> below.</p>`,45),c=o("iframe",{frameborder:"0",width:"100%",height:"500px",src:"https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/blocks_watching-blocks?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"},null,-1),t=s('<h2 id="json-rpc-methods" tabindex="-1">JSON-RPC Methods <a class="header-anchor" href="#json-rpc-methods" aria-label="Permalink to &quot;JSON-RPC Methods&quot;">​</a></h2><ul><li>When <code>poll: true</code>, calls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber" target="_blank" rel="noreferrer"><code>eth_getBlockByNumber</code></a> on a polling interval.</li><li>When <code>poll: false</code> &amp; WebSocket Transport, uses a WebSocket subscription via <a href="https://docs.alchemy.com/reference/eth-subscribe-polygon" target="_blank" rel="noreferrer"><code>eth_subscribe</code></a> and the <code>&quot;newHeads&quot;</code> event.</li></ul>',2),r=[e,c,t];function i(E,y,h,d,u,b){return l(),n("div",null,r)}const F=a(p,[["render",i]]);export{k as __pageData,F as default};
