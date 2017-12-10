var Voting = artifacts.require("./Voting.sol");
var Prode = artifacts.require("./Prode.sol");
var Web3 = require("web3");
var matches = require("../matches");
var web3 = new Web3();
module.exports = function(deployer) {
  //deployer.deploy(Voting, ['Fran', 'Pablo', 'Fabri']);
  deployer.deploy(Prode,matches);
};
