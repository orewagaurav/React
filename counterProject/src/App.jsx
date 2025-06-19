import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter  = 15

  const addValue = () => {
    counter += 1;
    console.log("Increased", counter);
    setCounter(counter);
  };
  const decreaseValue = ()=>{
    counter -= 1
    console.log("Decreased", counter);
    setCounter(counter)
  }
  return (
    <>
      <h1>counter project</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Increment Value</button>
      &nbsp;&nbsp;
      <button onClick={decreaseValue}>Decrement Value</button>
    </>
  );
}

export default App;
