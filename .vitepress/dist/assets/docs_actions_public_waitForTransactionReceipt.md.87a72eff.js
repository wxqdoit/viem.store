import{_ as a,c as n,o as e,Q as s,k as l}from"./chunks/framework.0fcaa977.js";const m=JSON.parse('{"title":"waitForTransactionReceipt","description":"Retrieves a Transaction Receipt for a given Transaction hash.","frontmatter":{"head":[["meta",{"property":"og:title","content":"waitForTransactionReceipt"}],["meta",{"name":"description","content":"Retrieves a Transaction Receipt for a given Transaction hash."}],["meta",{"property":"og:description","content":"Retrieves a Transaction Receipt for a given Transaction hash."}]]},"headers":[],"relativePath":"docs/actions/public/waitForTransactionReceipt.md","filePath":"docs/actions/public/waitForTransactionReceipt.md"}'),o={name:"docs/actions/public/waitForTransactionReceipt.md"},p=s(`<h1 id="waitfortransactionreceipt" tabindex="-1">waitForTransactionReceipt <a class="header-anchor" href="#waitfortransactionreceipt" aria-label="Permalink to &quot;waitForTransactionReceipt&quot;">​</a></h1><p>Waits for the <a href="/docs/glossary/terms.html#transaction">Transaction</a> to be included on a <a href="/docs/glossary/terms.html#block">Block</a> (one confirmation), and then returns the <a href="/docs/glossary/terms.html#transaction-receipt">Transaction Receipt</a>. If the Transaction reverts, then the action will throw an error.</p><p>The <code>waitForTransactionReceipt</code> action additionally supports Replacement detection (e.g. sped up Transactions).</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-LEu7C" id="tab-wl3GuLf" checked="checked"><label for="tab-wl3GuLf">example.ts</label><input type="radio" name="group-LEu7C" id="tab-cTtCB_g"><label for="tab-cTtCB_g">client.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { publicClient } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">waitForTransactionReceipt</span><span style="color:#E1E4E8;">( </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  { hash: </span><span style="color:#9ECBFF;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">)</span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  blockHash: &#39;0xaf1dadb8a98f1282e8f7b42cc3da8847bfa2cf4e227b8220403ae642e1173088&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  blockNumber: 15132008n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  from: &#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  status: &#39;success&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { publicClient } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./client&#39;</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">waitForTransactionReceipt</span><span style="color:#24292E;">( </span></span>
<span class="line has-focus"><span style="color:#24292E;">  { hash: </span><span style="color:#032F62;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line has-focus"><span style="color:#24292E;">)</span></span>
<span class="line has-focus"><span style="color:#6A737D;">/**</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * {</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  blockHash: &#39;0xaf1dadb8a98f1282e8f7b42cc3da8847bfa2cf4e227b8220403ae642e1173088&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  blockNumber: 15132008n,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  from: &#39;0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  ...</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> *  status: &#39;success&#39;,</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> * }</span></span>
<span class="line has-focus"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPublicClient, http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
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
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><a href="/docs/glossary/types.html#transactionreceipt"><code>TransactionReceipt</code></a></p><p>The transaction receipt.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="confirmations-optional" tabindex="-1">confirmations (optional) <a class="header-anchor" href="#confirmations-optional" aria-label="Permalink to &quot;confirmations (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li><li><strong>Default:</strong> <code>1</code></li></ul><p>The number of confirmations (blocks that have passed) to wait before resolving.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">waitForTransactionReceipt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    confirmations: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    hash: </span><span style="color:#9ECBFF;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">waitForTransactionReceipt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line has-focus"><span style="color:#24292E;">    confirmations: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    hash: </span><span style="color:#032F62;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="onreplaced-optional" tabindex="-1">onReplaced (optional) <a class="header-anchor" href="#onreplaced-optional" aria-label="Permalink to &quot;onReplaced (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>({ reason: &#39;replaced&#39; | &#39;repriced&#39; | &#39;cancelled&#39;, replacedTransaction: Transaction, transaction: Transaction, transactionReceipt: TransactionReceipt }) =&gt; void</code></li></ul><p>Optional callback to emit if the transaction has been replaced.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">waitForTransactionReceipt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    hash: </span><span style="color:#9ECBFF;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onReplaced</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">replacement</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(replacement) </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">waitForTransactionReceipt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    hash: </span><span style="color:#032F62;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onReplaced</span><span style="color:#24292E;">: </span><span style="color:#E36209;">replacement</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(replacement) </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="pollinginterval-optional" tabindex="-1">pollingInterval (optional) <a class="header-anchor" href="#pollinginterval-optional" aria-label="Permalink to &quot;pollingInterval (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Polling frequency (in ms). Defaults to the Client&#39;s <code>pollingInterval</code> config.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">waitForTransactionReceipt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    hash: </span><span style="color:#9ECBFF;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    pollingInterval: </span><span style="color:#79B8FF;">12_000</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">waitForTransactionReceipt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    hash: </span><span style="color:#032F62;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    pollingInterval: </span><span style="color:#005CC5;">12_000</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="timeout-optional" tabindex="-1">timeout (optional) <a class="header-anchor" href="#timeout-optional" aria-label="Permalink to &quot;timeout (optional)&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>number</code></li></ul><p>Optional timeout (in milliseconds) to wait before stopping polling.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> publicClient.</span><span style="color:#B392F0;">waitForTransactionReceipt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { </span></span>
<span class="line"><span style="color:#E1E4E8;">    hash: </span><span style="color:#9ECBFF;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    timeout: </span><span style="color:#79B8FF;">60_000</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> publicClient.</span><span style="color:#6F42C1;">waitForTransactionReceipt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { </span></span>
<span class="line"><span style="color:#24292E;">    hash: </span><span style="color:#032F62;">&#39;0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus"><span style="color:#24292E;">    timeout: </span><span style="color:#005CC5;">60_000</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h3><ul><li>Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.</li><li>There are 3 types of Transaction Replacement reasons: <ul><li><code>repriced</code>: The gas price has been modified (ie. different <code>maxFeePerGas</code>)</li><li><code>cancelled</code>: The Transaction has been cancelled (ie. <code>value === 0n</code>)</li><li><code>replaced</code>: The Transaction has been replaced (ie. different <code>value</code> or <code>data</code>)</li></ul></li></ul><h2 id="live-example" tabindex="-1">Live Example <a class="header-anchor" href="#live-example" aria-label="Permalink to &quot;Live Example&quot;">​</a></h2><p>Check out the usage of <code>waitForTransactionReceipt</code> in the live <a href="https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions_sending-transactions" target="_blank" rel="noreferrer">Sending Transactions Example</a> below.</p>`,29),t=l("iframe",{frameborder:"0",width:"100%",height:"500px",src:"https://stackblitz.com/github/wagmi-dev/viem/tree/main/examples/transactions_sending-transactions?embed=1&file=index.ts&hideNavigation=1&hideDevTools=true&terminalHeight=0&ctl=1"},null,-1),c=s('<h2 id="json-rpc-methods" tabindex="-1">JSON-RPC Methods <a class="header-anchor" href="#json-rpc-methods" aria-label="Permalink to &quot;JSON-RPC Methods&quot;">​</a></h2><ul><li>Polls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt" target="_blank" rel="noreferrer"><code>eth_getTransactionReceipt</code></a> on each block until it has been processed.</li><li>If a Transaction has been replaced: <ul><li>Calls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber" target="_blank" rel="noreferrer"><code>eth_getBlockByNumber</code></a> and extracts the transactions</li><li>Checks if one of the Transactions is a replacement</li><li>If so, calls <a href="https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt" target="_blank" rel="noreferrer"><code>eth_getTransactionReceipt</code></a>.</li></ul></li></ul>',2),r=[p,t,c];function i(d,E,y,h,u,f){return e(),n("div",null,r)}const g=a(o,[["render",i]]);export{m as __pageData,g as default};
