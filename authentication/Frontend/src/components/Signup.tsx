import React from 'react'
import axios from "axios"
const Signup = () => {

    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("")
  
  return (
    <div>
        <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type = "password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit" onClick={async()=>{
     await axios.post(`${import.meta.env.BACKEND_URL}/signin`,{
        email,
        password
     },{
        withCredentials:true
     });
     alert("you are logged in")
        }}>Signup</button>

    </div>
  )
}

export default Signup
