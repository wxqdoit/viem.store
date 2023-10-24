import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.0fcaa977.js";const u=JSON.parse('{"title":"reset","description":"Resets the fork back to its original state.","frontmatter":{"head":[["meta",{"property":"og:title","content":"reset"}],["meta",{"name":"description","content":"Resets the fork back to its original state."}],["meta",{"property":"og:description","content":"Resets the fork back to its original state."}]]},"headers":[],"relativePath":"docs/actions/test/reset.md","filePath":"docs/actions/test/reset.md"}'),l={name:"docs/actions/test/reset.md"},o=e(`<h1 id="reset" tabindex="-1">reset <a class="header-anchor" href="#reset" aria-label="Permalink to &quot;reset&quot;">​</a></h1><p>Resets the fork back to its original state.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uKNeo" id="tab-b5HZrP9" checked="checked"><label for="tab-b5HZrP9">example.ts</label><input type="radio" name="group-uKNeo" id="tab--pzOlha"><label for="tab--pzOlha">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { testClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">() </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { testClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">reset</span><span style="color:#24292E;">() </span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createTestClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="blocknumber-optional" tabindex="-1">blockNumber (optional) <a class="header-anchor" href="#blocknumber-optional" aria-label="Permalink to &quot;blockNumber (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>Resets the fork to a given block number.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockNumber: </span><span style="color:#79B8FF;">69420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  jsonRpcUrl: </span><span style="color:#9ECBFF;">&#39;https://mainnet.g.alchemy.com/v2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">reset</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockNumber: </span><span style="color:#005CC5;">69420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  jsonRpcUrl: </span><span style="color:#032F62;">&#39;https://mainnet.g.alchemy.com/v2&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="jsonrpcurl-optional" tabindex="-1">jsonRpcUrl (optional) <a class="header-anchor" href="#jsonrpcurl-optional" aria-label="Permalink to &quot;jsonRpcUrl (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>Resets the fork with a given JSON RPC URL.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">reset</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockNumber: </span><span style="color:#79B8FF;">69420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  jsonRpcUrl: </span><span style="color:#9ECBFF;">&#39;https://mainnet.g.alchemy.com/v2&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">reset</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  blockNumber: </span><span style="color:#005CC5;">69420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  jsonRpcUrl: </span><span style="color:#032F62;">&#39;https://mainnet.g.alchemy.com/v2&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,13),p=[o];function t(c,r,i,y,E,d){return n(),a("div",null,p)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};