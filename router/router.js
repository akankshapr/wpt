const express=require("express");
const router=express.Router();
const connection=require("../db/db")


router.get("/product",(req,resp)=>
{
    connection.query("select * from product",(err,data)=>{
        if(err){
            resp.status(500).send("error occured");
        }else{
            resp.send(data);
            console.log("product added successfully")
        }
    }
    )
})
router.get("/product/:id",(req,resp)=>{
    var id=(req.params.id);
    connection.query("select * from product where id=?",[id],(err,data)=>{
        if(err){
            resp.status(500).send("error occured");
        }else{
            resp.send(data[0]);
            console.log("product added successfully")
        }
    })
})

router.post("/add",(req,resp)=>
{
    var id=parseInt(req.body.id);
    var qty=parseInt(req.body.qty);
    var desc=req.body.desc;
    var price=parseFloat(req.body.price);
    var product_name=req.body.product_name;

    connection.query("insert into product(qty,description,price,product_name) value(?,?,?,?)",[qty,desc,price,product_name],(err,result)=>{

if(err){
    resp.status(500).send(JSON.stringify(err))
}else{
   resp.send(result);
   console.log("data inserted successfully")
}

    })

    
})

router.post("/update/:id",(req,resp)=>{

    var id=parseInt(req.body.id);
    var qty=parseInt(req.body.qty);
    var desc=req.body.desc;
    var price=parseFloat(req.body.price);
    var product_name=req.body.product_name;
      
    connection.query("update product set qty=?,description =?,price=?,product_name=? where id=? ",[qty,desc,price,product_name,id],(err,result)=>{
        if(err){
           resp.status(500).send("updated"+JSON.stringify(err))
        }
        else{
            if(result.affectedRows>0)
            resp.send("data updated successfully")
        }
    }
    )
})
router.delete("/delete/:id",(req,resp)=>
{
    var id=(req.params.id);

    connection.query("delete from product where id=?",[id],(err,result)=>
    {
        if(err){
            resp.status(500).send("deleted"+JSON.stringify(err))
        }else{
            if(result.affectedRows)
            resp.send("deleted successfully")
        }
    })

})



module.exports=router;


// id | qty | description | price  | product_name





