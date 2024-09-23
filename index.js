const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

web3.eth.getBlockNumber().then((blockNumber) => {
    console.log("Current block number: ", blockNumber);
}).catch((err) => {
    console.error("Error: ", err);
});
