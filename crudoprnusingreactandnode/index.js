import express from "express";
import bodyParser from "body-parser";
import cors from "cors";//this is middleware
import userRoutes from "./routes/users.js";


const app=express();
const port=5000;
app.use(bodyParser.json());
app.use(cors());

app.use("/",userRoutes);


app.get("/",(req,res)=>res.send("Hello from express"));
app.all("*",(req,res)=>{
    res.send("Route doesn't exixt");
});

app.listen(port,()=>
    console.log(`Server is listening on port:http://localhost:${port}`)
);