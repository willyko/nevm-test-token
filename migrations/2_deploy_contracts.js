const TokenCoin = artifacts.require("TestToken");

module.exports = function(deployer) {
  deployer.deploy(TokenCoin);
};
