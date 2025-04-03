export default {
  address: "0x3f3dD4280CF78513F6C2837227f171Ba2bA74415",
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "timestamp",
          type: "uint256",
        },
        {
          components: [
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
          ],
          internalType: "struct OHLCVDay.FormData",
          name: "formData",
          type: "tuple",
        },
      ],
      name: "recordData",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
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
          ],
          indexed: false,
          internalType: "struct OHLCVDay.FormData",
          name: "formData6",
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
          name: "timestamp",
          type: "uint256",
        },
      ],
      name: "getAllSymbolByTime",
      outputs: [
        {
          components: [
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
          ],
          internalType: "struct OHLCVDay.FormData[]",
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
          name: "endTimestamp",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "tokenSymbol",
          type: "string",
        },
      ],
      name: "getData7ItemsAgo",
      outputs: [
        {
          components: [
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
          ],
          internalType: "struct OHLCVDay.FormData[]",
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
          ],
          internalType: "struct OHLCVDay.FormData[]",
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
          name: "symbol",
          type: "string",
        },
      ],
      name: "getSymbolByTime",
      outputs: [
        {
          components: [
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
          ],
          internalType: "struct OHLCVDay.FormData",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
