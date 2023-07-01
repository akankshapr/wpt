const express=require("express")
const app=express();
const bodyParser=require("body-parser")
const path=require("path")
const rout=require("./router/router")

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use("/",rout)




app.listen(3002,()=>{
    console.log("server started on port 3002")
})
module.exports.app;




const express=require("express")
const app=express();
const bodyparser=require("body-parser")
const routes=require("./router/router")

app.use(bodyparser.urlencoded({extended:false}))
 app.use(bodyparser.json());
 app.use("/",routes)

 app.listen(3002),(=>{
    console.log("server stared at port 3002")
 })

 