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
    <>
      <h1 className="bg-amber-300 text-2xl text-red-700">Hello Developers !</h1>
      <Card course="javaScript" someObj={myObj} btnText="Learn javascript" />
      <Card course="Java" a="https://docs.oracle.com/en/java/"/>
    </>
  );
}

export default App;
