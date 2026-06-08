import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const change = (color) => {
    setColor(color);
  };

  return (
    <div
      className="flex justify-center items-end h-screen"
      style={{ backgroundColor: color }}
    > 
      <div className="border-2 border-black rounded-2xl p-2 mb-5 flex gap-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-xl"
          onClick={() => change("red")}
        >
          Red
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
          onClick={() => change("green")}
        >
          Green
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-black rounded-xl"
          onClick={() => change("yellow")}
        >
          Yellow
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={() => change("blue")}
        >
          Blue
        </button>

        <button
          className="px-4 py-2 bg-pink-500 text-white rounded-xl"
          onClick={() => change("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;

// onclick function always need a function not a return type so if we directly do setColor("Red") so its not a function it has return value
// which contradict the orginal statements which says the value the onclick must have a function so that is why we had to write the 
// call back function not the return statements
