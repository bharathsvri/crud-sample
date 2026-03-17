import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

let data = [];

app.get("/",(req,res) => {
    res.json(data)
})

app.get("/:id",(req,res) => {
    res.json(data.find(i => i.id == req.params.id))
})

app.post("/",(req,res) => {
    let {name} = req.body;
    data.push({id:data.length+1,name});
    res.json({sucess:true,msg:"Data added successfully"});
})

app.put("/:id",(req,res)=>{
    let {name} = req.body;
    let update = data.find(i => i.id == req.params.id);
    update.name = name;
    res.json({sucess:true,msg:"Data updated successfully"});
})

app.delete("/:id",(req,res)=>{
    let del = data.filter(i => i.id != req.params.id);
    data = del;
    res.json(del);
})

app.listen(8000,()=> {
    console.log("http://localhost:8000");
})
