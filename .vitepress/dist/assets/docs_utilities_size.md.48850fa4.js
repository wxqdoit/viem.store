import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.0fcaa977.js";const u=JSON.parse('{"title":"size","description":"Retrieves the size of the value (in bytes).","frontmatter":{"head":[["meta",{"property":"og:title","content":"size"}],["meta",{"name":"description","content":"Retrieves the size of the value (in bytes)."}],["meta",{"property":"og:description","content":"Retrieves the size of the value (in bytes)."}]]},"headers":[],"relativePath":"docs/utilities/size.md","filePath":"docs/utilities/size.md"}'),o={name:"docs/utilities/size.md"},l=n(`<h1 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h1><p>Retrieves the size of the value (in bytes).</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { size } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { size } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { size } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa4&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa4e12a45&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 4</span></span>
<span class="line"><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">122</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">51</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">])) </span><span style="color:#6A737D;">// 4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { size } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">size</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa4&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#6F42C1;">size</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa4e12a45&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 4</span></span>
<span class="line"><span style="color:#6F42C1;">size</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Uint8Array</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">122</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">51</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">])) </span><span style="color:#6A737D;">// 4</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>number</code></p><p>The size of the value (in bytes).</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#hex"><code>Hex</code></a> | <code>ByteArray</code></li></ul><p>The value (hex or byte array) to retrieve the size of.</p>`,13),p=[l];function t(r,c,i,y,d,h){return e(),a("div",null,p)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
