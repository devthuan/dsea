export const CONTRACT_ADDRESS = "0x37C22B2b4775179c08bd9cFB6752f808B5E10b6E";

export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "dailyKey",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "exchangeName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "incoming",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "outgoing",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "balance",
        type: "string",
      },
    ],
    name: "FlowTotalRecorded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timeIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "nameCoin",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "open",
            type: "string",
          },
          {
            internalType: "string",
            name: "high",
            type: "string",
          },
          {
            internalType: "string",
            name: "low",
            type: "string",
          },
          {
            internalType: "string",
            name: "close",
            type: "string",
          },
          {
            internalType: "string",
            name: "volume",
            type: "string",
          },
          {
            internalType: "string",
            name: "percentTotal",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceChange",
            type: "string",
          },
          {
            internalType: "string",
            name: "changePercent",
            type: "string",
          },
          {
            internalType: "string",
            name: "marketCap",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct PerformanceDay.FormData",
        name: "formData",
        type: "tuple",
      },
    ],
    name: "Recorded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "Records",
    outputs: [
      {
        internalType: "string",
        name: "nameCoin",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "open",
        type: "string",
      },
      {
        internalType: "string",
        name: "high",
        type: "string",
      },
      {
        internalType: "string",
        name: "low",
        type: "string",
      },
      {
        internalType: "string",
        name: "close",
        type: "string",
      },
      {
        internalType: "string",
        name: "volume",
        type: "string",
      },
      {
        internalType: "string",
        name: "percentTotal",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceChange",
        type: "string",
      },
      {
        internalType: "string",
        name: "changePercent",
        type: "string",
      },
      {
        internalType: "string",
        name: "marketCap",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allSymbols",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "flowRecords",
    outputs: [
      {
        internalType: "string",
        name: "incoming",
        type: "string",
      },
      {
        internalType: "string",
        name: "outgoing",
        type: "string",
      },
      {
        internalType: "string",
        name: "balance",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSymbols",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getDataByDay",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nameCoin",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "open",
            type: "string",
          },
          {
            internalType: "string",
            name: "high",
            type: "string",
          },
          {
            internalType: "string",
            name: "low",
            type: "string",
          },
          {
            internalType: "string",
            name: "close",
            type: "string",
          },
          {
            internalType: "string",
            name: "volume",
            type: "string",
          },
          {
            internalType: "string",
            name: "percentTotal",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceChange",
            type: "string",
          },
          {
            internalType: "string",
            name: "changePercent",
            type: "string",
          },
          {
            internalType: "string",
            name: "marketCap",
            type: "string",
          },
        ],
        internalType: "struct PerformanceDay.FormData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    name: "getDataInRange",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "nameCoin",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "open",
            type: "string",
          },
          {
            internalType: "string",
            name: "high",
            type: "string",
          },
          {
            internalType: "string",
            name: "low",
            type: "string",
          },
          {
            internalType: "string",
            name: "close",
            type: "string",
          },
          {
            internalType: "string",
            name: "volume",
            type: "string",
          },
          {
            internalType: "string",
            name: "percentTotal",
            type: "string",
          },
          {
            internalType: "string",
            name: "priceChange",
            type: "string",
          },
          {
            internalType: "string",
            name: "changePercent",
            type: "string",
          },
          {
            internalType: "string",
            name: "marketCap",
            type: "string",
          },
        ],
        internalType: "struct PerformanceDay.FormData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "exchangeName",
        type: "string",
      },
    ],
    name: "getFlowInRange",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "incoming",
            type: "string",
          },
          {
            internalType: "string",
            name: "outgoing",
            type: "string",
          },
          {
            internalType: "string",
            name: "balance",
            type: "string",
          },
        ],
        internalType: "struct PerformanceDay.FlowData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nameCoin",
        type: "string",
      },
      {
        internalType: "string",
        name: "open",
        type: "string",
      },
      {
        internalType: "string",
        name: "high",
        type: "string",
      },
      {
        internalType: "string",
        name: "low",
        type: "string",
      },
      {
        internalType: "string",
        name: "close",
        type: "string",
      },
      {
        internalType: "string",
        name: "volume",
        type: "string",
      },
      {
        internalType: "string",
        name: "percentTotal",
        type: "string",
      },
      {
        internalType: "string",
        name: "priceChange",
        type: "string",
      },
      {
        internalType: "string",
        name: "changePercent",
        type: "string",
      },
      {
        internalType: "string",
        name: "marketCap",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    name: "recordDataDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestampS",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "incoming",
        type: "string",
      },
      {
        internalType: "string",
        name: "outgoing",
        type: "string",
      },
      {
        internalType: "string",
        name: "balance",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "exchangeName",
        type: "string",
      },
    ],
    name: "recordFlow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "symbolID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const PROVIDER_URL = "wss://bsc-testnet-rpc.publicnode.com";

export const PRIVATE_KEY =
  "0xe4d4c852c64068964081ff4a45d53635ea8000eb99b4e25912ca06bb8b49738b";
