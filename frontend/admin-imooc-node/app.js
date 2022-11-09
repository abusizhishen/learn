const express = require("express")
const app = express()

app.get('/', function (req,res) {
    throw new Error("errrrr")
})

function errHandler(err,req,res,next){
    // console.log(err)
    res.status(500).json({code:500, message:"dddddddd"})
}

app.use(errHandler)



const server = app.listen(5000,function () {
    const {address,port} = server.address()
    console.log("listen on: ", address, " ", port)
})