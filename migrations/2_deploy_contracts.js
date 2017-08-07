const TimeLockedRewardFaucet = artifacts.require("./TimeLockedRewardFaucet.sol");

module.exports = function(deployer) {
  deployer.deploy(TimeLockedRewardFaucet);
};
