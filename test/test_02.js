var Prode = artifacts.require("Prode");
var Web3  = require("web3");
var matches = require("../matches");

 web3 = new Web3();

contract('Prode', function(accounts) {

  it("test match "+matches[0], function() {
     Prode.deployed().then(function(instance) {
       instance.getMatch(matches[0]).then(function(match) {
         console.log(match)
         console.log(bytes32ToString(match[1].toString()))
      assert.equal(bytes32ToString(match[0]), bytes32ToString(matches[0]), "Error!");
    });
  });
  });

  it("add Match", function() {
    return Prode.deployed().then(function(instance) {
      return instance.addMatches([web3.toHex('pepe-pipo')],{gas: 140000, from:accounts[0]});
    }).then(function() {
       return Prode.deployed().then(function(instance) {
        return instance.getMatch(web3.toHex('pepe-pipo')).then(function(match){
           assert.equal(bytes32ToString(match[0]), "pepe-pipo", "Error get match Argentina Alemania");

         })
       })
    });
  });

  it("add proposal argentina-alemania", function() {
    return Prode.deployed().then(function(instance) {
      return instance.addPropostal([web3.toHex('argentina-alemania')],[2],{gas: 140000, from:accounts[1]});
    }).then(function() {
       return Prode.deployed().then(function(instance) {
        return instance.getProposal(accounts[1],web3.toHex('argentina-alemania')).then(function(prop){
          console.log(prop)
            assert.equal(prop.toString(), "2", "Error!");

         })
       })
    });
  });

  it("add result"+matches[2], function() {
    return Prode.deployed().then(function(instance) {
      return instance.addMatchResult(matches[2],1,{gas: 140000, from:accounts[0]});
    }).then(function() {
       return Prode.deployed().then(function(instance) {
        return instance.getMatch(matches[2])
        .then(function(prop){
          console.log(prop)
           assert.equal(prop[1].toString(), "1", "Error!");

         })
       })
    });
  });

});

var bytes32ToString = (byte32)=> web3.toAscii(byte32).replace(/\u0000/g,"");
