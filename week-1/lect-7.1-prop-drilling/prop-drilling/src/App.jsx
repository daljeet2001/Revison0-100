// import Home from "./pages/home"
// import Landing from "./pages/landing"

//lazy loading
import React, {Suspense,useState,useContext} from "react"
const Home  = React.lazy(()=>import('./pages/home'))
const Landing  = React.lazy(()=> import('./pages/landing'))
import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom"
import {CountContext} from "./Context"

function App() {
  const navigate=useNavigate();
  const [count,setCount]=useState(0)



  return (
    <>
  {/* prop drilling */}

    {/* <div style={{backgroundColor:"black",text:"white"}}>
      <button onClick={()=>{
        // window.location.href="/"
        navigate("/")
      }}>Landing</button>

       <button onClick={()=>{
        // window.location.href="/home"
        navigate("/home")
      }}>Home</button>

    </div>
    <Routes>
      <Route path="/" element= {<Suspense fallback={"loading...."}><Landing/></Suspense>}/>
      <Route path="/home" element={<Suspense fallback={"loading..."}><Home/></Suspense>}/>
    </Routes> */}

    {/* prop drilling  & Context api*/}

    <div>
      <Buttons count={count} setCount={setCount}/>

      {/* context api */}
      <CountContext.Provider value={count}>
      <CountShow/>
      </CountContext.Provider>

    </div>

    
  
    </>
  )
}

export default App


function CountShow(){
  const count=useContext(CountContext)
  return <div>
    {count}
  </div>

}

function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
  </div>

}
