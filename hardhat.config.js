require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_SEPOLIA_URL = "https://eth-sepolia.g.alchemy.com/v2/V8VbeuXIGks4glUYQupSV2wKYO7XCG5r";
const PRIVATE_KEY = "Wallet Private Key";
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
