var Prode = artifacts.require("Prode");
var Web3  = require("web3");
var matches = require("../matches");

 web3 = new Web3();

contract('Prode', function(accounts) {

  it("test  matches ", async function() {

    let inst = await Prode.deployed();
    let match = null;
    for( var i = 0 ; i < matches.length ; i++ ){
      match = await inst.getMatch(matches[i]);
      console.log(match);
      console.log(bytes32ToString(match[0]));
      assert.equal(bytes32ToString(match[0]), bytes32ToString(matches[i]), "Error!");
}
  });

  it("add Match", async function() {
    let inst = await Prode.deployed();
    await inst.addMatches([web3.toHex('pepe-pipo')],{gas: 140000, from:accounts[0]});
    let match = await inst.getMatch(web3.toHex('pepe-pipo'));
    assert.equal(bytes32ToString(match[0]), "pepe-pipo", "Error get match Argentina Alemania");
  });

  it("add proposal argentina-alemania",async function() {
    let inst = await Prode.deployed();
    await inst.addPropostal([web3.toHex('argentina-alemania')],[2],{gas: 140000, from:accounts[1]});
    let prop = await inst.getProposal(accounts[1],web3.toHex('argentina-alemania'))
    assert.equal(prop.toString(), "2", "Error!");
  });

  it("add result "+matches[2],async function() {
    let inst = await Prode.deployed();
    await inst.addMatchResult(matches[2],1,{gas: 140000, from:accounts[0]});
    let match = await inst.getMatch(matches[2]);
    assert.equal(match[1].toString(), "1", "Error!");
  });

});

var bytes32ToString = (byte32)=> web3.toAscii(byte32).replace(/\u0000/g,"");
