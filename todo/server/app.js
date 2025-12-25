// const app=express();  Ab ye app object tumhare server ko control karega
//express.json() ek middleware hai jo: 👉 client se aane wale JSON data ko JavaScript object me convert kar deta hai.

const express = require("express");
const cors=require("cors");

//now creating object i.e app 
const app=express();
app.use(cors());
app.use(express.json());

//creating a virtual database
let dataBase=[];

//creating a simple api to get all send all data to frontend
app.get("/api/todo",(req,res)=>{
    res.json(dataBase);
})

//creating api to create a new todo
app.post("/api/todo",(req,res)=>{
    const{title}=req.body;
    if(!title){
        return res.status(400).json({message:"fill the title"});
    }
   const newtodo={id:Date.now(),title,completed:false};
   dataBase.push(newtodo);
   res.status(201).json(newtodo);
});

//createing api for deleting the data
app.delete("/api/todo/:id",(req,res)=>{
    const {id}=req.params;
    const initialLength = dataBase.length; // ✅ define first
    dataBase=dataBase.filter((t)=>t.id!==parseInt(id));

    if (dataBase.length === initialLength) {
    return res.status(404).json({ message: "Todo not found" });
  }

    res.json({message:"successfully deleted"})
});

//updating todo
app.put("/api/todo/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = dataBase.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});


const port=5000;
app.listen(port,()=> 
console.log(`server is running at port : ${port}`)
);