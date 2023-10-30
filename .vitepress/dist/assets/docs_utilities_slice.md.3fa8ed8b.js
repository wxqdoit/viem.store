import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.a5052463.js";const u=JSON.parse('{"title":"slice","description":"Returns a section of the hex or byte array given a start/end bytes offset.","frontmatter":{"head":[["meta",{"property":"og:title","content":"slice"}],["meta",{"name":"description","content":"Returns a section of the hex or byte array given a start/end bytes offset."}],["meta",{"property":"og:description","content":"Returns a section of the hex or byte array given a start/end bytes offset."}]]},"headers":[],"relativePath":"docs/utilities/slice.md","filePath":"docs/utilities/slice.md"}'),o={name:"docs/utilities/slice.md"},e=l(`<h1 id="slice" tabindex="-1">slice <a class="header-anchor" href="#slice" aria-label="Permalink to &quot;slice&quot;">​</a></h1><p>Returns a section of the hex or byte array given a start/end bytes offset.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { slice } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { slice } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { slice } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x0123456789&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x234567</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Uint8Array</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">122</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">51</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">]), </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array [122, 51]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { slice } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x0123456789&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x234567</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Uint8Array</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">122</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">51</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">]), </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array [122, 51]</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>Hex | ByteArray</code></p><p>The section of the sliced value.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex | ByteArray</code></li></ul><p>The hex or byte array to slice.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x0123456789&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x0123456789&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="start-optional" tabindex="-1">start (optional) <a class="header-anchor" href="#start-optional" aria-label="Permalink to &quot;start (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>The start offset (in bytes).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x0123456789&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x0123456789&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="end-optional" tabindex="-1">end (optional) <a class="header-anchor" href="#end-optional" aria-label="Permalink to &quot;end (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>The end offset (in bytes).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x0123456789&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x0123456789&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="options-strict-optional" tabindex="-1">options.strict (optional) <a class="header-anchor" href="#options-strict-optional" aria-label="Permalink to &quot;options.strict (optional)&quot;">​</a></h4><ul><li><strong>Type:</strong> <code>boolean</code></li></ul><p>Whether or not the end offset should be inclusive of the bounds of the data.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, { strict: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// [SliceOffsetOutOfBoundsError] Slice ending at offset &quot;20&quot; is out-of-bounds (size: 19).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, { strict: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// 0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, { strict: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// [SliceOffsetOutOfBoundsError] Slice ending at offset &quot;20&quot; is out-of-bounds (size: 19).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, { strict: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// 0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC</span></span></code></pre></div>`,26),p=[e];function t(c,r,i,y,E,d){return n(),a("div",null,p)}const F=s(o,[["render",t]]);export{u as __pageData,F as default};