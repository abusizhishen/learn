const express = require('express')
const route = express()
const querySql = require('../db/index')

route.post('/info',function (req,res){
    console.log(req.body)
    res.json({code:0,msg:"success"})
})

route.post('/login', function (req,res) {
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

module.exports = route