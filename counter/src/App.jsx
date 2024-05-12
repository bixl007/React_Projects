import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const addValue = () => {
    if(counter<20){

      setCount(counter + 1)
    }
  }
  const removeValue = () => {
    if(counter>0){

      setCount(counter - 1)
    }
  }

  return (
    <>
      <h1>Digit OnClick Counter</h1>
      <h2>Counter Value: <b>{counter}</b></h2>
      <div className="button"><button onClick={addValue}>Add Value</button>
      <br /><button onClick={removeValue}>Remove Value</button></div>
      
      <h3>Cc: Xyrix</h3>
    </>
  )
}

export default App
