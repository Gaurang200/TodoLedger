
const ABI = require('../ABI.json');
const { Web3 } = require('web3');



const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/R5a1q24kZZZBEHSqQZt6qf5rj8HlSysN");
const contractAddress = "0x0D85F4E6016862942CB91c875A8Aa131ddDAdfce";
const contract = new web3.eth.Contract(ABI, contractAddress);


console.log(contract,'contract');

module.exports = { contract }