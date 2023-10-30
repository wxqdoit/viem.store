import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.a5052463.js";const m=JSON.parse('{"title":"isAddressEqual","description":"Checks if the given addresses (checksummed) are equal.","frontmatter":{"head":[["meta",{"property":"og:title","content":"isAddressEqual"}],["meta",{"name":"description","content":"Checks if the given addresses (checksummed) are equal."}],["meta",{"property":"og:description","content":"Checks if the given addresses (checksummed) are equal."}]]},"headers":[],"relativePath":"docs/utilities/isAddressEqual.md","filePath":"docs/utilities/isAddressEqual.md"}'),o={name:"docs/utilities/isAddressEqual.md"},l=n(`<h1 id="isaddressequal" tabindex="-1">isAddressEqual <a class="header-anchor" href="#isaddressequal" aria-label="Permalink to &quot;isAddressEqual&quot;">​</a></h1><p>Checks if the given addresses (checksummed) are equal.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isAddressEqual } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isAddressEqual } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isAddressEqual } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#B392F0;">isAddressEqual</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994db5b0d9a5eEdD10Cabab0813678ac&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isAddressEqual } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#6F42C1;">isAddressEqual</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xa5cc3c03994db5b0d9a5eEdD10Cabab0813678ac&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#6A737D;">// true</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>boolean</code></p><p>Whether or not the addresses are equal.</p>`,9),t=[l];function p(r,c,d,i,u,h){return e(),a("div",null,t)}const y=s(o,[["render",p]]);export{m as __pageData,y as default};