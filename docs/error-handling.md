---
head:
  - - meta
    - property: og:title
      content: 错误处理
  - - meta
    - name: description
      content: 错误处理
  - - meta
    - property: og:description
      content: 错误处理
---

# 错误处理

viem中的每个模块都会导出一个附带的错误类型，你可以使用它来强类型化`catch`语句。

这些类型来自`<Module>ErrorType`，例如`getBlockNumber`方法导出一个`GetBlockNumberErrorType`类型。

不幸的是，[TypeScript没有针对类型异常的抽象](https://github.com/microsoft/TypeScript/issues/13219)，因此最实际和基本的方法是在catch语句中明确地进行错误类型转换。

::: code-group

```ts [example.ts] {1,7}
import { type GetBlockNumberErrorType } from 'viem'
import { publicClient } from './client'

try {
  const blockNumber = await client.getBlockNumber()
} catch (e) {
  const error = e as GetBlockNumberErrorType
  error.name
  //    ^? (property) name: "Error" | "ChainDisconnectedError" | "HttpRequestError" | "InternalRpcError" | "InvalidInputRpcError" | "InvalidParamsRpcError" | "InvalidRequestRpcError" | "JsonRpcVersionUnsupportedError" | ... 16 more ... | "WebSocketRequestError"

  if (error.name === 'InternalRpcError')
    error.code
    //    ^? (property) code: -32603

  if (error.name === 'HttpRequestError')
    error.headers
    //    ^? (property) headers: Headers
    error.status
    //    ^? (property) status: number
}
```

```ts [client.ts]
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})
```

:::
