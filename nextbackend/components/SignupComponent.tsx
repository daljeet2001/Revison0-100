"use client"
import {useState,useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

export function SignupComponent(){
    const router=useRouter();
    const [username,setUsername] = useState<any>();
    const [password,setPassword] = useState<any>();

    return(
        <div className="bg-red-500 flex flex-col">
            <input type="email" placeholder="enter your email" onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="button" onClick={async()=>{
await axios.post("http://localhost:3000/api/user",{
    username,password
});
router.push("/");
            }}>Signin</button>
        </div>
    )
}