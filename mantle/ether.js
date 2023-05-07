import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
await window.ethereum.enable();

const zuskABI = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_zkIdentity",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "_digitalCredentials",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			}
		],
		"name": "generateZeroKnowledgeProof",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getZKIdentity",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const zuskAddress = /* address of the deployed Zusk contract */;

const zuskContract = new web3.eth.Contract(zuskABI, zuskAddress);

export { web3, zuskContract };
