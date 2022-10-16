// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/DSo_VPLx_QXDWAo5jgzMIRpEeAR9-Bva",
      accounts: ["30e8b1b42833ae0d34372f0b82ba6fc79bc2eeb710b15499748ea6c5dd13a9ae"],
    },
  },
};