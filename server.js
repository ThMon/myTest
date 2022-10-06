var express = require('express')
var app = express()

const port = process.env.PORT || 8000

app.get("/", (req, res)=>{
    res.json({page: "home"})
})

app.get("/test", (req, res)=>{
    res.json({page: "test"})
})


app.listen(port, ()=>{
    console.log("listen to port : "+port)
})