const express = require('express')
const cors = require('cors')
const solution = require("./numberController");
const app = express()

app.use(express.json());

app.get("/numbers",solution);

app.listen(5000,()=>
{
    console.log("lisitng")
})

