const fetch = require('node-fetch')

const url = require("url");
const {response} = require("express");
let validEndPoint = ['primes','fibo','odd','rand'];
let urlRegex = /^https?:\/\/([\w\d\-]+\.)+\w{2,}(\/.+)?$/
let urlWithPort = /^http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/
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
           if((urlRegex.test(url)||urlWithPort.test(url)) && found===1 )
           {
               return url;
           }
    });
    return result;
}

async function fetchUrls(validatedUrl) {
    let array=[]
    for (const url1 of validatedUrl) {
        fetch(url1)
            .then(res => res.json())
            .then(json => {
                console.log(json.numbers);;
            })
    }
}
const solution = (req,res)=>
{ const queryURL = url.parse(req.url, true).query;
    let urls = queryURL.url;
    //console.log(urls);
   let validatedUrl  =  validateUrl(urls)
    console.log(validatedUrl)
        fetchUrls(validatedUrl)
    res.status(200).json(validatedUrl)
}





module.exports = solution;