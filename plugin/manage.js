export const ADDR = '0xC2975ce1585c671DbA24178a2647dFC1eF07e1d4';

export const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "back",
				"type": "string"
			}
		],
		"name": "addBack",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "item",
				"type": "string"
			}
		],
		"name": "addItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "liquid",
				"type": "string"
			}
		],
		"name": "addLiquid",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "plant",
				"type": "string"
			}
		],
		"name": "addPlant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "pot",
				"type": "string"
			}
		],
		"name": "addPot",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "soil",
				"type": "string"
			}
		],
		"name": "addSoil",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "table",
				"type": "string"
			}
		],
		"name": "addTable",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "evolution",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getSeed",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "cnt",
				"type": "uint256"
			},
			{
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "multiEvo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"name": "multiMint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Evolution",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];