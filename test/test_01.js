
var Voting = artifacts.require("Voting");

contract('Voting', function(accounts) {
  it("vote for Fran", function() {
    return Voting.deployed().then(function(instance) {
      return instance.voteForCandidate("Fran", {gas: 140000, from: accounts[0]})
    }).then(function() {
       Voting.deployed().then(function(instance) {
      instance.totalVotesFor.call("Fran").then(function(v){
        assert.equal(v.toString(), "1", "total is not correct! ")
    })
    })
    })
  })

})
