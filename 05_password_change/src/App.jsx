import { useState, useCallback, useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // ref hook
  const passwordRef=useRef(null);
  const randomPassword = useCallback(() => {
    let str =
      "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (characterAllowed) {
      str += "!@#$%^&*()_+"
    }

    let ans = ""

    for (let i = 0; i < counter; i++) {
      let index = Math.floor(Math.random() * str.length)
      ans += str[index]
    }

    setPassword(ans)
  }, [counter, numberAllowed, characterAllowed,setCount])

  useEffect(() => {
    randomPassword()
  }, [counter,numberAllowed,characterAllowed])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    // now select the first three number
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  return (
    <>
      <h1 className="text-5xl flex justify-center m-4 pt-4 text-amber-50">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto rounded-lg px-5 py-4 my-8 text-orange-500 bg-gray-600">
        <h2>Password Generator</h2>
        <div className="flex shadow rounded-xl overflow-hidden mb-4 bg-amber-50">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-amber-50
          px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className="flex items-center gap-x-1">
              <input type="range" 
              min={6}
              max={100}
              value={counter}
              className='cursor-pointer'
              onChange={(e)=>{
                setCount(Number(e.target.value))
              }}
              />
              <label>length:{counter}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              defaultChecked={numberAllowed}
              onChange={(e)=>{
                setNumberAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              defaultChecked={characterAllowed}
              onChange={(e)=>{
                setCharacterAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="characterAllowed">charector</label>
            </div>
            <button></button>
        </div>
      </div>
    </>
  )
}

export default App