import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.a5052463.js";const f=JSON.parse('{"title":"encodePacked","description":"Generates ABI encoded data.","frontmatter":{"head":[["meta",{"property":"og:title","content":"encodePacked"}],["meta",{"name":"description","content":"Generates ABI encoded data."}],["meta",{"property":"og:description","content":"Generates ABI encoded data."}]]},"headers":[],"relativePath":"docs/abi/encodePacked.md","filePath":"docs/abi/encodePacked.md"}'),l={name:"docs/abi/encodePacked.md"},p=n(`<h1 id="encodepacked" tabindex="-1">encodePacked <a class="header-anchor" href="#encodepacked" aria-label="Permalink to &quot;encodePacked&quot;">​</a></h1><p>Generates <a href="https://docs.soliditylang.org/en/v0.8.18/abi-spec.html#non-standard-packed-mode" target="_blank" rel="noreferrer">ABI non-standard packed encoded data</a> given a set of solidity types compatible with packed encoding.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodePacked } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodePacked } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes16[]&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;hello world&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0xd8da6bf26964af9d7eed9e03e53415d37aa9604568656c6c6f20776f726c64deadbeefdeadbeefdeadbeefdeadbeef00000000000000000000000000000000cafebabecafebabecafebabecafebabe00000000000000000000000000000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;bytes16[]&#39;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;hello world&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0xd8da6bf26964af9d7eed9e03e53415d37aa9604568656c6c6f20776f726c64deadbeefdeadbeefdeadbeefdeadbeef00000000000000000000000000000000cafebabecafebabecafebabecafebabe00000000000000000000000000000000</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#hex"><code>Hex</code></a></p><p>The encoded packed data.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;types&quot;">​</a></h3><ul><li><strong>Type</strong>: <code>PackedAbiType[]</code></li></ul><p>Set of ABI types to pack encode.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes16[]&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;hello world&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;bytes16[]&#39;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;hello world&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="values" tabindex="-1">values <a class="header-anchor" href="#values" aria-label="Permalink to &quot;values&quot;">​</a></h3><ul><li><strong>Type</strong>: <a href="/docs/glossary/terms.html#abiparameterstoprimitivetypes"><code>AbiParametersToPrimitiveTypes&lt;PackedAbiType[]&gt;</code></a></li></ul><p>The set of primitive values that correspond to the ABI types defined in <code>types</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encodePacked</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes16[]&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  [ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;hello world&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encodePacked</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;bytes16[]&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  [ </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0xd8da6bf26964af9d7eed9e03e53415d37aa96045&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;hello world&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;0xdeadbeefdeadbeefdeadbeefdeadbeef&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0xcafebabecafebabecafebabecafebabe&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line has-focus"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div>`,18),o=[p];function c(t,r,d,E,i,y){return e(),a("div",null,o)}const h=s(l,[["render",c]]);export{f as __pageData,h as default};