import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.0fcaa977.js";const m=JSON.parse('{"title":"setRpcUrl","description":"Sets the backend RPC URL.","frontmatter":{"head":[["meta",{"property":"og:title","content":"setRpcUrl"}],["meta",{"name":"description","content":"Sets the backend RPC URL."}],["meta",{"property":"og:description","content":"Sets the backend RPC URL."}]]},"headers":[],"relativePath":"docs/actions/test/setRpcUrl.md","filePath":"docs/actions/test/setRpcUrl.md"}'),l={name:"docs/actions/test/setRpcUrl.md"},p=e(`<h1 id="setrpcurl" tabindex="-1">setRpcUrl <a class="header-anchor" href="#setrpcurl" aria-label="Permalink to &quot;setRpcUrl&quot;">​</a></h1><p>Sets the backend RPC URL.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uHI5f" id="tab-osNVon8" checked="checked"><label for="tab-osNVon8">example.ts</label><input type="radio" name="group-uHI5f" id="tab-tFhR1zT"><label for="tab-tFhR1zT">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { testClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">setRpcUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;https://eth-mainnet.g.alchemy.com/v2&#39;</span><span style="color:#E1E4E8;">) </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { testClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">setRpcUrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;https://eth-mainnet.g.alchemy.com/v2&#39;</span><span style="color:#24292E;">) </span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createTestClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div>`,4),t=[p];function o(c,r,i,y,E,d){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
