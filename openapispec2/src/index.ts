import swaggerUi from 'swagger-ui-express';
import { opendoc } from "./openapispec.js"
import express from "express";
const app = express();
const port = 8080;

app.use(express.json())

const users = [
    {id:"1",name:"daljeet"},
    {id:"2",name:"harman"}
]


app.use('/documentation', swaggerUi.serve, swaggerUi.setup(opendoc));

app.get("/users",(req,res)=>{
    const{ name }= req.query;
if(name){
 const filteredUsers = users.filter(user => user.name.toLocaleLowerCase().includes(String(name).toLowerCase()))
 return res.json(filteredUsers)
}
else{
return res.json(users)
}

})


app.listen(port,()=>{
    console.log(`sever is up on ${port}`)
})

