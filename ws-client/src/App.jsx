import { useState,useEffect } from 'react'

import './App.css'

function App() {

const [socket,setSocket]=useState(null);


useEffect(()=>{

  const sokt= new WebSocket("ws://localhost:8080");

  sokt.onopen = ()=>{
    console.log("ws client connected");
    sokt.send('heelo from ws client');
  }

  sokt.onmessage = (message)=>{
    console.log(`message recieved in ws client ${message.data}`)
  }

  setSocket(sokt);


  return()=>sokt.close()

},[])


  return (
    <>
    <div>     heloo i am ws client</div>

    </>
  )
}

export default App
