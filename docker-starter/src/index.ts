import express from "express"
import mongoose,{ConnectOptions} from "mongoose"
const app=express()

const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/testdb";

const dbConnect = async()=>{
    try{
        await mongoose.connect(DB_URL)
        console.log("MongoDB Connected")

    }catch(e:any){
        console.error(`error ${e.message}`)
    }  
}

dbConnect();

app.get("/",(req,res)=>{
    res.send("GET req recieved") 
})



app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`)
})