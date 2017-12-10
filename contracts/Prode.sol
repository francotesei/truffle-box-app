pragma solidity ^0.4.18;


contract Prode {

// see enums enum Result {win = 1,lose = 2,tie = 0}

/*
 0 default
 1 win
 2 lose
 3 tie
*/

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


bytes32[] public _matches;
mapping (bytes32 => int) matchesResult;
mapping (address => Voter)  voters;
address public owner;



function Prode(bytes32[] matches) public{
  owner = msg.sender;
  _matches = matches;
}

function addMatches(bytes32[] matches) public{
  require(msg.sender == owner);
  for(uint i = 0 ; i < matches.length ; i++){
    _matches.push(matches[i]);
  }
}

function addMatchResult(bytes32 _team,int result)public {
  require(msg.sender == owner);
  matchesResult[_team] = result;
}

function addPropostal(bytes32[] matches , int[] result ) public{
  for( uint i = 0 ; i < matches.length ; i++){
    voters[msg.sender].proposals[matches[i]] = result[i];
  }
}

function getProposal (address voterAddr , bytes32 _match) view public returns (int){
    return voters[voterAddr].proposals[_match];
}

 function getMatch(bytes32 _match)view public returns(bytes32,int){
   return (_match,matchesResult[_match]);
 }

}
