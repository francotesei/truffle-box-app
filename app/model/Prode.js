import { default as contract } from 'truffle-contract';
import Contracts from './contracts/'
import { default as Web3} from 'web3';

class Prode {
  constructor() {
    this.contract = contract(Contracts.Prode);
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    this.contract.setProvider(this.web3.currentProvider);
  }
}

const instance = new Prode();
Object.freeze(instance);
export default instance;
