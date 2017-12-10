pragma solidity ^0.4.18;


contract Prode {

// see enums enum Result {win = 1,lose = 2,tie = 0}


/*
  struct Match {
    bytes32 teams;
    int result;
  }
*/

  struct Voter{
      mapping (bytes32 => int) proposals;
    //  mapping (address => Result) proposals;
  }


bytes32[] public teams;
mapping (bytes32 => int) matches;
mapping (address => Voter)  voters;
address public owner;



function Prode(bytes32[] _teams) public{
  owner = msg.sender;
  teams = _teams;
}

function addMatches(bytes32[] _teams) public{
  require(msg.sender == owner);
  for(uint i = 0 ; i < _teams.length ; i++){
    teams.push(_teams[i]);
  }
}

function addPropostal(bytes32[] _teams , int[] _result ) public{
  for( uint i = 0 ; i < _teams.length ; i++){
    voters[msg.sender].proposals[_teams[i]] = _result[i];
  }
}

function getProposal (address voterAddr , bytes32 _team) view public returns (int){
    return voters[voterAddr].proposals[_team];
}

 function getMatch(bytes32 team)view public returns(bytes32,int){
   return (team,matches[team]);
 }

}
