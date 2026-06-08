import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  // count=5;
  const addvalue=(()=>{
    setCount(count+1);
  })
  const decreasevalue=(()=>{
      setCount(count-1);
  })
  return (
    <>
      <h1>Adarsh and react</h1>
      <h2>counter value {count}</h2>
      <button id="increase" onClick={addvalue}>counter increment {count}</button>
      <br />
      <button id="decrease" onClick={decreasevalue}>counter decrease {count}</button>
      <footer>{count}</footer>
    </>
  )
}

export default App
