import{_ as s,c as n,o as a,Q as p}from"./chunks/framework.0fcaa977.js";const B=JSON.parse(`{"title":"signTypedData (Local Account)","description":"Signs typed data with the Account's private key.","frontmatter":{"head":[["meta",{"property":"og:title","content":"signTypedData (Local Account)"}],["meta",{"name":"description","content":"Signs typed data with the Account's private key."}],["meta",{"property":"og:description","content":"Signs typed data with the Account's private key."}]]},"headers":[],"relativePath":"docs/accounts/signTypedData.md","filePath":"docs/accounts/signTypedData.md"}`),l={name:"docs/accounts/signTypedData.md"},o=p(`<h1 id="signtypeddata-local-account" tabindex="-1">signTypedData (Local Account) <a class="header-anchor" href="#signtypeddata-local-account" aria-label="Permalink to &quot;signTypedData (Local Account)&quot;">​</a></h1><p>Signs typed data and calculates an Ethereum-specific signature in <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" rel="noreferrer">https://eips.ethereum.org/EIPS/eip-712</a>: <code>sign(keccak256(&quot;\\x19\\x01&quot; ‖ domainSeparator ‖ hashStruct(message)))</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rvxO9" id="tab-qH2aw29" checked="checked"><label for="tab-qH2aw29">example.ts</label><input type="radio" name="group-rvxO9" id="tab-N6UgAWD"><label for="tab-N6UgAWD">data.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { privateKeyToAccount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { domain, types } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">privateKeyToAccount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> account.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  domain,</span></span>
<span class="line"><span style="color:#E1E4E8;">  types,</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryType: </span><span style="color:#9ECBFF;">&#39;Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  message: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { privateKeyToAccount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { domain, types } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">privateKeyToAccount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x...&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> account.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  domain,</span></span>
<span class="line"><span style="color:#24292E;">  types,</span></span>
<span class="line"><span style="color:#24292E;">  primaryType: </span><span style="color:#032F62;">&#39;Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  message: {</span></span>
<span class="line"><span style="color:#24292E;">    from: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    to: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// All properties on a domain are optional</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">domain</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Ether Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  version: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  chainId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  verifyingContract: </span><span style="color:#9ECBFF;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// The named list of all type definitions</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">types</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Person: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;wallet&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  Mail: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// All properties on a domain are optional</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">domain</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Ether Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  version: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  chainId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  verifyingContract: </span><span style="color:#032F62;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// The named list of all type definitions</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">types</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  Person: [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;wallet&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  Mail: [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>0x\${string}</code></p><p>The signed data.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="domain" tabindex="-1">domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;domain&quot;">​</a></h3><p><strong>Type:</strong> <code>TypedDataDomain</code></p><p>The typed data domain.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> account.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  domain: { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Ether Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    version: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    chainId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    verifyingContract: </span><span style="color:#9ECBFF;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  types,</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryType: </span><span style="color:#9ECBFF;">&#39;Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  message: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> account.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  domain: { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Ether Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    version: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    chainId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    verifyingContract: </span><span style="color:#032F62;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  types,</span></span>
<span class="line"><span style="color:#24292E;">  primaryType: </span><span style="color:#032F62;">&#39;Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  message: {</span></span>
<span class="line"><span style="color:#24292E;">    from: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    to: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;types&quot;">​</a></h3><p>The type definitions for the typed data.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> account.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  domain,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  types: { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    Person: [</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;wallet&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    Mail: [</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryType: </span><span style="color:#9ECBFF;">&#39;Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  message: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> account.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  domain,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  types: { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    Person: [</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;wallet&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">    ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">    Mail: [</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">    ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  primaryType: </span><span style="color:#032F62;">&#39;Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  message: {</span></span>
<span class="line"><span style="color:#24292E;">    from: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    to: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="primarytype" tabindex="-1">primaryType <a class="header-anchor" href="#primarytype" aria-label="Permalink to &quot;primaryType&quot;">​</a></h3><p><strong>Type:</strong> Inferred <code>string</code>.</p><p>The primary type to extract from <code>types</code> and use in <code>value</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> account.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  domain,</span></span>
<span class="line"><span style="color:#E1E4E8;">  types: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Person: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;wallet&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    Mail: [ </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  primaryType: </span><span style="color:#9ECBFF;">&#39;Mail&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  message: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> account.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  domain,</span></span>
<span class="line"><span style="color:#24292E;">  types: {</span></span>
<span class="line"><span style="color:#24292E;">    Person: [</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;wallet&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line has-focus"><span style="color:#24292E;">    Mail: [ </span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line has-focus"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line has-focus"><span style="color:#24292E;">  primaryType: </span><span style="color:#032F62;">&#39;Mail&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  message: {</span></span>
<span class="line"><span style="color:#24292E;">    from: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    to: {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><p><strong>Type:</strong> Inferred from <code>types</code> &amp; <code>primaryType</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> account.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  domain,</span></span>
<span class="line"><span style="color:#E1E4E8;">  types: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Person: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;wallet&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;address&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    Mail: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;from&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;to&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;Person&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { name: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  primaryType: </span><span style="color:#9ECBFF;">&#39;Mail&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  message: { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    from: {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Cow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    to: {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;Bob&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      wallet: </span><span style="color:#9ECBFF;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    contents: </span><span style="color:#9ECBFF;">&#39;Hello, Bob!&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> account.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  domain,</span></span>
<span class="line"><span style="color:#24292E;">  types: {</span></span>
<span class="line"><span style="color:#24292E;">    Person: [</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;wallet&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;address&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    Mail: [</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;from&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;to&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;Person&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { name: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  primaryType: </span><span style="color:#032F62;">&#39;Mail&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus"><span style="color:#24292E;">  message: { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    from: {</span></span>
<span class="line has-focus"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Cow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    },</span></span>
<span class="line has-focus"><span style="color:#24292E;">    to: {</span></span>
<span class="line has-focus"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;Bob&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">      wallet: </span><span style="color:#032F62;">&#39;0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    },</span></span>
<span class="line has-focus"><span style="color:#24292E;">    contents: </span><span style="color:#032F62;">&#39;Hello, Bob!&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,22),e=[o];function c(t,E,r,y,i,F){return a(),n("div",null,e)}const d=s(l,[["render",c]]);export{B as __pageData,d as default};
