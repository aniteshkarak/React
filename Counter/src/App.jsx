import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addvalue = () => {
    counter +=1
    setCounter(counter)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Time4Code</h1>
      <h2>Counter Value: {counter}</h2>
    <br />
      <button onClick={addvalue} >Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
