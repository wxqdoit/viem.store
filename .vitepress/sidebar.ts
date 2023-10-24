import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  '/docs/': [
    {
      text: '介绍',
      items: [
        { text: '为什么使用viem', link: '/docs/introduction' },
        { text: '开始使用', link: '/docs/getting-started' },
        { text: '迁移指南', link: '/docs/migration-guide' },
        { text: 'EthersV5迁移到viem', link: '/docs/ethers-migration' },
        { text: 'TypeScript', link: '/docs/typescript' },
        { text: '错误处理', link: '/docs/error-handling' },
        { text: '平台适配', link: '/docs/compatibility' },
        { text: '常见问题', link: '/docs/faq' },
      ],
    },
    {
      text: '客户端与传输方式',
      items: [
        { text: '介绍', link: '/docs/clients/intro' },
        { text: '公共客户端', link: '/docs/clients/public' },
        { text: '钱包客户端', link: '/docs/clients/wallet' },
        { text: '测试客户端', link: '/docs/clients/test' },
        { text: '创建自定义客户端', link: '/docs/clients/custom' },
        {
          text: '传输方式',
          items: [
            {
              text: 'HTTP',
              link: '/docs/clients/transports/http',
            },
            {
              text: 'WebSocket',
              link: '/docs/clients/transports/websocket',
            },
            {
              text: '自定义传输 (EIP-1193)',
              link: '/docs/clients/transports/custom',
            },
            {
              text: '备用传输',
              link: '/docs/clients/transports/fallback',
            },
          ],
        },
        { text: '链', link: '/docs/clients/chains' },
      ],
    },
    {
      text: '公共操作',
      collapsed: true,
      items: [
        { text: '介绍', link: '/docs/actions/public/introduction' },
        {
          text: '账户',
          items: [
            {
              text: '获取余额',
              link: '/docs/actions/public/getBalance',
            },
            {
              text: '获取交易数',
              link: '/docs/actions/public/getTransactionCount',
            },
          ],
        },
        {
          text: '区块',
          items: [
            { text: '获取区块', link: '/docs/actions/public/getBlock' },
            {
              text: '获取区块号',
              link: '/docs/actions/public/getBlockNumber',
            },
            {
              text: '获取区块里的交易数',
              link: '/docs/actions/public/getBlockTransactionCount',
            },
            {
              text: '监听区块号',
              link: '/docs/actions/public/watchBlockNumber',
            },
            {
              text: '监听区块',
              link: '/docs/actions/public/watchBlocks',
            },
          ],
        },
        {
          text: '链',
          items: [
            { text: '获取链ID', link: '/docs/actions/public/getChainId' },
          ],
        },
        {
          text: '费用',
          items: [
            {
              text: '预估每项Gas费用',
              link: '/docs/actions/public/estimateFeesPerGas',
            },
            {
              text: '预估Gas',
              link: '/docs/actions/public/estimateGas',
            },
            {
              text: '预估每项Gas的最大优先费用',
              link: '/docs/actions/public/estimateMaxPriorityFeePerGas',
            },
            {
              text: '获取费用历史记录',
              link: '/docs/actions/public/getFeeHistory',
            },
            {
              text: '获取Gas的价格',
              link: '/docs/actions/public/getGasPrice',
            },
          ],
        },
        {
          text: '过滤和日志',
          items: [
            {
              text: '创建区块过滤',
              link: '/docs/actions/public/createBlockFilter',
            },
            {
              text: '创建事件过滤',
              link: '/docs/actions/public/createEventFilter',
            },
            {
              text: '创建待处理交易过滤',
              link: '/docs/actions/public/createPendingTransactionFilter',
            },
            {
              text: '获取过滤器的更改记录',
              link: '/docs/actions/public/getFilterChanges',
            },
            {
              text: '获取过滤日志',
              link: '/docs/actions/public/getFilterLogs',
            },
            {
              text: '获取日志',
              link: '/docs/actions/public/getLogs',
            },
            {
              text: '监听时间',
              link: '/docs/actions/public/watchEvent',
            },
            {
              text: '卸载过滤器',
              link: '/docs/actions/public/uninstallFilter',
            },
          ],
        },
        {
          text: '证明',
          items: [
            {
              text: '获取Proof',
              link: '/docs/actions/public/getProof',
            },
          ],
        },
        {
          text: '签名',
          items: [
            {
              text: '验证消息',
              link: '/docs/actions/public/verifyMessage',
            },
            {
              text: '验证类型化数据',
              link: '/docs/actions/public/verifyTypedData',
            },
          ],
        },
        {
          text: '交易',
          items: [
            { text: '调用call', link: '/docs/actions/public/call' },
            {
              text: '准备交易请求',
              link: '/docs/actions/wallet/prepareTransactionRequest',
            },
            {
              text: '获取交易',
              link: '/docs/actions/public/getTransaction',
            },
            {
              text: '获取交易确认',
              link: '/docs/actions/public/getTransactionConfirmations',
            },
            {
              text: '获取交易收据',
              link: '/docs/actions/public/getTransactionReceipt',
            },
            {
              text: '发送已签名交易到网路',
              link: '/docs/actions/wallet/sendRawTransaction',
            },
            {
              text: '等待交易收据返回',
              link: '/docs/actions/public/waitForTransactionReceipt',
            },
            {
              text: '监听处理中的交易',
              link: '/docs/actions/public/watchPendingTransactions',
            },
          ],
        },
      ],
    },
    {
      text: '钱包操作',
      collapsed: true,
      items: [
        { text: '介绍', link: '/docs/actions/wallet/introduction' },
        {
          text: '账户',
          items: [
            {
              text: '获取地址',
              link: '/docs/actions/wallet/getAddresses',
            },
            {
              text: '请求地址',
              link: '/docs/actions/wallet/requestAddresses',
            },
          ],
        },
        {
          text: '资产',
          items: [
            {
              text: '监听资产',
              link: '/docs/actions/wallet/watchAsset',
            },
          ],
        },
        {
          text: '链',
          items: [
            {
              text: '添加链',
              link: '/docs/actions/wallet/addChain',
            },
            {
              text: '切换链',
              link: '/docs/actions/wallet/switchChain',
            },
          ],
        },
        {
          text: '数据',
          items: [
            {
              text: '签名消息',
              link: '/docs/actions/wallet/signMessage',
            },
            {
                text: '签名类型化消息',
              link: '/docs/actions/wallet/signTypedData',
            },
          ],
        },
        {
          text: '权限',
          items: [
            {
              text: '获取钱包权限',
              link: '/docs/actions/wallet/getPermissions',
            },
            {
              text: '请求权限',
              link: '/docs/actions/wallet/requestPermissions',
            },
          ],
        },
        {
          text: '交易',
          items: [
            {
              text: '准备交易请求',
              link: '/docs/actions/wallet/prepareTransactionRequest',
            },
            {
              text: '发送已签名交易到网路',
              link: '/docs/actions/wallet/sendRawTransaction',
            },
            {
              text: '发送交易',
              link: '/docs/actions/wallet/sendTransaction',
            },
            {
              text: '交易签名',
              link: '/docs/actions/wallet/signTransaction',
            },
          ],
        },
      ],
    },
    {
      text: '测试操作',
      collapsed: true,
      items: [
        { text: '介绍', link: '/docs/actions/test/introduction' },
        {
          text: '账户',
          items: [
            {
              text: '虚假账户',
              link: '/docs/actions/test/impersonateAccount',
            },
            { text: '设置余额', link: '/docs/actions/test/setBalance' },
            { text: '设置字节码', link: '/docs/actions/test/setCode' },
            { text: '设置Nonce', link: '/docs/actions/test/setNonce' },
            {
              text: '设置账户存储到某个位置',
              link: '/docs/actions/test/setStorageAt',
            },
            {
              text: '停止虚假账号',
              link: '/docs/actions/test/stopImpersonatingAccount',
            },
          ],
        },
        {
          text: '区块',
          items: [
            { text: '获取自动挖矿状态', link: '/docs/actions/test/getAutomine' },
            {
              text: '增加时间',
              link: '/docs/actions/test/increaseTime',
            },
            { text: '挖矿', link: '/docs/actions/test/mine' },
            {
              text: '删除块时间戳间隔',
              link: '/docs/actions/test/removeBlockTimestampInterval',
            },
            { text: '设置自动挖矿', link: '/docs/actions/test/setAutomine' },
            {
              text: '设置间隔挖矿',
              link: '/docs/actions/test/setIntervalMining',
            },
            {
              text: '设置时间戳间隔',
              link: '/docs/actions/test/setBlockTimestampInterval',
            },
            {
              text: '设置区块gas限制',
              link: '/docs/actions/test/setBlockGasLimit',
            },
            {
              text: '设置下个区块每Gas基本费用',
              link: '/docs/actions/test/setNextBlockBaseFeePerGas',
            },
            {
              text: '设置下一个区块的时间戳',
              link: '/docs/actions/test/setNextBlockTimestamp',
            },
          ],
        },
        {
          text: '节点',
          items: [
            { text: '设置Coinbase地址', link: '/docs/actions/test/setCoinbase' },
            {
              text: '设置最小Gas价格',
              link: '/docs/actions/test/setMinGasPrice',
            },
          ],
        },
        {
          text: '设置',
          items: [
            { text: '重置', link: '/docs/actions/test/reset' },
            {
              text: '设置启用日志记录',
              link: '/docs/actions/test/setLoggingEnabled',
            },
            { text: '设置RpcUrl', link: '/docs/actions/test/setRpcUrl' },
          ],
        },
        {
          text: '状态',
          items: [
            { text: '恢复', link: '/docs/actions/test/revert' },
            { text: '快照', link: '/docs/actions/test/snapshot' },
          ],
        },
        {
          text: '交易',
          items: [
            {
              text: '删除交易',
              link: '/docs/actions/test/dropTransaction',
            },
            {
              text: '获取Tx池内容',
              link: '/docs/actions/test/getTxpoolContent',
            },
            {
              text: '获取Tx池状态',
              link: '/docs/actions/test/getTxpoolStatus',
            },
            {
              text: '检查Tx池',
              link: '/docs/actions/test/inspectTxpool',
            },
            {
              text: '发送未签名消息',
              link: '/docs/actions/test/sendUnsignedTransaction',
            },
          ],
        },
      ],
    },
    {
      text: '账户',
      collapsed: true,
      items: [
        { text: 'JSON-RPC', link: '/docs/accounts/jsonRpc' },
        {
          text: '本地账户',
          link: '/docs/accounts/local',
          items: [
            { text: '私钥账户', link: '/docs/accounts/privateKey' },
            { text: '助记词账户', link: '/docs/accounts/mnemonic' },
            {
              text: '分层确定性(HD)账户',
              link: '/docs/accounts/hd',
            },
            { text: '自定义账户', link: '/docs/accounts/custom' },
            { text: '消息签名', link: '/docs/accounts/signMessage' },
            { text: '交易签名', link: '/docs/accounts/signTransaction' },
            { text: '类型化数据签名', link: '/docs/accounts/signTypedData' },
          ],
        },
      ],
    },
    {
      text: '合约',
      collapsed: true,
      items: [
        {
          text: '合约实例',
          link: '/docs/contract/getContract',
        },
        {
          text: '方法',
          items: [
            {
              text: '创建合约事件过滤器',
              link: '/docs/contract/createContractEventFilter',
            },
            {
              text: '部署合约',
              link: '/docs/contract/deployContract',
            },
            {
              text: '预估合约Gas',
              link: '/docs/contract/estimateContractGas',
            },
            {
              text: '获取字节码',
              link: '/docs/contract/getBytecode',
            },
            {
              text: '获取合约事件',
              link: '/docs/contract/getContractEvents',
            },
            {
              text: '获取合约存储位置',
              link: '/docs/contract/getStorageAt',
            },
            {
              text: 'Multicall(多调用)',
              link: '/docs/contract/multicall',
            },
            {
              text: '读合约',
              link: '/docs/contract/readContract',
            },
            {
              text: '模拟合约',
              link: '/docs/contract/simulateContract',
            },
            {
              text: '写合约',
              link: '/docs/contract/writeContract',
            },
            {
              text: '监听合约事件',
              link: '/docs/contract/watchContractEvent',
            },
          ],
        },
        {
          text: '编码',
          items: [
            {
              text: '部署数据解码',
              link: '/docs/contract/decodeDeployData',
            },
            {
              text: '报错结果解码',
              link: '/docs/contract/decodeErrorResult',
            },
            {
              text: '事件日志解码',
              link: '/docs/contract/decodeEventLog',
            },
            {
              text: '函数数据解码',
              link: '/docs/contract/decodeFunctionData',
            },
            {
              text: '函数结果解码',
              link: '/docs/contract/decodeFunctionResult',
            },
            {
              text: '部署数据编码',
              link: '/docs/contract/encodeDeployData',
            },
            {
              text: '报错结果编码',
              link: '/docs/contract/encodeErrorResult',
            },
            {
              text: '事件主题编码',
              link: '/docs/contract/encodeEventTopics',
            },
            {
              text: '函数数据编码',
              link: '/docs/contract/encodeFunctionData',
            },
            {
              text: '函数结果编码',
              link: '/docs/contract/encodeFunctionResult',
            },
          ],
        },
      ],
    },
    {
      text: 'ENS(以太坊域名服务)',
      collapsed: true,
      items: [
        {
          text: '方法',
          items: [
            {
              text: '获取Ens地址',
              link: '/docs/ens/actions/getEnsAddress',
            },
            {
              text: '获取ENS头像',
              link: '/docs/ens/actions/getEnsAvatar',
            },
            { text: '获取Ens名字', link: '/docs/ens/actions/getEnsName' },
            {
              text: '获取Ens解析器',
              link: '/docs/ens/actions/getEnsResolver',
            },
            {
              text: '获取Ens文本',
              link: '/docs/ens/actions/getEnsText',
            },
          ],
        },
        {
          text: '公共事业（服务）',
          items: [
            { text: '标签哈希', link: '/docs/ens/utilities/labelhash' },
            { text: '名字哈希', link: '/docs/ens/utilities/namehash' },

            { text: '正常化', link: '/docs/ens/utilities/normalize' },
          ],
        },
      ],
    },
    {
      text: 'ABI(应用程序二进制接口)',
      collapsed: true,
      items: [
        {
          text: '解码Abi参数',
          link: '/docs/abi/decodeAbiParameters',
        },
        {
          text: '编码Abi参数',
          link: '/docs/abi/encodeAbiParameters',
        },
        {
          text: '编码打包',
          link: '/docs/abi/encodePacked',
        },
        {
          text: '获取Abi数据项',
          link: '/docs/abi/getAbiItem',
        },
        {
          text: '解析Abi',
          link: '/docs/abi/parseAbi',
        },
        {
          text: '获取Abi数据项',
          link: '/docs/abi/parseAbiItem',
        },
        {
          text: '解析Abi参数',
          link: '/docs/abi/parseAbiParameter',
        },
        {
          text: '解析Abi多参数',
          link: '/docs/abi/parseAbiParameters',
        },
      ],
    },
    {
      text: '公共服务',
      collapsed: true,
      items: [
        {
          text: '地址',
          items: [
            {
              text: '获取地址',
              link: '/docs/utilities/getAddress',
            },
            {
              text: '获取合约地址',
              link: '/docs/utilities/getContractAddress',
            },
            {
              text: '判断是否为地址',
              link: '/docs/utilities/isAddress',
            },
            {
              text: '判断两地址是否相等',
              link: '/docs/utilities/isAddressEqual',
            },
          ],
        },
        {
          text: '数据',
          items: [
            {
              text: '连接数据',
              link: '/docs/utilities/concat',
            },
            {
              text: '判断是否为字节',
              link: '/docs/utilities/isBytes',
            },
            {
              text: '判读是否为16进制',
              link: '/docs/utilities/isHex',
            },
            {
              text: '填充(16进制数据或字节数组)',
              link: '/docs/utilities/pad',
            },
            {
              text: '截取(16进制数据或字节数组)',
              link: '/docs/utilities/slice',
            },
            {
              text: '获取长度',
              link: '/docs/utilities/size',
            },
            {
              text: '去除(0)',
              link: '/docs/utilities/trim',
            },
          ],
        },
        {
          text: '编码',
          items: [
            {
              text: '字节解码',
              link: '/docs/utilities/fromBytes',
            },
            {
              text: '16进制解码',
              link: '/docs/utilities/fromHex',
            },
            {
              text: 'Rlp解码',
              link: '/docs/utilities/fromRlp',
            },
            {
              text: '转为字节',
              link: '/docs/utilities/toBytes',
            },
            {
              text: '转为16进制',
              link: '/docs/utilities/toHex',
            },
            {
              text: '转为Rlp',
              link: '/docs/utilities/toRlp',
            },
          ],
        },
        {
          text: '哈希',
          items: [
            {
              text: '获取事件按选择器',
              link: '/docs/utilities/getEventSelector',
            },
            {
              text: '获取事件签名',
              link: '/docs/utilities/getEventSignature',
            },
            {
              text: '获取函数选择器',
              link: '/docs/utilities/getFunctionSelector',
            },
            {
              text: '获取函数签名',
              link: '/docs/utilities/getFunctionSignature',
            },
            {
              text: 'keccak256',
              link: '/docs/utilities/keccak256',
            },
          ],
        },
        {
          text: '签名',
          items: [
            {
              text: '紧凑签名到十六进制',
              link: '/docs/utilities/compactSignatureToHex',
            },
            {
              text: '紧凑签名到签名',
              link: '/docs/utilities/compactSignatureToSignature',
            },
            {
              text: '哈希化消息',
              link: '/docs/utilities/hashMessage',
            },
            {
              text: '哈希化类型消息',
              link: '/docs/utilities/hashTypedData',
            },
            {
              text: '十六进制转紧凑签名',
              link: '/docs/utilities/hexToCompactSignature',
            },
            {
              text: '十六进制转签名',
              link: '/docs/utilities/hexToSignature',
            },
            {
              text: '恢复地址',
              link: '/docs/utilities/recoverAddress',
            },
            {
              text: '恢复消息地址',
              link: '/docs/utilities/recoverMessageAddress',
            },
            {
              text: '恢复公钥',
              link: '/docs/utilities/recoverPublicKey',
            },
            {
              text: '恢复类型化数据地址',
              link: '/docs/utilities/recoverTypedDataAddress',
            },
            {
              text: '将签名转为紧凑型签名',
              link: '/docs/utilities/signatureToCompactSignature',
            },
            {
              text: '签名转十六进制',
              link: '/docs/utilities/signatureToHex',
            },
            {
              text: '严重消息',
              link: '/docs/utilities/verifyMessage',
            },
            {
              text: '严重类型化消息',
              link: '/docs/utilities/verifyTypedData',
            },
          ],
        },
        {
          text: '交易',
          items: [
            {
              text: '解析交易',
              link: '/docs/utilities/parseTransaction',
            },
            {
              text: '系列化交易',
              link: '/docs/utilities/serializeTransaction',
            },
          ],
        },
        {
          text: '单位',
          items: [
            {
              text: '格式化Ether',
              link: '/docs/utilities/formatEther',
            },
            {
              text: '格式化Gwei',
              link: '/docs/utilities/formatGwei',
            },
            {
              text: '格式化单位',
              link: '/docs/utilities/formatUnits',
            },
            {
              text: '解析Ether',
              link: '/docs/utilities/parseEther',
            },
            {
              text: '解析Gwei',
              link: '/docs/utilities/parseGwei',
            },
            {
              text: '解析单位',
              link: '/docs/utilities/parseUnits',
            },
          ],
        },
      ],
    },
    {
      text: '第三方部分',
      collapsed: true,
      items: [
        {
          text: '账户抽象',
          link: '/docs/third-party/account-abstraction',
        },
        {
          text: '多种类',
          link: '/docs/third-party/misc',
        },
      ],
    },
    {
      text: '词汇表',
      collapsed: true,
      items: [
        { text: '条款', link: '/docs/glossary/terms' },
        { text: '类型', link: '/docs/glossary/types' },
        { text: '错误', link: '/docs/glossary/errors' },
      ],
    },
  ],
}
