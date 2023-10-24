import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.0fcaa977.js";const g=JSON.parse('{"title":"hexToSignature","description":"Parses a hex formatted signature into a structured signature.","frontmatter":{"head":[["meta",{"property":"og:title","content":"hexToSignature"}],["meta",{"name":"description","content":"Parses a hex formatted signature into a structured signature."}],["meta",{"property":"og:description","content":"Parses a hex formatted signature into a structured signature."}]]},"headers":[],"relativePath":"docs/utilities/hexToSignature.md","filePath":"docs/utilities/hexToSignature.md"}'),o={name:"docs/utilities/hexToSignature.md"},t=n(`<h1 id="hextosignature" tabindex="-1">hexToSignature <a class="header-anchor" href="#hextosignature" aria-label="Permalink to &quot;hexToSignature&quot;">​</a></h1><p>Parses a hex formatted signature into a structured (&quot;split&quot;) signature.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#B392F0;">hexToSignature</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c&#39;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   r: &#39;0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   s: &#39;0x4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   v: 28n</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6F42C1;">hexToSignature</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   r: &#39;0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   s: &#39;0x4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *   v: 28n</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#signature"><code>Signature</code></a></p><p>The structured (&quot;split&quot;) signature.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="signaturehex" tabindex="-1">signatureHex <a class="header-anchor" href="#signaturehex" aria-label="Permalink to &quot;signatureHex&quot;">​</a></h3><p>The signature in hex format.</p><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#hex"><code>Hex</code></a></li></ul>`,13),l=[t];function r(p,c,i,d,u,h){return e(),a("div",null,l)}const y=s(o,[["render",r]]);export{g as __pageData,y as default};
