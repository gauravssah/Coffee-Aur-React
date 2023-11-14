import './App.css'
import { useState } from 'react';
import Buttons from './components/Buttons';

function App() {

  const [color, setColor] = useState("pink")

  const btnClick = (e) => {
    let newBgColor = e.target.textContent;
    setColor(newBgColor);
  }

  document.body.style.backgroundColor = color;


  return (
    <div className="button-container">
      <Buttons bgColor="red" onclickFunction={btnClick} />
      <Buttons bgColor="blue" onclickFunction={btnClick} />
      <Buttons bgColor="green" onclickFunction={btnClick} />
      <Buttons bgColor="yellow" onclickFunction={btnClick} />
      <Buttons bgColor="purple" onclickFunction={btnClick} />
      <Buttons bgColor="orange" onclickFunction={btnClick} />
      <Buttons bgColor="pink" onclickFunction={btnClick} />
      <Buttons bgColor="white" onclickFunction={btnClick} />
      <Buttons bgColor="gray" onclickFunction={btnClick} />

    </div>
  )
}

export default App
