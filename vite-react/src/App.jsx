import Test from "./test"
import React, { useState,useEffect } from 'react'


function App() {
  const [count,setCount] = useState(0)
  const effect  = useEffect(()=>{
    alert("Welcome to my Page !")
  },[count])
  return (
    <>
      <Test/>
      <h1>Hello World</h1>
      <p>orenawa kaizokuni naruhodu</p>
      <h2>Ohayo Gozaimasu</h2>
      <h1>Zoro</h1>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </>
  )
}

export default App;
