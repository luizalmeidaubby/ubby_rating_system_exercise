import web3 from "./web3";

const address = "0x028bb947f7d1c4893396a6519cbf7765241ee644";
const abi = 
[
    {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
        {
        "name": "",
        "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_spender",
        "type": "address"
        },
        {
        "name": "_value",
        "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
        "name": "",
        "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
        "name": "",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_from",
        "type": "address"
        },
        {
        "name": "_to",
        "type": "address"
        },
        {
        "name": "_value",
        "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
        "name": "",
        "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "INITIAL_SUPPLY",
    "outputs": [
        {
        "name": "",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
        {
        "name": "",
        "type": "uint8"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_spender",
        "type": "address"
        },
        {
        "name": "_subtractedValue",
        "type": "uint256"
        }
    ],
    "name": "decreaseApproval",
    "outputs": [
        {
        "name": "",
        "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [
        {
        "name": "_owner",
        "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
        "name": "",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
        "name": "",
        "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
        "name": "",
        "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_to",
        "type": "address"
        },
        {
        "name": "_value",
        "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
        "name": "",
        "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_spender",
        "type": "address"
        },
        {
        "name": "_addedValue",
        "type": "uint256"
        }
    ],
    "name": "increaseApproval",
    "outputs": [
        {
        "name": "",
        "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [
        {
        "name": "_owner",
        "type": "address"
        },
        {
        "name": "_spender",
        "type": "address"
        }
    ],
    "name": "allowance",
    "outputs": [
        {
        "name": "",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_newOwner",
        "type": "address"
        }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
    },
    {
    "anonymous": false,
    "inputs": [
        {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
        }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
        {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
        },
        {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
        }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
        {
        "indexed": true,
        "name": "owner",
        "type": "address"
        },
        {
        "indexed": true,
        "name": "spender",
        "type": "address"
        },
        {
        "indexed": false,
        "name": "value",
        "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
        {
        "indexed": true,
        "name": "from",
        "type": "address"
        },
        {
        "indexed": true,
        "name": "to",
        "type": "address"
        },
        {
        "indexed": false,
        "name": "value",
        "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_description",
        "type": "string"
        }
    ],
    "name": "addOrReplace",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
        "name": "_userReview",
        "type": "uint8"
        }
    ],
    "name": "review",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
        {
        "name": "description",
        "type": "string"
        },
        {
        "name": "average",
        "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    }
];

export default new web3.eth.Contract(abi, address);