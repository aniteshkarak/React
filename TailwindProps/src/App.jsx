import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "anitesh",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 rounded-3xl p-4">Tailwind Text</h1>
      <Card username="Time4Code" btnText="Click Me"/>
      <Card username="Jinda Hu"/>
      
    </>
  )
}

export default App
