import { useState } from 'react'  // This is hooks part i.e to be imported
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // before using hooks you will need to be imported first then use
  
  // [It takes two value first is 0 index value, second one is function]
  let [counter, setCounter] = useState(15)
  // in the curly braces of useState, value can be anything like number, string, object
  
  // let counter = 15;

  const addValue = () => {
    console.log("Clicked", (Math.random() * 10 + 1).toFixed(2))
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);  
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)  
    }
  }
  return (
    <>
      <h1>Chai aur react </h1>
      <h3>counter : {counter} </h3>
      <button onClick={addValue}> Add value : {counter}</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove Value : {counter}</button>
      <p>Footer : {counter} </p>
    </>
  )
}

export default App
