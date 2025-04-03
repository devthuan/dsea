export default {
  address: "0x1c6e3549fA384b805314895c7ABC84E065c2f79c",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "timestamp",
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
      inputs: [
        {
          internalType: "uint256",
          name: "timestamp",
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
      name: "getFlow7ItemsAgo",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "timestamp",
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
          ],
          internalType: "struct FlowTrackerByMonth.FlowData[]",
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
          name: "tokenSymbol",
          type: "string",
        },
        {
          internalType: "string",
          name: "exchangeName",
          type: "string",
        },
      ],
      name: "getFlowbyTime",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "timestamp",
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
          ],
          internalType: "struct FlowTrackerByMonth.FlowData",
          name: "",
          type: "tuple",
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
              internalType: "uint256",
              name: "timestamp",
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
          ],
          internalType: "struct FlowTrackerByMonth.FlowData[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
