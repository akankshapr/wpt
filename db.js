const mysql2=require("mysql2")
const connection=mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root123",
    port:3306,
    database:"akku"

    })

    connection.connect((err)=>{
        if(err){
            console.log("error occured"+JSON.stringify(err))
        }else{console.log("connection done")}
    }
    )
    module.exports=connection;




    const mysql2=require("mysql2")
    const connection=mysql2.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"root123",
        port:3306,
        database:"test",

    })

    connection.connect((err)=>{
        if(err){
            console.log("error occured"+JSON.stringify(err));

        }else{
            console.log("connection done")
        }
    })