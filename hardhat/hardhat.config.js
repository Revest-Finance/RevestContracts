require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");
// require("solidity-coverage");

require("dotenv").config;

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            hardfork: "london",
            initialBaseFeePerGas: 0,
            forking: {
                url: "MAINNET PROVIDER URL",
                blockNumber: 13124004,
            },
        },
        rinkeby: {
            url: "RINKEBY PROVIDER GOES HERE",
            accounts: ["RINKEBY ACCOUNT GOES HERE"]

        },
         mainnet: {
             url: "MAINNET PROVIDER URL" ,
             accounts: ["MAINNET ACCOUNT GOES HERE"],
             gasPrice: 65e9,
             blockGasLimit: 12487794,
         },
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 10000,
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 30000,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: 'ETHERSCAN API KEY',
    },
};
