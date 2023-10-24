import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.0fcaa977.js";const u=JSON.parse('{"title":"Hierarchical Deterministic (HD) Account","description":"A function to create a Hierarchical Deterministic (HD) Account.","frontmatter":{"head":[["meta",{"property":"og:title","content":"Hierarchical Deterministic (HD) Account"}],["meta",{"name":"description","content":"A function to create a Hierarchical Deterministic (HD) Account."}],["meta",{"property":"og:description","content":"A function to create a Hierarchical Deterministic (HD) Account."}]]},"headers":[],"relativePath":"docs/accounts/hd.md","filePath":"docs/accounts/hd.md"}'),l={name:"docs/accounts/hd.md"},e=o(`<h1 id="hierarchical-deterministic-hd-account" tabindex="-1">Hierarchical Deterministic (HD) Account <a class="header-anchor" href="#hierarchical-deterministic-hd-account" aria-label="Permalink to &quot;Hierarchical Deterministic (HD) Account&quot;">​</a></h1><p>A <a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#abstract" target="_blank" rel="noreferrer">Hierarchical Deterministic (HD)</a> Account is derived from a <a href="https://github.com/paulmillr/scure-bip32#usage" target="_blank" rel="noreferrer">HD Key</a> and an optional HD path.</p><p>It has the ability to sign transactions and messages with the private key derived from the HD Node.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>viem internally uses <a href="https://github.com/paulmillr/scure-bip32" target="_blank" rel="noreferrer"><code>@scure/bip32</code></a>, an <strong>audited</strong> implementation of <a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#abstract" target="_blank" rel="noreferrer">BIP-32 HD wallets</a>, for hierarchical deterministic (HD) wallet derivation.</p></div><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { HDKey, hdKeyToAccount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/accounts&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { HDKey, hdKeyToAccount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/accounts&#39;</span></span></code></pre></div><blockquote><p>Note: viem <a href="https://github.com/paulmillr/scure-bip32#usage" target="_blank" rel="noreferrer">re-exports <code>HDKey</code></a> from <code>@scure/bip32</code>.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>To initialize a HD Account, you will need to pass a <a href="https://github.com/paulmillr/scure-bip32#usage" target="_blank" rel="noreferrer"><code>HDKey</code> instance</a> to <code>hdKeyToAccount</code>.</p><p>The <code>HDKey</code> instance comes with a few static methods to derive a HD Key:</p><ul><li><code>fromMasterSeed</code></li><li><code>fromExtendedKey</code></li><li><code>fromJSON</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWalletClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { HDKey, hdKeyToAccount } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hdKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HDKey.</span><span style="color:#B392F0;">fromMasterSeed</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">) </span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hdKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HDKey.</span><span style="color:#B392F0;">fromExtendedKey</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">)</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hdKey</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> HDKey.</span><span style="color:#B392F0;">fromJSON</span><span style="color:#E1E4E8;">({ xpriv: </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hdKeyToAccount</span><span style="color:#E1E4E8;">(hdKey) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWalletClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  account,</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWalletClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { HDKey, hdKeyToAccount } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/accounts&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hdKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HDKey.</span><span style="color:#6F42C1;">fromMasterSeed</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">) </span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hdKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HDKey.</span><span style="color:#6F42C1;">fromExtendedKey</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">)</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hdKey</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> HDKey.</span><span style="color:#6F42C1;">fromJSON</span><span style="color:#24292E;">({ xpriv: </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hdKeyToAccount</span><span style="color:#24292E;">(hdKey) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWalletClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  account,</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="mnemonic" tabindex="-1">mnemonic <a class="header-anchor" href="#mnemonic" aria-label="Permalink to &quot;mnemonic&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>The BIP-39 mnemonic phrase.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mnemonicToAccount</span><span style="color:#E1E4E8;">(</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mnemonicToAccount</span><span style="color:#24292E;">(</span></span>
<span class="line has-focus"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="options-accountindex" tabindex="-1">options.accountIndex <a class="header-anchor" href="#options-accountindex" aria-label="Permalink to &quot;options.accountIndex&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>0</code></li></ul><p>The account index to use in the path (<code>&quot;m/44&#39;/60&#39;/\${accountIndex}&#39;/0/0&quot;</code>) to derive a private key.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mnemonicToAccount</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    accountIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mnemonicToAccount</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line has-focus"><span style="color:#24292E;">    accountIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="options-addressindex" tabindex="-1">options.addressIndex <a class="header-anchor" href="#options-addressindex" aria-label="Permalink to &quot;options.addressIndex&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>0</code></li></ul><p>The address index to use in the path (<code>&quot;m/44&#39;/60&#39;/0&#39;/0/\${addressIndex}&quot;</code>) to derive a private key.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mnemonicToAccount</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    accountIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    addressIndex: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mnemonicToAccount</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    accountIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    addressIndex: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="options-changeindex" tabindex="-1">options.changeIndex <a class="header-anchor" href="#options-changeindex" aria-label="Permalink to &quot;options.changeIndex&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>0</code></li></ul><p>The change index to use in the path (<code>&quot;m/44&#39;/60&#39;/0&#39;/\${changeIndex}/0&quot;</code>) to derive a private key.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mnemonicToAccount</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    accountIndex: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    addressIndex: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    changeIndex: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mnemonicToAccount</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    accountIndex: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    addressIndex: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    changeIndex: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="options-path" tabindex="-1">options.path <a class="header-anchor" href="#options-path" aria-label="Permalink to &quot;options.path&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&quot;m/44&#39;/60&#39;/\${string}&quot;</code></li></ul><p>The HD path to use to derive a private key.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">account</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">mnemonicToAccount</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    path: </span><span style="color:#9ECBFF;">&quot;m/44&#39;/60&#39;/5&#39;/0/2&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">account</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">mnemonicToAccount</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;legal winner thank year wave sausage worth useful legal winner thank yellow&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line has-focus"><span style="color:#24292E;">    path: </span><span style="color:#032F62;">&quot;m/44&#39;/60&#39;/5&#39;/0/2&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div>`,33),p=[e];function c(t,r,i,y,E,d){return n(),a("div",null,p)}const m=s(l,[["render",c]]);export{u as __pageData,m as default};
