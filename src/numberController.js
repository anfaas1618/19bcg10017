const express = require('express')
const {query} = require("express");
const url = require("url");
let validEndPoint = ['primes','fibo','odd','rand'];
let urlRegex = /^https?:\/\/([\w\d\-]+\.)+\w{2,}(\/.+)?$/
let validEndPointRegex = /([^\/]+)\/?$/

function validateUrl(urls) {

   const result =  urls.filter((url)=>{
      let matcher =  url.match(validEndPointRegex)
       let endpoint = matcher[0];
        let found = 0;
       for (let i = 0; i < validEndPoint.length; i++) {
           if (endpoint===validEndPoint[i])
               found=1;
       }
           if(urlRegex.test(url) && found===1 )
           {
               return url;
           }
    });
    console.log(result)
    return urls;
}

const solution = (req,res)=>
{ const queryURL = url.parse(req.url, true).query;
    let urls = queryURL.url;
    //console.log(urls);



   let validatedUrl  =  validateUrl(urls)



    res.status(200).json(req.query.url)
}





module.exports = solution;