import "./App.css";
import {useState,useCallback} from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] =  useState(false)
  const [Password,setPAssword] = useState("")

  return (
    <>
    <h1 className="text-3xl text-center text-white">Password Generator </h1>
    </>
  )
}

export default App;
