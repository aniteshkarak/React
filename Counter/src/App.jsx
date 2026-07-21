import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  // let counter = 15

  const addvalue = () => {
    if(counter <20){
      counter +=1
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if (counter >0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Time4Code</h1>
      <h2>Counter Value: {counter}</h2>
      <br />
      <br />
      <button onClick={addvalue} >Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
