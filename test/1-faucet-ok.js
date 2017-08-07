var TimeLockedRewardFaucet = artifacts.require("./TimeLockedRewardFaucet.sol");

contract('TimeLockedRewardFaucet', function(accounts) {

  it("add payout accounts to faucet", function() {
    return TimeLockedRewardFaucet.deployed().then(function(instance) {
      return instance.all_team_accounts.call(accounts[0]);
    }).then(all_team_accounts => {
      assert.equal(all_team_accounts.length, 0, "empty account list on start");
    });
  });

});
