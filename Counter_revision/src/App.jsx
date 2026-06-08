import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)
  const addvalue=()=>{
    setCount(count+1);
  }
  const subtractvalue=()=>{
    setCount(count-1);
  }
  return (
    <>
      <h1>HEADER THIS IS HEADER</h1>
      <button onClick={addvalue}>Counter Increment {count}</button>
      <br />
      <button onClick={subtractvalue}>Counter Decreament {count}</button>
      <footer className="bg-red-700">I AM A FOOTER {count}</footer>
    </>
  )
}

export default App
