import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app';
import IndexTemplate from '../templates/index';


 var index = (req,res)=>{
   const body = renderToString(<App text='voting-food-app'/>); // state <App {... initialState}/>  initialState: JSON.stringify(initialState)
   res.send(IndexTemplate(({
     body:body,
     title:"Voting-food-app"
   })));
}

export {index}
