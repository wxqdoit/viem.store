import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.a5052463.js";const h=JSON.parse('{"title":"recoverAddress","description":"Recovers the signing address from a hash & signature.","frontmatter":{"head":[["meta",{"property":"og:title","content":"recoverAddress"}],["meta",{"name":"description","content":"Recovers the signing address from a hash & signature."}],["meta",{"property":"og:description","content":"Recovers the signing address from a hash & signature."}]]},"headers":[],"relativePath":"docs/utilities/recoverAddress.md","filePath":"docs/utilities/recoverAddress.md"}'),o={name:"docs/utilities/recoverAddress.md"},l=n(`<h1 id="recoveraddress" tabindex="-1">recoverAddress <a class="header-anchor" href="#recoveraddress" aria-label="Permalink to &quot;recoverAddress&quot;">​</a></h1><p>Recovers the original signing address from a hash &amp; signature.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { recoverAddress } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">recoverAddress</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  hash: </span><span style="color:#9ECBFF;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  signature: </span><span style="color:#9ECBFF;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { recoverAddress } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">recoverAddress</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  hash: </span><span style="color:#032F62;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  signature: </span><span style="color:#032F62;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#address"><code>Address</code></a></p><p>The signing address.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>The hash that was signed.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">recoverAddress</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  hash: </span><span style="color:#9ECBFF;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  signature: </span><span style="color:#9ECBFF;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">recoverAddress</span><span style="color:#24292E;">({ </span></span>
<span class="line has-focus"><span style="color:#24292E;">  hash: </span><span style="color:#032F62;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  signature: </span><span style="color:#032F62;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="signature" tabindex="-1">signature <a class="header-anchor" href="#signature" aria-label="Permalink to &quot;signature&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex | ByteArray</code></li></ul><p>The signature of the hash.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">recoverAddress</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line"><span style="color:#E1E4E8;">  hash: </span><span style="color:#9ECBFF;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  signature: </span><span style="color:#9ECBFF;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">recoverAddress</span><span style="color:#24292E;">({ </span></span>
<span class="line"><span style="color:#24292E;">  hash: </span><span style="color:#032F62;">&#39;0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  signature: </span><span style="color:#032F62;">&#39;0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,16),c=[l];function p(r,t,d,i,E,b){return e(),a("div",null,c)}const f=s(o,[["render",p]]);export{h as __pageData,f as default};