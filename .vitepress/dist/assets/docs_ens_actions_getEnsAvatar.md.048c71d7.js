import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.a5052463.js";const u=JSON.parse('{"title":"getEnsAvatar","description":"Gets the avatar of an ENS name.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getEnsAvatar"}],["meta",{"name":"description","content":"Gets the avatar of an ENS name."}],["meta",{"property":"og:description","content":"Gets the avatar of an ENS name."}]]},"headers":[],"relativePath":"docs/ens/actions/getEnsAvatar.md","filePath":"docs/ens/actions/getEnsAvatar.md"}'),e={name:"docs/ens/actions/getEnsAvatar.md"},o=l(`<h1 id="getensavatar" tabindex="-1">getEnsAvatar <a class="header-anchor" href="#getensavatar" aria-label="Permalink to &quot;getEnsAvatar&quot;">​</a></h1><p>Gets the avatar of an ENS name.</p><p>Calls <a href="/docs/ens/actions/getEnsText.html"><code>getEnsText</code></a> with <code>key</code> set to <code>&#39;avatar&#39;</code>.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-1R8Lz" id="tab-ijBQsen" checked="checked"><label for="tab-ijBQsen">example.ts</label><input type="radio" name="group-1R8Lz" id="tab-zhNiu95"><label for="tab-zhNiu95">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { normalize } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/ens&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { normalize } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/ens&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// &#39;https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to <a href="https://docs.ens.domains/contract-api-reference/name-processing#normalising-names" target="_blank" rel="noreferrer">normalize ENS names</a> with <a href="https://unicode.org/reports/tr46" target="_blank" rel="noreferrer">UTS-46 normalization</a> before passing them to <code>getEnsAddress</code>. You can use the built-in <a href="/docs/ens/utilities/normalize.html"><code>normalize</code></a> function for this.</p></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>string | null</code></p><p>The avatar URI for ENS name.</p><p>Returns <code>null</code> if the avatar cannot be resolved from the ENS name.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>ENS name to get Text for.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">), </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">), </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocknumber-optional" tabindex="-1">blockNumber (optional) <a class="header-anchor" href="#blocknumber-optional" aria-label="Permalink to &quot;blockNumber (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>The block number to perform the read against.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockNumber: </span><span style="color:#79B8FF;">15121123</span><span style="color:#F97583;">n</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockNumber: </span><span style="color:#005CC5;">15121123</span><span style="color:#D73A49;">n</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="blocktag-optional" tabindex="-1">blockTag (optional) <a class="header-anchor" href="#blocktag-optional" aria-label="Permalink to &quot;blockTag (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>&#39;latest&#39; | &#39;earliest&#39; | &#39;pending&#39; | &#39;safe&#39; | &#39;finalized&#39;</code></li><li><strong>Default:</strong> <code>&#39;latest&#39;</code></li></ul><p>The block tag to perform the read against.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  blockTag: </span><span style="color:#9ECBFF;">&#39;safe&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  blockTag: </span><span style="color:#032F62;">&#39;safe&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="gatewayurls" tabindex="-1">gatewayUrls <a class="header-anchor" href="#gatewayurls" aria-label="Permalink to &quot;gatewayUrls&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>{ ipfs?: string; arweave?: string }</code></li></ul><p>Gateway urls to resolve IPFS and/or Arweave assets.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  gatewayUrls: { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    ipfs: </span><span style="color:#9ECBFF;">&#39;https://cloudflare-ipfs.com&#39;</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  gatewayUrls: { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    ipfs: </span><span style="color:#032F62;">&#39;https://cloudflare-ipfs.com&#39;</span></span>
<span class="line has-focus"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="universalresolveraddress-optional" tabindex="-1">universalResolverAddress (optional) <a class="header-anchor" href="#universalresolveraddress-optional" aria-label="Permalink to &quot;universalResolverAddress (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#address"><code>Address</code></a></li><li><strong>Default:</strong> <code>client.chain.contracts.ensUniversalResolver.address</code></li></ul><p>Address of ENS Universal Resolver Contract.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ensText</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getEnsAvatar</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#B392F0;">normalize</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;wagmi-dev.eth&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  universalResolverAddress: </span><span style="color:#9ECBFF;">&#39;0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ensText</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getEnsAvatar</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#6F42C1;">normalize</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;wagmi-dev.eth&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line has-focus"><span style="color:#24292E;">  universalResolverAddress: </span><span style="color:#032F62;">&#39;0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,31),p=[o];function t(c,r,i,E,y,d){return n(),a("div",null,p)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};