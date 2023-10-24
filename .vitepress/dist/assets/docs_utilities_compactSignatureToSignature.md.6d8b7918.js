import{_ as a,c as s,o as n,Q as e}from"./chunks/framework.0fcaa977.js";const m=JSON.parse('{"title":"compactSignatureToSignature","description":"Parses a compact signature into signature format.","frontmatter":{"head":[["meta",{"property":"og:title","content":"compactSignatureToSignature"}],["meta",{"name":"description","content":"Parses a compact signature into signature format."}],["meta",{"property":"og:description","content":"Parses a compact signature into signature format."}]]},"headers":[],"relativePath":"docs/utilities/compactSignatureToSignature.md","filePath":"docs/utilities/compactSignatureToSignature.md"}'),o={name:"docs/utilities/compactSignatureToSignature.md"},t=e(`<h1 id="compactsignaturetosignature" tabindex="-1">compactSignatureToSignature <a class="header-anchor" href="#compactsignaturetosignature" aria-label="Permalink to &quot;compactSignatureToSignature&quot;">​</a></h1><p>Parses a <a href="https://eips.ethereum.org/EIPS/eip-2098" target="_blank" rel="noreferrer">EIP-2098</a> compact signature into signature format.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { compactSignatureToSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { compactSignatureToSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { compactSignatureToSignature } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#B392F0;">compactSignatureToSignature</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  r: </span><span style="color:#9ECBFF;">&#39;0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  yParityAndS:</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// {</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   r: &#39;0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   s: &#39;0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   v: 27n</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// }</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { compactSignatureToSignature } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6F42C1;">compactSignatureToSignature</span><span style="color:#24292E;">({ </span></span>
<span class="line has-focus"><span style="color:#24292E;">  r: </span><span style="color:#032F62;">&#39;0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  yParityAndS:</span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// {</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   r: &#39;0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   s: &#39;0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;">//   v: 27n</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// }</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#signature"><code>Signature</code></a></p><p>The signature.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="compactsignature" tabindex="-1">compactSignature <a class="header-anchor" href="#compactsignature" aria-label="Permalink to &quot;compactSignature&quot;">​</a></h3><p>The compact signature.</p><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#CompactSignature"><code>CompactSignature</code></a></li></ul>`,13),p=[t];function c(r,l,i,u,d,h){return n(),s("div",null,p)}const f=a(o,[["render",c]]);export{m as __pageData,f as default};
