import{_ as a,c as l,o as p,Q as o,k as s,a as n}from"./chunks/framework.0fcaa977.js";const u=JSON.parse(`{"title":"signTypedData","description":"Signs typed data with the Account's private key.","frontmatter":{"head":[["meta",{"property":"og:title","content":"signTypedData"}],["meta",{"name":"description","content":"Signs typed data with the Account's private key."}],["meta",{"property":"og:description","content":"Signs typed data with the Account's private key."}]]},"headers":[],"relativePath":"docs/actions/wallet/signTypedData.md","filePath":"docs/actions/wallet/signTypedData.md"}`),e={name:"docs/actions/wallet/signTypedData.md"},c=o(`<h1 id="signtypeddata" tabindex="-1">signTypedData <a class="header-anchor" href="#signtypeddata" aria-label="Permalink to &quot;signTypedData&quot;">​</a></h1><p>Signs typed data and calculates an Ethereum-specific signature in <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank" rel="noreferrer">https://eips.ethereum.org/EIPS/eip-712</a>: <code>sign(keccak256(&quot;\\x19\\x01&quot; ‖ domainSeparator ‖ hashStruct(message)))</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_l8K7" id="tab-nQbwJ-N" checked="checked"><label for="tab-nQbwJ-N">example.ts</label><input type="radio" name="group-_l8K7" id="tab-1EKHYXW"><label for="tab-1EKHYXW">data.ts</label><input type="radio" name="group-_l8K7" id="tab-9rny5-u"><label for="tab-9rny5-u">config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { account, walletClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./config&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { domain, types } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { account, walletClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./config&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { domain, types } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account,</span></span>
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
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWalletClient, custom } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { privateKeyToAccount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">walletClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWalletClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">custom</span><span style="color:#E1E4E8;">(window.ethereum)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// JSON-RPC Account</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">getAddresses</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">// Local Account</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">privateKeyToAccount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWalletClient, custom } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { privateKeyToAccount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">walletClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWalletClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">custom</span><span style="color:#24292E;">(window.ethereum)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// JSON-RPC Account</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">account</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">getAddresses</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">// Local Account</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">privateKeyToAccount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x...&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></div></div><h3 id="account-hoisting" tabindex="-1">Account Hoisting <a class="header-anchor" href="#account-hoisting" aria-label="Permalink to &quot;Account Hoisting&quot;">​</a></h3><p>If you do not wish to pass an <code>account</code> to every <code>signTypedData</code>, you can also hoist the Account on the Wallet Client (see <code>config.ts</code>).</p><p><a href="/docs/clients/wallet.html#withaccount">Learn more</a>.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-7UGs5" id="tab-9BvIxDr" checked="checked"><label for="tab-9BvIxDr">example.ts</label><input type="radio" name="group-7UGs5" id="tab-sOwwn8O"><label for="tab-sOwwn8O">data.ts</label><input type="radio" name="group-7UGs5" id="tab-pF3RY3-"><label for="tab-pF3RY3-">config.ts (JSON-RPC Account)</label><input type="radio" name="group-7UGs5" id="tab-GXa-Hut"><label for="tab-GXa-Hut">config.ts (Local Account)</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { walletClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./config&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { domain, types } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { walletClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./config&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { domain, types } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./data&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
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
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWalletClient, custom } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Retrieve Account from an EIP-1193 Provider.</span></span>
<span class="line highlighted"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> window.ethereum.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({ </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&#39;eth_requestAccounts&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">walletClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWalletClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  account,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">custom</span><span style="color:#E1E4E8;">(window.ethereum)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWalletClient, custom } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Retrieve Account from an EIP-1193 Provider.</span></span>
<span class="line highlighted"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">account</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> window.ethereum.</span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">({ </span></span>
<span class="line highlighted"><span style="color:#24292E;">  method: </span><span style="color:#032F62;">&#39;eth_requestAccounts&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line highlighted"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">walletClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWalletClient</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">  account,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">custom</span><span style="color:#24292E;">(window.ethereum)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWalletClient, custom } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { privateKeyToAccount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/accounts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">walletClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWalletClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  account: </span><span style="color:#B392F0;">privateKeyToAccount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">custom</span><span style="color:#E1E4E8;">(window.ethereum)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWalletClient, custom } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { privateKeyToAccount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/accounts&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">walletClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWalletClient</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">  account: </span><span style="color:#6F42C1;">privateKeyToAccount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x...&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">custom</span><span style="color:#24292E;">(window.ethereum)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>0x\${string}</code></p><p>The signed data.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="account" tabindex="-1">account <a class="header-anchor" href="#account" aria-label="Permalink to &quot;account&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Account | Address</code></li></ul><p>The Account to use for signing.</p><p>Accepts a <a href="/docs/clients/wallet.html#json-rpc-accounts">JSON-RPC Account</a> or <a href="/docs/clients/wallet.html#local-accounts-private-key-mnemonic-etc">Local Account (Private Key, etc)</a>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  domain: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Ether Mail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    version: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    chainId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    verifyingContract: </span><span style="color:#9ECBFF;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  domain: {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Ether Mail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    version: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    chainId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    verifyingContract: </span><span style="color:#032F62;">&#39;0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="domain" tabindex="-1">domain <a class="header-anchor" href="#domain" aria-label="Permalink to &quot;domain&quot;">​</a></h3><p><strong>Type:</strong> <code>TypedDataDomain</code></p><p>The typed data domain.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="types" tabindex="-1">types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;types&quot;">​</a></h3><p>The type definitions for the typed data.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="primarytype" tabindex="-1">primaryType <a class="header-anchor" href="#primarytype" aria-label="Permalink to &quot;primaryType&quot;">​</a></h3><p><strong>Type:</strong> Inferred <code>string</code>.</p><p>The primary type to extract from <code>types</code> and use in <code>value</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><p><strong>Type:</strong> Inferred from <code>types</code> &amp; <code>primaryType</code>.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">signature</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> walletClient.</span><span style="color:#B392F0;">signTypedData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account: </span><span style="color:#9ECBFF;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#E1E4E8;">,</span></span>
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
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">signature</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> walletClient.</span><span style="color:#6F42C1;">signTypedData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account: </span><span style="color:#032F62;">&#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;</span><span style="color:#24292E;">,</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="live-example" tabindex="-1">Live Example <a class="header-anchor" href="#live-example" aria-label="Permalink to &quot;Live Example&quot;">​</a></h2><p>Check out the usage of <code>signTypedData</code> in the live <a href="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/signing_typed-data" target="_blank" rel="noreferrer">Sign Typed Data Example</a> below.</p>`,33),t=s("iframe",{frameborder:"0",width:"100%",height:"500px",src:"https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/signing_typed-data?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"},null,-1),r=s("h2",{id:"json-rpc-methods",tabindex:"-1"},[n("JSON-RPC Methods "),s("a",{class:"header-anchor",href:"#json-rpc-methods","aria-label":'Permalink to "JSON-RPC Methods"'},"​")],-1),E=s("ul",null,[s("li",null,[n("JSON-RPC Accounts: "),s("ul",null,[s("li",null,[s("a",{href:"https://docs.metamask.io/guide/signing-data.html#signtypeddata-v4",target:"_blank",rel:"noreferrer"},[s("code",null,"eth_signTypedData_v4")])])])]),s("li",null,[n("Local Accounts "),s("ul",null,[s("li",null,"Signs locally. No JSON-RPC request.")])])],-1),y=[c,t,r,E];function i(F,d,C,b,B,h){return p(),l("div",null,y)}const f=a(e,[["render",i]]);export{u as __pageData,f as default};
