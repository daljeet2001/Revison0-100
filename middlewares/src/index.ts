

import express from 'express';
const port = 8080;
const app =express();

let reqCount =0;
    function middleware(req:any,res:any,next:any){
        reqCount++;
        next();
    }
app.use(

    middleware
)

app.get("/",(req,res)=>{
    res.json({message:"healthy", count:reqCount})
})


app.listen(port,()=>{
    console.log(`server is up on ${port}`)
})