import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card2 from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl'>
        Tailwind test
      </h1>
      <Card2 channel="chai aur code" payment="onlyCash"/>
      <Card2 channel="sharma ji ki kachori" payment="upi"/>
    </>
  )
}

export default App
