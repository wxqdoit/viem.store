import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.0fcaa977.js";const F=JSON.parse(`{"title":"setNextBlockBaseFeePerGas","description":"Sets the next block's base fee per gas.","frontmatter":{"head":[["meta",{"property":"og:title","content":"setNextBlockBaseFeePerGas"}],["meta",{"name":"description","content":"Sets the next block's base fee per gas."}],["meta",{"property":"og:description","content":"Sets the next block's base fee per gas."}]]},"headers":[],"relativePath":"docs/actions/test/setNextBlockBaseFeePerGas.md","filePath":"docs/actions/test/setNextBlockBaseFeePerGas.md"}`),l={name:"docs/actions/test/setNextBlockBaseFeePerGas.md"},p=n(`<h1 id="setnextblockbasefeepergas" tabindex="-1">setNextBlockBaseFeePerGas <a class="header-anchor" href="#setnextblockbasefeepergas" aria-label="Permalink to &quot;setNextBlockBaseFeePerGas&quot;">​</a></h1><p>Sets the next block&#39;s base fee per gas.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jV8Ow" id="tab-JeODoSx" checked="checked"><label for="tab-JeODoSx">example.ts</label><input type="radio" name="group-jV8Ow" id="tab-A-b9Rvt"><label for="tab-A-b9Rvt">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseGwei } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { testClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">setNextBlockBaseFeePerGas</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  baseFeePerGas: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseGwei } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { testClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line has-focus"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">setNextBlockBaseFeePerGas</span><span style="color:#24292E;">({ </span></span>
<span class="line has-focus"><span style="color:#24292E;">  baseFeePerGas: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createTestClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="basefeepergas" tabindex="-1">baseFeePerGas <a class="header-anchor" href="#basefeepergas" aria-label="Permalink to &quot;baseFeePerGas&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>bigint</code></li></ul><p>Base fee per gas.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> testClient.</span><span style="color:#B392F0;">setNextBlockBaseFeePerGas</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  baseFeePerGas: </span><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;30&#39;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> testClient.</span><span style="color:#6F42C1;">setNextBlockBaseFeePerGas</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  baseFeePerGas: </span><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;30&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,9),o=[p];function t(c,r,i,E,y,d){return e(),a("div",null,o)}const b=s(l,[["render",t]]);export{F as __pageData,b as default};
