import{_ as s,c as n,o as a,Q as o}from"./chunks/framework.0fcaa977.js";const h=JSON.parse('{"title":"Account Abstraction","description":"Integrate Account Abstraction (ERC-4337) into viem.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Account Abstraction"}],["meta",{"name":"description","content":"Integrate Account Abstraction (ERC-4337) into viem."}],["meta",{"property":"og:description","content":"Integrate Account Abstraction (ERC-4337) into viem."}]]},"headers":[],"relativePath":"docs/third-party/account-abstraction.md","filePath":"docs/third-party/account-abstraction.md"}'),p={name:"docs/third-party/account-abstraction.md"},l=o(`<h1 id="account-abstraction" tabindex="-1">Account Abstraction <a class="header-anchor" href="#account-abstraction" aria-label="Permalink to &quot;Account Abstraction&quot;">​</a></h1><p>While Account Abstraction is not built into the core <code>viem</code> library, you can use a third-party library like <a href="https://docs.pimlico.io/permissionless/reference" target="_blank" rel="noreferrer">permissionless.js</a> to integrate with ERC-4337.</p><p><strong>Libraries:</strong></p><ul><li><a href="#permissionless-js">permissionless.js</a></li></ul><h2 id="permissionless-js" tabindex="-1">permissionless.js <a class="header-anchor" href="#permissionless-js" aria-label="Permalink to &quot;permissionless.js&quot;">​</a></h2><p><a href="https://docs.pimlico.io/permissionless/reference" target="_blank" rel="noreferrer">permissionless.js</a> is a TypeScript library built on viem for interacting with ERC-4337 bundlers, paymasters, and User Operations.</p><p>Below are instructions for setting up a Bundler Client.</p><h3 id="_1-install" tabindex="-1">1. Install <a class="header-anchor" href="#_1-install" aria-label="Permalink to &quot;1. Install&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-6oNUW" id="tab-9wAIUIX" checked="checked"><label for="tab-9wAIUIX">npm</label><input type="radio" name="group-6oNUW" id="tab-AQylg5i"><label for="tab-AQylg5i">pnpm</label><input type="radio" name="group-6oNUW" id="tab-47KBjmT"><label for="tab-47KBjmT">bun</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">permissionless</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">permissionless</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">permissionless</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">permissionless</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">bun</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">permissionless</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bun</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">permissionless</span></span></code></pre></div></div></div><h3 id="_2-set-up-a-bundler-client" tabindex="-1">2. Set up a Bundler Client <a class="header-anchor" href="#_2-set-up-a-bundler-client" aria-label="Permalink to &quot;2. Set up a Bundler Client&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { bundlerActions } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;permissionless&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bundlerClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createClient</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://api.pimlico.io/v1/goerli/rpc?apikey=YOUR_API_KEY_HERE&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(bundlerActions)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { bundlerActions } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;permissionless&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bundlerClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createClient</span><span style="color:#24292E;">({ </span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://api.pimlico.io/v1/goerli/rpc?apikey=YOUR_API_KEY_HERE&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(bundlerActions)</span></span></code></pre></div><h3 id="_3-consume-actions" tabindex="-1">3. Consume Actions <a class="header-anchor" href="#_3-consume-actions" aria-label="Permalink to &quot;3. Consume Actions&quot;">​</a></h3><p>Now you can consume Actions that are supported by <a href="https://docs.pimlico.io/permissionless/reference/bundler-actions/supportedEntryPoints" target="_blank" rel="noreferrer">permissionless.js</a>.</p><p><a href="https://docs.pimlico.io/permissionless/reference/bundler-actions/sendUserOperation" target="_blank" rel="noreferrer">See a full list of Bundler Actions.</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { bundlerActions } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;permissionless&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">bundlerClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createClient</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;https://api.pimlico.io/v1/goerli/rpc?apikey=YOUR_API_KEY_HERE&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">extend</span><span style="color:#E1E4E8;">(bundlerActions)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">supportedEntryPoints</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> bundlerClient.</span><span style="color:#B392F0;">supportedEntryPoints</span><span style="color:#E1E4E8;">() </span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { bundlerActions } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;permissionless&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">bundlerClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createClient</span><span style="color:#24292E;">({ </span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;https://api.pimlico.io/v1/goerli/rpc?apikey=YOUR_API_KEY_HERE&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">extend</span><span style="color:#24292E;">(bundlerActions)</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">supportedEntryPoints</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> bundlerClient.</span><span style="color:#6F42C1;">supportedEntryPoints</span><span style="color:#24292E;">() </span></span></code></pre></div>`,15),e=[l];function t(r,c,i,y,E,d){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
