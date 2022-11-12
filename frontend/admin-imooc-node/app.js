const express = require("express")
const app = express()
const querySql = require('./db/index')

app.use(express.json());
app.get('/', function (req,res) {
    throw new Error("err")
})

app.post('/login', function (req,res) {
    const {username,passwd} = req.body
    querySql.querySql(`select * from user where username= '${username}' and passwd = '${passwd}' limit 1`).
    then((result) =>{
        if (result.length === 1 && result[0].username === username && result[0].passwd === passwd) {
            res.json({code:0,msg:"登录成功"})
        }else{
            res.json({code:-1,msg:"账号或密码不匹配"})
        }
    })
})

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