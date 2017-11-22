import Voting from '../model/Voting';



var voteForCandidate = (req,res)=>{
  if(req.query.name)
    Voting.voteForCandidate(req.query.name,(r,e)=>{
      if(e != null) return res.send(e);
      return res.send(r);
    });
    else return res.send("?params name");

}

var totalVotesForCandidate = (req,res)=>{
  if(req.query.name)
    Voting.totalVotesForCandidate(req.query.name,(r,e)=>{
      if(e != null) return res.send(e);
      return res.send(r);
    });
    else return res.send("?params name");

}

export {voteForCandidate,totalVotesForCandidate};
