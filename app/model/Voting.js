import { default as contract } from 'truffle-contract';
import Contracts from './contracts/'
import { default as Web3} from 'web3';


  class Voting {

  constructor(){

    this.contract = contract(Contracts.Voting);
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    this.contract.setProvider(this.web3.currentProvider);
  }

  /* Voting.deployed() returns an instance of the contract. Every call
   * in Truffle returns a promise which is why we have used then()
   * everywhere we have a transaction call
   */
  voteForCandidate(candidate,callback){
    try {
      this.contract.deployed().then((contractInstance) => {
        contractInstance.voteForCandidate(candidate, {gas: 140000, from: this.web3.eth.accounts[0]})
        .then(() => {
           contractInstance.totalVotesFor.call(candidate).then((v) => {
             console.log("vote for candidate ",candidate);
            callback(v.toString(),null);
          });
        });
      });
    } catch (err) {
      console.log("ERROR",err);
      callback(null,err);
    }
  }

  totalVotesForCandidate(candidate,callback){
    try {
    this.contract.deployed().then((contractInstance) => {
      contractInstance.totalVotesFor.call(candidate).then((v)=> {
        console.log(" total votes for candidate ",candidate);
        callback(v.toString());
      });
    });
  }catch(err){
    console.log("ERROR",err);
    callback(null,err);
  }
  }
}
const instance = new Voting();
Object.freeze(instance);
export default instance;
