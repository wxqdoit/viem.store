import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.a5052463.js";const u=JSON.parse('{"title":"fromHex","description":"Decodes a hex value to a string, number or byte array.","frontmatter":{"head":[["meta",{"property":"og:title","content":"fromHex"}],["meta",{"name":"description","content":"Decodes a hex value to a string, number or byte array."}],["meta",{"property":"og:description","content":"Decodes a hex value to a string, number or byte array."}]]},"headers":[],"relativePath":"docs/utilities/fromHex.md","filePath":"docs/utilities/fromHex.md"}'),p={name:"docs/utilities/fromHex.md"},o=l(`<h1 id="fromhex" tabindex="-1">fromHex <a class="header-anchor" href="#fromhex" aria-label="Permalink to &quot;fromHex&quot;">​</a></h1><p>Decodes a hex value to a string, number or byte array.</p><p>Shortcut Functions:</p><ul><li><a href="#hextonumber">hexToNumber</a></li><li><a href="#hextobigint">hexToBigInt</a></li><li><a href="#hextostring">hexToString</a></li><li><a href="#hextobytes">hexToBytes</a></li><li><a href="#hextobool">hexToBool</a></li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fromHex } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { fromHex } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fromHex } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1a4&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;number&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xc5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bigint&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20776f726c642e&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;bytes&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;boolean&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { fromHex } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1a4&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;number&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xc5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;bigint&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x48656c6c6f20776f726c642e&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;bytes&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;boolean&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>string | bigint | number | ByteArray</code></p><p>The targeted type.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="hex" tabindex="-1">hex <a class="header-anchor" href="#hex" aria-label="Permalink to &quot;hex&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>The hex value to decode.</p><h3 id="tooroptions" tabindex="-1">toOrOptions <a class="header-anchor" href="#tooroptions" aria-label="Permalink to &quot;toOrOptions&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&quot;string&quot; | &quot;hex&quot; | &quot;number&quot; | &quot;bigint&quot; | &quot;boolean&quot; | Options</code></li></ul><p>The output type or options.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20776f726c642e&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;Hello world&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x48656c6c6f20776f726c642e&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;Hello world&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">fromHex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    to: </span><span style="color:#9ECBFF;">&#39;string&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;Hello world&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">fromHex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x48656c6c6f20776f726c642e0000000000000000000000000000000000000000&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">  {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    to: </span><span style="color:#032F62;">&#39;string&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;Hello world&#39;</span></span></code></pre></div><h2 id="shortcut-functions" tabindex="-1">Shortcut Functions <a class="header-anchor" href="#shortcut-functions" aria-label="Permalink to &quot;Shortcut Functions&quot;">​</a></h2><h3 id="hextonumber" tabindex="-1">hexToNumber <a class="header-anchor" href="#hextonumber" aria-label="Permalink to &quot;hexToNumber&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>Decodes a hex value to a number.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToNumber } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1a4&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToNumber</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000000000000000000000000000000001a4&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  { size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToNumber } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToNumber</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1a4&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToNumber</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000000000000000000000000000000001a4&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  { size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 420</span></span></code></pre></div><h3 id="hextobigint" tabindex="-1">hexToBigInt <a class="header-anchor" href="#hextobigint" aria-label="Permalink to &quot;hexToBigInt&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>Decodes a hex value to a bigint.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToBigInt } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBigInt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0xc5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBigInt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000c5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  { size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToBigInt } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBigInt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0xc5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBigInt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000c5cf39211876fb5e5884327fa56fc0b75&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  { size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 4206942069420694206942069420694206942069n</span></span></code></pre></div><h3 id="hextostring" tabindex="-1">hexToString <a class="header-anchor" href="#hextostring" aria-label="Permalink to &quot;hexToString&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>Decodes a hex value to a string.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToString } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToString</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello World!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToString</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20576f726c64210000000000000000000000000000000000000000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello World!&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToString } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToString</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello World!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToString</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x48656c6c6f20576f726c64210000000000000000000000000000000000000000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  { size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// &quot;Hello World!&quot;</span></span></code></pre></div><h3 id="hextobytes" tabindex="-1">hexToBytes <a class="header-anchor" href="#hextobytes" aria-label="Permalink to &quot;hexToBytes&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>Decodes a hex value to a byte array.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToBytes } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBytes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBytes</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x48656c6c6f20576f726c64210000000000000000000000000000000000000000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToBytes } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBytes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x48656c6c6f20576f726c6421&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBytes</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x48656c6c6f20576f726c64210000000000000000000000000000000000000000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  { size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])</span></span></code></pre></div><h3 id="hextobool" tabindex="-1">hexToBool <a class="header-anchor" href="#hextobool" aria-label="Permalink to &quot;hexToBool&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>Decodes a hex value to a boolean.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { hexToBool } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBool</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">hexToBool</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;0x00000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { size: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { hexToBool } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBool</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">hexToBool</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;0x00000000000000000000000000000000000000000000000000000000000001&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  { size: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// true</span></span></code></pre></div>`,41),e=[o];function t(c,r,i,y,E,h){return n(),a("div",null,e)}const x=s(p,[["render",t]]);export{u as __pageData,x as default};
