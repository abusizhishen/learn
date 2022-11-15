const express = require('express')
const userRouter = require('./user')
const router = express()

router.get('/', function (req,res) {
    res.toString('hello admin')
})

router.use('/user', userRouter)

module.exports = router