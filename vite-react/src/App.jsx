import Test from "./test"
import React, { useState,useEffect,useRef } from 'react'

function App() {
  const [count,setCount] = useState(0)
  const ref =useRef(0);
  const [showBtn,setShowBtn] = useState(false)

  useEffect(()=>{
    console.log(`First rendering...`);
    ref.current.style.backgroundColor = 'red'
    
    
  },[])
  return (
    <>
      <Test/>
      <h1>Hello World</h1>
      <p>orenawa kaizokuni naruhodu</p>
      <h2>Ohayo Gozaimasu</h2>
      <h1>Zoro Juro </h1>
      <button ref={ref} onClick={()=>setCount(count+1)}>click me {count}</button>
      <button ref={ref} onClick={()=>setShowBtn(!showBtn)}>Show Btn {count}</button>
      <br></br>
      {/* {showBtn?<button>Show if true !</button>:"Nothing"} */}

      {showBtn && <button>Touch me !!</button>}

    </>
  )
}

export default App;
