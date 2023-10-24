import{_ as n,c as s,o as a,Q as o}from"./chunks/framework.0fcaa977.js";const d=JSON.parse('{"title":"getFunctionSignature","description":"Returns the function signature for a given function definition.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getFunctionSignature"}],["meta",{"name":"description","content":"Returns the function signature for a given function definition."}],["meta",{"property":"og:description","content":"Returns the function signature for a given function definition."}]]},"headers":[],"relativePath":"docs/utilities/getFunctionSignature.md","filePath":"docs/utilities/getFunctionSignature.md"}'),e={name:"docs/utilities/getFunctionSignature.md"},t=o(`<h1 id="getfunctionsignature" tabindex="-1">getFunctionSignature <a class="header-anchor" href="#getfunctionsignature" aria-label="Permalink to &quot;getFunctionSignature&quot;">​</a></h1><p>Returns the function signature for a given function definition.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getFunctionSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getFunctionSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getFunctionSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFunctionSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;function ownerOf(uint256 tokenId)&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256 tokenId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFunctionSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ownerOf(uint256)&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or from an \`AbiFunction\` on your contract ABI</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getFunctionSignature</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;ownerOf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  inputs: [{ name: </span><span style="color:#9ECBFF;">&#39;tokenId&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  outputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getFunctionSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFunctionSignature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;function ownerOf(uint256 tokenId)&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256 tokenId)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFunctionSignature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ownerOf(uint256)&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or from an \`AbiFunction\` on your contract ABI</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getFunctionSignature</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;ownerOf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  inputs: [{ name: </span><span style="color:#032F62;">&#39;tokenId&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  outputs: [],</span></span>
<span class="line"><span style="color:#24292E;">  stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// ownerOf(uint256)</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>string</code></p><p>The signature as a string value.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="function" tabindex="-1">function <a class="header-anchor" href="#function" aria-label="Permalink to &quot;function&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string | AbiFunction</code></li></ul><p>The function to generate a signature for.</p>`,13),l=[t];function p(r,c,i,u,y,E){return a(),s("div",null,l)}const F=n(e,[["render",p]]);export{d as __pageData,F as default};
