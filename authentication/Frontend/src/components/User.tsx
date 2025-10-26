import React from 'react'
import axios from "axios";

const User = () => {

    const [userData,setUserData] = React.useState(null);


    React.useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/user`,{},{
            withCredentials:true
        }).then(res=>setUserData(res.data.userId))
    },[])
  return (
    <div>
      <h1>your userId is {userData? userData: "not defined"}</h1>
      <button onClick={async()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`,{}
        ,{
            withCredentials:true
        })
        alert("logged out")

      }}>Logout</button>
    </div>
  )
}

export default User
