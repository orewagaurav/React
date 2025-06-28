import Test from "./test"
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [form,setForm] = useState({email:"",phone:""})
  
  const handelChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form);
    
  }

  return (
    <>
    </>
  )
}
export default App;
