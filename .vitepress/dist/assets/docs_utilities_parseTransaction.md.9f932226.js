import{_ as a,c as s,o as e,Q as n}from"./chunks/framework.a5052463.js";const E=JSON.parse('{"title":"parseTransaction","description":"Converts a serialized transaction to a structured transaction.","frontmatter":{"head":[["meta",{"property":"og:title","content":"parseTransaction"}],["meta",{"name":"description","content":"Converts a serialized transaction to a structured transaction."}],["meta",{"property":"og:description","content":"Converts a serialized transaction to a structured transaction."}]]},"headers":[],"relativePath":"docs/utilities/parseTransaction.md","filePath":"docs/utilities/parseTransaction.md"}'),t={name:"docs/utilities/parseTransaction.md"},o=n(`<h1 id="parsetransaction" tabindex="-1">parseTransaction <a class="header-anchor" href="#parsetransaction" aria-label="Permalink to &quot;parseTransaction&quot;">​</a></h1><p>Parses a serialized RLP-encoded transaction. Supports signed &amp; unsigned EIP-1559, EIP-2930 and Legacy Transactions.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseTransaction } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseTransaction } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseTransaction } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transaction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseTransaction</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0x02ef0182031184773594008477359400809470997970c51812dc3a010c7d01b50e0d17dc79c8880de0b6b3a764000080c0&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseTransaction } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;viem&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transaction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseTransaction</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0x02ef0182031184773594008477359400809470997970c51812dc3a010c7d01b50e0d17dc79c8880de0b6b3a764000080c0&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>TransactionSerializable</code></p><p>The parsed transaction object.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><h3 id="serializedtransaction" tabindex="-1">serializedTransaction <a class="header-anchor" href="#serializedtransaction" aria-label="Permalink to &quot;serializedTransaction&quot;">​</a></h3><ul><li><strong>Type:</strong> <code>Hex</code></li></ul><p>The serialized transaction.</p>`,13),r=[o];function p(c,l,i,d,h,y){return e(),s("div",null,r)}const m=a(t,[["render",p]]);export{E as __pageData,m as default};