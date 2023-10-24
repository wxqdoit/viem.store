import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.0fcaa977.js";const g=JSON.parse('{"title":"parseGwei","description":"Converts a string representation of gwei to numerical wei.","frontmatter":{"head":[["meta",{"property":"og:title","content":"parseGwei"}],["meta",{"name":"description","content":"Converts a string representation of gwei to numerical wei."}],["meta",{"property":"og:description","content":"Converts a string representation of gwei to numerical wei."}]]},"headers":[],"relativePath":"docs/utilities/parseGwei.md","filePath":"docs/utilities/parseGwei.md"}'),o={name:"docs/utilities/parseGwei.md"},t=n(`<h1 id="parsegwei" tabindex="-1">parseGwei <a class="header-anchor" href="#parsegwei" aria-label="Permalink to &quot;parseGwei&quot;">​</a></h1><p>Converts a string representation of gwei to numerical wei.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseGwei } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseGwei } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseGwei } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#B392F0;">parseGwei</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;420&#39;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 420000000000n</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseGwei } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6F42C1;">parseGwei</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;420&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 420000000000n</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>bigint</code></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>The string representation of gwei.</p>`,12),r=[t];function p(l,i,c,d,h,u){return e(),a("div",null,r)}const y=s(o,[["render",p]]);export{g as __pageData,y as default};
