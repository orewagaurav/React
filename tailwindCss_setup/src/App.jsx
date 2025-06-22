import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card.jsx'

function App() {
  let myObj = {
    username:"orewagaurav",
    account:"GitHub"
  }
  let myArr = [1,2,3,4,5]
  
  
  return (
    <div className="flex justify-around p-6 bg-gray-500">
      <div className="w-48 h-32 bg-red-500 shadow-sm rounded-lg p-4">Small Shadow</div>
      <div className="w-48 h-32 bg-red-500 shadow-md rounded-lg p-4">Medium Shadow</div>
      <div className="w-48 h-32 bg-white shadow-lg rounded-lg p-4">Large Shadow</div>
      <div className="w-48 h-32 bg-white shadow-xl rounded-lg p-4">Extra Large Shadow</div>
    </div>
  );
}

export default App;
