import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
function Customapp() {
  return(
  <h2>customapp is here!!!</h2>
  )
}
// const reactelement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }
// so we cant pass this react element into this 
// lets see what we can pass
// const Arr=(
//   <h1>Hello Baby doll</h1>
// )

// now lets create a custom react element which can be render by the render function
// react.createElement is injected by babble 
const Reactelement=React.createElement(
  'h1',
    {style:{
    backgroundColor:'red',
    color:'white'
    }
  },
  'hmm heyyy'
)
// this is a jsx element store in a variable so that is why we dont need Arr() like this
createRoot(document.getElementById('root')).render(
  Reactelement
)
// since in jsx also it is javascript having html so instead of this <custom/> we can write this in the function also which is Customapp() like thiu

// har react ek bundler use karta hai and yeh bundler behind the screen matching karta hai to correct syntax and all
//so the html wala synatx ki hoti hai parsing and it gets converted into normal synatx which we have studied in custom react 
// basically this render function expects a certain kind of function of type of things to run in backend so we cant't pass
// out custom react syntax as it doesnt match our predefined syntax of the root




// ===============================
// REACT NOTES (SHORT)
// ===============================

// 1. RENDER
// --------------------------------
// Render means displaying UI on screen.

// Example:
// render(<App />)

// React converts component into real HTML.


// 2. JSX
// --------------------------------
// JSX = HTML-like syntax inside JavaScript.

// Example:
// const element = <h1>Hello</h1>

// JSX is NOT understood by browser directly.


// 3. BABEL
// --------------------------------
// Babel converts JSX into normal JavaScript.

// Example:
// import { jsx as _jsx } from "react"
// is automatically added by bable when jsx is converted into js
// JSX:
// <h1>Hello</h1>

// Converted by Babel:
// React.createElement('h1', null, 'Hello')


// 4. React.createElement()
// --------------------------------
// Syntax:

// React.createElement(
//     tag,
//     props,
//     children
// )

// Example:

// const element = React.createElement(
//     'h1',
//     {style:{color:'red'}},
//     'Hello'
// )


// 5. COMPONENT
// --------------------------------
// A component is a function returning JSX.

// Example:

// function App() {
//     return <h1>Hello</h1>
// }

// Component names must start with CAPITAL letter.


// 6. Rendering Component
// --------------------------------
// Correct:
// <App />

// Wrong:
// <app />

// Lowercase tags are treated as HTML tags.


// 7. DEFAULT EXPORT
// --------------------------------
// Export:

// export default App

// Import:

// import App from "./App"


// 8. NAMED EXPORT
// --------------------------------
// Export:

// export function App(){}

// Import:

// import { App } from "./App"


// 9. SELF CLOSING TAG
// --------------------------------
// Example:

// <img />
// <input />
// <App />

// React requires tags to be closed properly.


// 10. STYLE IN REACT
// --------------------------------
// Styles are passed as objects.

// Example:

// <h1 style={{
//     backgroundColor:'red',
//     color:'white'
// }}>
// Hello
// </h1>

// CSS properties use camelCase.


// 11. OBJECT LOOPING
// --------------------------------
// for...in → objects

// for...of → arrays/iterables

// Example:

// for(let key in obj){
//     console.log(key)
// }


// 12. DYNAMIC OBJECT ACCESS
// --------------------------------
// Fixed property:
// obj.name

// Dynamic property:
// obj[key]


// 13. React Element Variable
// --------------------------------
// Example:

// const Arr = <h1>Hello</h1>

// Use directly:
// render(Arr)

// NOT:
// Arr()

// Because it is an object, not function.


// 14. RE-RENDER
// --------------------------------
// When state changes, React updates UI again.

// This is called re-rendering.


// 15. useState
// --------------------------------
// Used for state management.

// Example:

// const [count,setCount] = useState(0)


// 16. IMPORTANT FLOW
// --------------------------------
// JSX
//  ↓
// Babel converts
//  ↓
// React.createElement()
//  ↓
// React Element Object
//  ↓
// ReactDOM renders to browser