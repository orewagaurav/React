import Test from "./test"
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const buttonRef = useRef(null);
  const toggleRef = useRef(null);
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    console.log(`First rendering...`);
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'red';
    }
  }, [])

  return (
    <div className="container">
      <Test />
      <div className="card flex items-center gap-4">
        <div style={{ fontSize: '1.875rem', fontWeight: '500', color: '#ef4444' }}>Hello World</div>
        <p>orenawa kaizokuni naruhodu</p>
        <h2>Ohayo Gozaimasu</h2>
        <h1 style={{ color: '#16a34a' }}>Zoro Juro</h1>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button 
          ref={buttonRef} 
          onClick={() => setCount(count + 1)} 
          className="btn-primary"
        >
          click me {count}
        </button>
        <button 
          ref={toggleRef} 
          onClick={() => setShowBtn(!showBtn)} 
          className="btn-success"
        >
          Show Btn {count}
        </button>
      </div>
      {showBtn && (
        <button className="mt-4 btn-warning">Touch me !!</button>
      )}
    </div>
  )
}

export default App;
