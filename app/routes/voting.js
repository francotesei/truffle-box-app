import Voting from '../model/Voting';



var voteForCandidate = (req,res)=>{
  if(req.body.candidate)
    Voting.voteForCandidate(req.body.candidate,(r,e)=>{
      if(e != null) return res.send(e);
      return res.send(r);
    });
    else return res.send("candidate: ?");

}

var totalVotesForCandidate = (req,res)=>{
  if(req.query.candidate)
    Voting.totalVotesForCandidate(req.query.candidate,(r,e)=>{
      if(e != null) return res.send(e);
      return res.send(r);
    });
    else return res.send("?params candidate");

}

export {voteForCandidate,totalVotesForCandidate};
