import{_ as s,c as a,o as n,Q as p}from"./chunks/framework.0fcaa977.js";const h=JSON.parse('{"title":"getAbiItem","description":"Retrieves an item from the ABI array.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getAbiItem"}],["meta",{"name":"description","content":"Retrieves an item from the ABI array."}],["meta",{"property":"og:description","content":"Retrieves an item from the ABI array."}]]},"headers":[],"relativePath":"docs/abi/getAbiItem.md","filePath":"docs/abi/getAbiItem.md"}'),l={name:"docs/abi/getAbiItem.md"},e=p(`<h1 id="getabiitem" tabindex="-1">getAbiItem <a class="header-anchor" href="#getabiitem" aria-label="Permalink to &quot;getAbiItem&quot;">​</a></h1><p>Retrieves an item from the ABI.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getAbiItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getAbiItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getAbiItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAbiItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [{ type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }], </span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;payable&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;event&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [{ type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> }], </span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [{ type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;function&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">      inputs: [{ type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      outputs: [{ type: </span><span style="color:#9ECBFF;">&#39;uint256&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      stateMutability: </span><span style="color:#9ECBFF;">&#39;view&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * { </span></span>
<span class="line"><span style="color:#6A737D;"> *  name: &#39;y&#39;, </span></span>
<span class="line"><span style="color:#6A737D;"> *  type: &#39;event&#39;, </span></span>
<span class="line"><span style="color:#6A737D;"> *  inputs: [{ type: &#39;address&#39; }], </span></span>
<span class="line"><span style="color:#6A737D;"> *  outputs: [{ type: &#39;uint256&#39; }],</span></span>
<span class="line"><span style="color:#6A737D;"> *  stateMutability: &#39;view&#39;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getAbiItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAbiItem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: [</span></span>
<span class="line"><span style="color:#24292E;">    { </span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      inputs: [{ type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }], </span></span>
<span class="line"><span style="color:#24292E;">      outputs: [],</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;payable&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    { </span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;event&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      inputs: [{ type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> }], </span></span>
<span class="line"><span style="color:#24292E;">      outputs: [{ type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    { </span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;z&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;function&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">      inputs: [{ type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      outputs: [{ type: </span><span style="color:#032F62;">&#39;uint256&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      stateMutability: </span><span style="color:#032F62;">&#39;view&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * { </span></span>
<span class="line"><span style="color:#6A737D;"> *  name: &#39;y&#39;, </span></span>
<span class="line"><span style="color:#6A737D;"> *  type: &#39;event&#39;, </span></span>
<span class="line"><span style="color:#6A737D;"> *  inputs: [{ type: &#39;address&#39; }], </span></span>
<span class="line"><span style="color:#6A737D;"> *  outputs: [{ type: &#39;uint256&#39; }],</span></span>
<span class="line"><span style="color:#6A737D;"> *  stateMutability: &#39;view&#39;</span></span>
<span class="line"><span style="color:#6A737D;"> * }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>AbiItem</code></p><p>The ABI item.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="abi" tabindex="-1">abi <a class="header-anchor" href="#abi" aria-label="Permalink to &quot;abi&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#abi"><code>Abi</code></a></li></ul><p>The contract&#39;s ABI.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAbiItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  abi: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAbiItem</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  abi: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>Name of the ABI item to extract.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAbiItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAbiItem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>You can also provide the ABI item&#39;s 4byte selector:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAbiItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;0x70a08231&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAbiItem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;0x70a08231&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="args-optional" tabindex="-1">args (optional) <a class="header-anchor" href="#args-optional" aria-label="Permalink to &quot;args (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> Inferred.</li></ul><p>Optional arguments to identify function overrides.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encodedData</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getAbiItem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  abi: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  args: [</span><span style="color:#9ECBFF;">&#39;0x0000000000000000000000000000000000000000&#39;</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encodedData</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getAbiItem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  abi: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  args: [</span><span style="color:#032F62;">&#39;0x0000000000000000000000000000000000000000&#39;</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,24),o=[e];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
