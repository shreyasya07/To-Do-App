import express from "express";
import bodyParser from 'body-parser';

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let newItems=[];
let newItemsWork=[];

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        newListItems:newItems,
    });
});


app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        newListItemsWork:newItemsWork,
    });
});

app.post("/",(req,res)=>{
    let item=req.body["item"];
    newItems.push(item);
    res.redirect("/");
});
app.post("/work",(req,res)=>{
    let itemWork=req.body["item"];
    newItemsWork.push(itemWork);
    res.redirect("/work");
});
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
