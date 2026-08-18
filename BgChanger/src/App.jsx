import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "#00BFFF" }}
            onClick={() => setColor("#00BFFF")}
          >
            Sky Blue
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl  shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl  shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>

          <button className="outline-none px-4 py-2 rounded-3xl  shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            lavender
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
