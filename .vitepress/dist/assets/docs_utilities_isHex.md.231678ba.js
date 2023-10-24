import{_ as s,c as a,o as n,Q as e}from"./chunks/framework.0fcaa977.js";const u=JSON.parse('{"title":"isHex","description":"Checks whether the value is a hex value or not.","frontmatter":{"head":[["meta",{"property":"og:title","content":"isHex"}],["meta",{"name":"description","content":"Checks whether the value is a hex value or not."}],["meta",{"property":"og:description","content":"Checks whether the value is a hex value or not."}]]},"headers":[],"relativePath":"docs/utilities/isHex.md","filePath":"docs/utilities/isHex.md"}'),l={name:"docs/utilities/isHex.md"},o=e(`<h1 id="ishex" tabindex="-1">isHex <a class="header-anchor" href="#ishex" aria-label="Permalink to &quot;isHex&quot;">​</a></h1><p>Checks whether the value is a hex value or not.</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isHex } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isHex } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isHex } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1a4&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1a4z&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isHex } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1a4&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1a4z&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>boolean</code></p><p>Returns truthy is the value is a hex value.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>unknown</code></li></ul><p>The value to check.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x1a4&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x1a4&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre></div><h3 id="options-strict" tabindex="-1">options.strict <a class="header-anchor" href="#options-strict" aria-label="Permalink to &quot;options.strict&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>boolean</code></li><li><strong>Default:</strong> <code>true</code></li></ul><p>When enabled, checks if the value strictly consists of only hex characters (<code>&quot;0x[0-9a-fA-F]*&quot;</code>). When disabled, checks if the value loosely matches hex format (<code>value.startsWith(&#39;0x&#39;)</code>).</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xlol&#39;</span><span style="color:#E1E4E8;">, { strict: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xlol&#39;</span><span style="color:#E1E4E8;">, { strict: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">isHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;lol&#39;</span><span style="color:#E1E4E8;">, { strict: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xlol&#39;</span><span style="color:#24292E;">, { strict: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xlol&#39;</span><span style="color:#24292E;">, { strict: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">isHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;lol&#39;</span><span style="color:#24292E;">, { strict: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#6A737D;">// false</span></span></code></pre></div>`,18),p=[o];function t(c,r,i,y,h,d){return n(),a("div",null,p)}const x=s(l,[["render",t]]);export{u as __pageData,x as default};
