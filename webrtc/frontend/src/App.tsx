
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Sender from  './components/Sender.tsx'
import Reciever from './components/Reciever.tsx'



function App() {


return (
  <BrowserRouter>
  <Routes>
    <Route path= "/reciever" element = {<Reciever/>}/>
    <Route path = "/sender" element = {<Sender/>}/>
  </Routes>
  </BrowserRouter>
)
}

export default App
