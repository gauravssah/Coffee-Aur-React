import { useState } from 'react'

import './App.css'

function App() {
  let value = 20;
  let [counter, setCounter] = useState(0);
  let [incBtnState, setIncBtnState] = useState(false);
  let [decBtnState, setDecBtnState] = useState(false);



  const increaseCounter = () => {
    if (counter == value) {
      setIncBtnState(true)
    } else {
      setCounter(counter + 1);
    }
    if (counter >= 0) {
      setDecBtnState(false)
    }


  };

  const decreseCounter = () => {

    if (counter == 0) {
      setDecBtnState(true)
    } else {
      setCounter(counter - 1);
    }

    if (counter <= value) {
      setIncBtnState(false)
    }

  }

  return (
    <>
      <h1>Coffee or React</h1>
      <p>Counter Value : {counter}</p>

      <button disabled={incBtnState} onClick={increaseCounter}>Add Value +</button>
      <br />
      <br />
      <button disabled={decBtnState} onClick={decreseCounter}>Sub Value -</button>
    </>
  )
}

export default App
