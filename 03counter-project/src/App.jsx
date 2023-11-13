import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const increaseNum = () => {
    if (counter == 20) {

    } else {
      setCounter(counter + 1);
    }

  }

  const decreaseNum = () => {
    if (counter == 0) {

    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Or React</h1>
      <h2>The Number is : {counter}</h2>
      <button onClick={increaseNum}>Add(+)</button>
      <br />
      <br />
      <button onClick={decreaseNum}>Sub(-)</button>

      <p>Footer : {counter}</p>
    </>
  );
}

export default App

// 2.55
