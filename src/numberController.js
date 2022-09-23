const express = require('express')
const {query} = require("express");

let urls =[]
const solution = (req,res)=>
{
    res.status(200).json(req.query.url)
    urls= query.url
}





module.exports = solution;