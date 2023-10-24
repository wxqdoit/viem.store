---
head:
  - - meta
    - property: og:title
      content: 平台适配
  - - meta
    - name: description
      content: viem中的平台适配。
  - - meta
    - property: og:description
      content: viem中的平台适配。
---

# 平台适配

**viem支持所有现代化的浏览器（Chrome，Edge，Firefox，等等）和运行环境（Node 18+，Deno，Bun，等等）。**

viem使用如下的现代化的ECMAScript特性:

- [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Error [`cause`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
- TextEncoder [`encode`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode)

你可以检查这些特性的支持情况[Can I use...](https://caniuse.com/)

## 兼容性补丁

如果你的平台不支持下面的特性之一，也可能需要引入一个兼容性补丁。

### `fetch`

- [isomorphic-unfetch](https://github.com/developit/unfetch/tree/main/packages/isomorphic-unfetch)
- [node-fetch](https://github.com/node-fetch/node-fetch#providing-global-access)

### Error `cause`

- [core-js](https://github.com/zloirock/core-js)

### `TextEncoder`
- [FastestSmallestTextEncoderDecoder](https://github.com/anonyco/FastestSmallestTextEncoderDecoder)
