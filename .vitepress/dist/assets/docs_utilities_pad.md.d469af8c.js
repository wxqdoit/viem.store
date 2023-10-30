import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.a5052463.js";const u=JSON.parse('{"title":"pad","description":"Pads a hex value or byte array with leading or trailing zeros.","frontmatter":{"head":[["meta",{"property":"og:title","content":"pad"}],["meta",{"name":"description","content":"Pads a hex value or byte array with leading or trailing zeros."}],["meta",{"property":"og:description","content":"Pads a hex value or byte array with leading or trailing zeros."}]]},"headers":[],"relativePath":"docs/utilities/pad.md","filePath":"docs/utilities/pad.md"}'),l={name:"docs/utilities/pad.md"},p=e(`<h1 id="pad" tabindex="-1">pad <a class="header-anchor" href="#pad" aria-label="Permalink to &quot;pad&quot;">​</a></h1><p>Pads a hex value or byte array with leading or trailing zeros.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pad } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pad } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>By default, <code>pad</code> will pad a value with leading zeros up to 32 bytes (64 hex chars).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { pad } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">pad</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa4e12a45&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x00000000000000000000000000000000000000000000000000000000a4e12a45</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">pad</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">122</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">51</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,122,51,123]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { pad } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">pad</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa4e12a45&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x00000000000000000000000000000000000000000000000000000000a4e12a45</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">pad</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Uint8Array</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">122</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">51</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">]))</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,122,51,123]</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Hex | ByteArray</code></p><p>The value with padded zeros.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="dir" tabindex="-1">dir <a class="header-anchor" href="#dir" aria-label="Permalink to &quot;dir&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&quot;left&quot; | &quot;right&quot;</code></li><li><strong>Default:</strong> <code>&quot;left&quot;</code></li></ul><p>The direction in which to pad the zeros – either leading (left), or trailing (right).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pad</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa4e12a45&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dir: </span><span style="color:#9ECBFF;">&#39;right&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0xa4e12a4500000000000000000000000000000000000000000000000000000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pad</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa4e12a45&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  dir: </span><span style="color:#032F62;">&#39;right&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0xa4e12a4500000000000000000000000000000000000000000000000000000000</span></span></code></pre></div><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>32</code></li></ul><p>Size (in bytes) of the targeted value.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pad</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa4e12a45&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  size: </span><span style="color:#79B8FF;">16</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000a4e12a45</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pad</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa4e12a45&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  size: </span><span style="color:#005CC5;">16</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000a4e12a45</span></span></code></pre></div>`,19),o=[p];function t(r,c,i,d,y,h){return n(),a("div",null,o)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};