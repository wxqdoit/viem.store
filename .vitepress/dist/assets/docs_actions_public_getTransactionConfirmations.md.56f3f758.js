import{_ as a,c as n,o,Q as l,k as s,a as p}from"./chunks/framework.a5052463.js";const C=JSON.parse('{"title":"getTransactionConfirmations","description":"Returns the number of blocks passed (confirmations) since the transaction was processed on a block.","frontmatter":{"head":[["meta",{"property":"og:title","content":"getTransactionConfirmations"}],["meta",{"name":"description","content":"Returns the number of blocks passed (confirmations) since the transaction was processed on a block."}],["meta",{"property":"og:description","content":"Returns the number of blocks passed (confirmations) since the transaction was processed on a block."}]]},"headers":[],"relativePath":"docs/actions/public/getTransactionConfirmations.md","filePath":"docs/actions/public/getTransactionConfirmations.md"}'),e={name:"docs/actions/public/getTransactionConfirmations.md"},t=l(`<h1 id="gettransactionconfirmations" tabindex="-1">getTransactionConfirmations <a class="header-anchor" href="#gettransactionconfirmations" aria-label="Permalink to &quot;getTransactionConfirmations&quot;">​</a></h1><p>Returns the number of blocks passed (confirmations) since the transaction was processed on a block.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TJWGu" id="tab-fH-II79" checked="checked"><label for="tab-fH-II79">example.ts</label><input type="radio" name="group-TJWGu" id="tab-3yQ0ejV"><label for="tab-3yQ0ejV">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transactionReceipt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionReceipt</span><span style="color:#E1E4E8;">({ hash: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">confirmations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionConfirmations</span><span style="color:#E1E4E8;">({  </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  transactionReceipt</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 15n</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transactionReceipt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getTransactionReceipt</span><span style="color:#24292E;">({ hash: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">confirmations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getTransactionConfirmations</span><span style="color:#24292E;">({  </span></span>
<span class="line has-focus"><span style="color:#24292E;">  transactionReceipt</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 15n</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><p>You can also fetch confirmations by Transaction hash:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-r-S5R" id="tab-jz4o5MM" checked="checked"><label for="tab-jz4o5MM">example.ts</label><input type="radio" name="group-r-S5R" id="tab-uofxRjz"><label for="tab-uofxRjz">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">confirmations</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionConfirmations</span><span style="color:#E1E4E8;">({  </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  hash: </span><span style="color:#9ECBFF;">&#39;0x...&#39;</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 15n</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">confirmations</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getTransactionConfirmations</span><span style="color:#24292E;">({  </span></span>
<span class="line has-focus"><span style="color:#24292E;">  hash: </span><span style="color:#032F62;">&#39;0x...&#39;</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span>
<span class="line has-focus"><span style="color:#6A737D;">// 15n</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mainnet } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">publicClient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPublicClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#E1E4E8;">  transport: </span><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPublicClient, http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mainnet } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem/chains&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">publicClient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPublicClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  chain: mainnet,</span></span>
<span class="line"><span style="color:#24292E;">  transport: </span><span style="color:#6F42C1;">http</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>bigint</code></p><p>The number of blocks passed since the transaction was processed. If confirmations is <code>0</code>, then the Transaction has not been confirmed &amp; processed yet.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="transactionreceipt" tabindex="-1">transactionReceipt <a class="header-anchor" href="#transactionreceipt" aria-label="Permalink to &quot;transactionReceipt&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#transactionreceipt"><code>TransactionReceipt</code></a></li></ul><p>The transaction receipt.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">balance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionConfirmations</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  transactionReceipt: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> }, </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">balance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getTransactionConfirmations</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  transactionReceipt: { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> }, </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h3><ul><li><strong>Type:</strong> <a href="/docs/glossary/types.html#hash"><code>Hash</code></a></li></ul><p>The hash of the transaction.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">balance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">getTransactionConfirmations</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  hash: </span><span style="color:#9ECBFF;">&#39;0x...&#39;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">balance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">getTransactionConfirmations</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus"><span style="color:#24292E;">  hash: </span><span style="color:#032F62;">&#39;0x...&#39;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Check out the usage of <code>getTransactionConfirmations</code> in the live <a href="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions_fetching-transactions" target="_blank" rel="noreferrer">Fetching Transactions Example</a> below.</p>`,20),c=s("iframe",{frameborder:"0",width:"100%",height:"500px",src:"https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions_fetching-transactions?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"},null,-1),r=s("h2",{id:"json-rpc-method",tabindex:"-1"},[p("JSON-RPC Method "),s("a",{class:"header-anchor",href:"#json-rpc-method","aria-label":'Permalink to "JSON-RPC Method"'},"​")],-1),i=s("p",null,[s("a",{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations",target:"_blank",rel:"noreferrer"},[s("code",null,"eth_getTransactionConfirmations")])],-1),y=[t,c,r,i];function E(h,d,u,m,b,f){return o(),n("div",null,y)}const F=a(e,[["render",E]]);export{C as __pageData,F as default};