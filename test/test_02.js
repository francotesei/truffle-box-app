// Specifically request an abstraction for MetaCoin
var Prode = artifacts.require("Prode");
var Web3  = require("web3");
var matches = require("../matches");

 web3 = new Web3();

contract('Prode', function(accounts) {

  it("test match "+matches[0], function() {
     Prode.deployed().then(function(instance) {
       instance.getMatch(matches[0]).then(function(match) {
         console.log(match[0])
         console.log(bytes32ToString(match[0]))
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
      return instance.addPropostal([web3.toHex('argentina-alemania')],[2],{gas: 140000, from:accounts[0]});
    }).then(function() {
       return Prode.deployed().then(function(instance) {
        return instance.getProposal(accounts[0],web3.toHex('argentina-alemania')).then(function(prop){
           assert.equal(prop.toString(), "2", "Error!");

         })
       })
    });
  });
});

var bytes32ToString = (byte32)=> web3.toAscii(byte32).replace(/\u0000/g,"");
