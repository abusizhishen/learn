const mysql = require("mysql")
const config = require('./config')
var conn = () => {
    return mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.passwd,
        database: config.database,
        multiplesStatement: true
    })
};

function querySql(query){
    db = conn()
    err = db.connect()
    if (err) throw err;
    return new Promise((resolve, reject)=>{
        try {
            err = db.query(query, (err,result)=>{
                if (err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        }catch (e){
            reject()
        }finally {
            db.end()
        }
    })
}

module.exports = {
    querySql,
}