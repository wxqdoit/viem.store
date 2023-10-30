import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.a5052463.js";const h=JSON.parse('{"title":"getBlockTransactionCount","description":"Returns the number of Transactions at a block number, hash or tag.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getBlockTransactionCount"}],["meta",{"name":"description","content":"Returns the number of Transactions at a block number, hash or tag."}],["meta",{"property":"og:description","content":"Returns the number of Transactions at a block number, hash or tag."}]]},"headers":[],"relativePath":"docs/actions/public/getBlockTransactionCount.md","filePath":"docs/actions/public/getBlockTransactionCount.md"}'),l={name:"docs/actions/public/getBlockTransactionCount.md"},e=o(`<h1 id="getblocktransactioncount" tabindex="-1">getBlockTransactionCount <a class="header-anchor" href="#getblocktransactioncount" aria-label="Permalink to &quot;getBlockTransactionCount&quot;">​</a></h1><p>Returns the number of Transactions at a block number, hash or tag.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-p9t5Q" id="tab-ryXJOif" checked="checked"><label for="tab-ryXJOif">example.ts</label><input type="radio" name="group-p9t5Q" id="tab-Eggg8II"><label for="tab-Eggg8II">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlockTransactionCount</span><span style="color:#E1E4E8;">() </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 23</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getBlockTransactionCount</span><span style="color:#24292E;">() </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 23</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>number</code></p><p>The block transaction count.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="blockhash-optional" tabindex="-1">blockHash (optional) <a class="header-anchor" href="#blockhash-optional" aria-label="Permalink to &quot;blockHash (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#hash"><code>Hash</code></a></li></ul><p>Count at a given block hash.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlockTransactionCount</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockHash: </span><span style="color:#9ECBFF;">&#39;0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getBlockTransactionCount</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockHash: </span><span style="color:#032F62;">&#39;0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocknumber-optional" tabindex="-1">blockNumber (optional) <a class="header-anchor" href="#blocknumber-optional" aria-label="Permalink to &quot;blockNumber (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>Count at a given block number.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlockTransactionCount</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockNumber: </span><span style="color:#79B8FF;">42069</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getBlockTransactionCount</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockNumber: </span><span style="color:#005CC5;">42069</span><span style="color:#D73A49;">n</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocktag-optional" tabindex="-1">blockTag (optional) <a class="header-anchor" href="#blocktag-optional" aria-label="Permalink to &quot;blockTag (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&#39;latest&#39; | &#39;earliest&#39; | &#39;pending&#39; | &#39;safe&#39; | &#39;finalized&#39;</code></li><li><strong>Default:</strong> <code>&#39;latest&#39;</code></li></ul><p>Count at a given block tag.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getBlockTransactionCount</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockTag: </span><span style="color:#9ECBFF;">&#39;safe&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">block</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getBlockTransactionCount</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockTag: </span><span style="color:#032F62;">&#39;safe&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="json-rpc-method" tabindex="-1">JSON-RPC Method <a class="header-anchor" href="#json-rpc-method" aria-label="Permalink to &quot;JSON-RPC Method&quot;">​</a></h2><ul><li>Calls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber" target="_blank" rel="noreferrer"><code>eth_getBlockTransactionCountByNumber</code></a> for <code>blockNumber</code> &amp; <code>blockTag</code>.</li><li>Calls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash" target="_blank" rel="noreferrer"><code>eth_getBlockTransactionCountByHash</code></a> for <code>blockHash</code>.</li></ul>`,22),p=[e];function t(c,r,i,y,E,d){return n(),a("div",null,p)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};