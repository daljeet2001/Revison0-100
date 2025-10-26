"use client"

import {useRouter} from "next/navigation"
import {signIn,signOut,useSession} from "next-auth/react"
export const Appbar =()=>{
    const router = useRouter();
    const session = useSession();


    return (
        <div>
            <button onClick ={()=>signIn()}>Signin</button>
            <br/>
                    <button onClick ={()=>signOut()}>Logout</button>
                    <br></br>
                   {JSON.stringify(session)}
        </div>
    )
}