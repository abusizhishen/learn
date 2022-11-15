const express = require("express")
const router = require('./router')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(router)

function errHandler(err,req,res,next){
    if (err) {
        res.status(200).json({code:500, message:err.toString()})
    }else{
        res.status(200).json({code:0,msg:"success"})
    }
}

app.use(errHandler)


const server = app.listen(5000,function () {
    const {address,port} = server.address()
    console.log("listen on: ", address, " ", port)
})