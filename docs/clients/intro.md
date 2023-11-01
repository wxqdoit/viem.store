---
head:
  - - meta
    - property: og:title
      content: 客户端和传输方式的简短介绍
  - - meta
    - name: description
      content: 客户端和传输方式的简短介绍
  - - meta
    - property: og:description
      content: 客户端和传输方式的简短介绍

---

# 客户端和传输方式介绍

## Client

**客户端** 提供对子集 **操作**的访问。 

>viem上下文中的**客户端**与[Ethers.js Provider](https://docs.ethers.org/v5/api/providers/)类似。

viem中有三种类型的**客户端**：

- [Public Client](/docs/clients/public) 提供[公共操作](/docs/actions/public/introduction)权限, 例如 `getBlockNumber` 和 `getBalance`。
- [Wallet Client](/docs/clients/wallet) 提供[钱包操作](/docs/actions/wallet/introduction)权限, 例如 `sendTransaction` 和 `signMessage`。
- [Test Client](/docs/clients/test) 提供[测试操作](/docs/actions/test/introduction)权限, 例如 `mine` 和 `impersonate`。

## Transport

**Client** 使用 **Transport** 进行实例化，它是负责执行传出请求（即 RPC 请求）的中间层。

在viem中有三种传输方式：

- [HTTP Transport](/docs/clients/transports/http)，通过HTTP JSON-RPC API执行请求。
- [WebSocket Transport](/docs/clients/transports/websocket) 通过WebSocket JSON-RPC API执行请求。
- [Custom Transport](/docs/clients/transports/custom) 通过[EIP-1193 `request` 函数](https://eips.ethereum.org/EIPS/eip-1193)执行请求。
