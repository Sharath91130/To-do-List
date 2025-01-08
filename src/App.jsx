import { useState } from 'react'
import './style.css'

import './App.css'
import Home from "./Component/Home.jsx";
import backdrop from "bootstrap/js/src/util/backdrop.js";
import Test from "./Component/Test.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:""}}>
        <h1 style={{backgroundColor:"rosybrown",textAlign:"center"}} >To-Do app</h1>
        <div style={{textAlign:"center",fontSize:"medium"}}>
        <Home />
        </div>
    </div>
  )
}

export default App
