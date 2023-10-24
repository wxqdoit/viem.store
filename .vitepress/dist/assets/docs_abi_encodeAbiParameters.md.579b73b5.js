import{_ as s,c as a,o as n,Q as p}from"./chunks/framework.0fcaa977.js";const u=JSON.parse('{"title":"encodeAbiParameters","description":"Generates ABI encoded data.","frontmatter":{"head":[["meta",{"property":"og:title","content":"encodeAbiParameters"}],["meta",{"name":"description","content":"Generates ABI encoded data."}],["meta",{"property":"og:description","content":"Generates ABI encoded data."}]]},"headers":[],"relativePath":"docs/abi/encodeAbiParameters.md","filePath":"docs/abi/encodeAbiParameters.md"}'),l={name:"docs/abi/encodeAbiParameters.md"},e=p(`<h1 id="encodeabiparameters" tabindex="-1">encodeAbiParameters <a class="header-anchor" href="#encodeabiparameters" aria-label="Permalink to &quot;encodeAbiParameters&quot;">​</a></h1><p>Generates ABI encoded data using the <a href="https://solidity.readthedocs.io/en/latest/abi-spec.html" target="_blank" rel="noreferrer">ABI specification</a>, given a set of ABI parameters (<code>inputs</code>/<code>outputs</code>) and their corresponding values.</p><p>The <code>encodeAbiParameters</code> function is used by the other contract encoding utilities (ie. <code>encodeFunctionData</code>, <code>encodeEventTopics</code>, etc).</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeAbiParameters } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeAbiParameters } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>encodeAbiParameters</code> function takes in two parameters:</p><ul><li>a set of ABI Parameters (<code>params</code>), that can be in the shape of the <code>inputs</code> or <code>outputs</code> attribute of an ABI Item.</li><li>a set of values (<code>values</code>) that correspond to the given <code>params</code>.</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeAbiParameters } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeAbiParameters</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;bool&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;wagmi&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a4000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000057761676d69000000000000000000000000000000000000000000000000000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeAbiParameters } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeAbiParameters</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;z&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;bool&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;wagmi&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a4000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000057761676d69000000000000000000000000000000000000000000000000000000</span></span></code></pre></div><h3 id="human-readable" tabindex="-1">Human Readable <a class="header-anchor" href="#human-readable" aria-label="Permalink to &quot;Human Readable&quot;">​</a></h3><p>You can also pass in <a href="/docs/glossary/terms.html#human-readable-abi">Human Readable</a> parameters with the <a href="/docs/abi/parseAbiParameters.html"><code>parseAbiParameters</code> utility</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { encodeAbiParameters, parseAbiParameters } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeAbiParameters</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">parseAbiParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;string x, uint y, bool z&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;wagmi&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a4000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000057761676d69000000000000000000000000000000000000000000000000000000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { encodeAbiParameters, parseAbiParameters } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeAbiParameters</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">parseAbiParameters</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;string x, uint y, bool z&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;wagmi&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a4000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000057761676d69000000000000000000000000000000000000000000000000000000</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#hex"><code>Hex</code></a></p><p>The ABI encoded data.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="params" tabindex="-1">params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><strong>Type</strong>: <a href="/docs/glossary/terms.html#abiparameter"><code>AbiParameter[]</code></a></li></ul><p>The set of ABI parameters to encode, in the shape of the <code>inputs</code> or <code>outputs</code> attribute of an ABI event/function.</p><p>These parameters must include valid <a href="https://docs.soliditylang.org/en/develop/abi-spec.html#types" target="_blank" rel="noreferrer">ABI types</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encodeAbiParameters</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint32&#39;</span><span style="color:#E1E4E8;"> }], </span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">69420</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encodeAbiParameters</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint32&#39;</span><span style="color:#24292E;"> }], </span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">69420</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="values" tabindex="-1">values <a class="header-anchor" href="#values" aria-label="Permalink to &quot;values&quot;">​</a></h3><ul><li><strong>Type</strong>: <a href="/docs/glossary/terms.html#abiparameterstoprimitivetypes"><code>AbiParametersToPrimitiveTypes&lt;AbiParameter[]&gt;</code></a></li></ul><p>The set of primitive values that correspond to the ABI types defined in <code>params</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#B392F0;">encodeAbiParameters</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;uint32&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">69420</span><span style="color:#E1E4E8;">] </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#6F42C1;">encodeAbiParameters</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;uint32&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">69420</span><span style="color:#24292E;">] </span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="more-examples" tabindex="-1">More Examples <a class="header-anchor" href="#more-examples" aria-label="Permalink to &quot;More Examples&quot;">​</a></h2><h3 id="simple-struct" tabindex="-1">Simple struct <a class="header-anchor" href="#simple-struct" aria-label="Permalink to &quot;Simple struct&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NMau2" id="tab-m3uIGQZ" checked="checked"><label for="tab-m3uIGQZ">example.ts</label><input type="radio" name="group-NMau2" id="tab-0_yqIqn"><label for="tab-0_yqIqn">abi.ts</label><input type="radio" name="group-NMau2" id="tab-3TtYBU2"><label for="tab-3TtYBU2">Example.sol</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { abi } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./abi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encodeAbiParameters</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].inputs,</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    x: </span><span style="color:#79B8FF;">420</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    y: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    z: </span><span style="color:#9ECBFF;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }],</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x00000000000000000000000000000000000000000000000000000000000001a40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { abi } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./abi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encodeAbiParameters</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  abi[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].inputs,</span></span>
<span class="line"><span style="color:#24292E;">  [{</span></span>
<span class="line"><span style="color:#24292E;">    x: </span><span style="color:#005CC5;">420</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    y: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    z: </span><span style="color:#032F62;">&#39;0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }],</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 0x00000000000000000000000000000000000000000000000000000000000001a40000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a5cc3c03994db5b0d9a5eedd10cabab0813678ac</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">abi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;staticStruct&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    inputs: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;bool&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;tuple&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">abi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;staticStruct&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    inputs: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        components: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;bool&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;z&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;tuple&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">] </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span></code></pre></div><div class="language-solidity vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">solidity</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">contract</span><span style="color:#B392F0;"> Example</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Foo</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">uint256</span><span style="color:#E1E4E8;"> x;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">bool</span><span style="color:#E1E4E8;"> y;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">address</span><span style="color:#E1E4E8;"> z;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">staticStruct</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">Foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">calldata</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">foo</span><span style="color:#E1E4E8;">) { ... }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">contract</span><span style="color:#6F42C1;"> Example</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Foo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">uint256</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">bool</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">address</span><span style="color:#24292E;"> z;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">staticStruct</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">Foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">calldata</span><span style="color:#24292E;"> </span><span style="color:#E36209;">foo</span><span style="color:#24292E;">) { ... }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,28),o=[e];function t(c,r,E,i,y,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
