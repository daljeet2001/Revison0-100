import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import User from "./components/User";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route path = {"/signin"} element = {<Signin/>}/>
      <Route path = {"/signup"} element ={<Signup/>}/>
      <Route path = {"/user"} element ={<User/>}/>

    </Routes>
</BrowserRouter>

    </>
  )
}

export default App
