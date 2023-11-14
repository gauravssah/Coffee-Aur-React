import { useState } from "react"

function App() {

  let srt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let symb = "~!@#$%^&*";
  let pass;

  let [length, setLength] = useState(6);
  let [numChecked, setNumChecked] = useState(false);
  let [symbChecked, setSymbChecked] = useState(false);
  let [password, setPassword] = useState();


  const handleRange = (e) => {
    setLength(e.target.value)
  }

  const generatePassword = () => {
    if (numChecked) {
      srt += num;
    }
    if (symbChecked) {
      srt += symb;
    }

    for (let i = 0; i < length; i++) {
      let char = srt[Math.floor(Math.random() * length)];

      password += char;


    }



  }

  generatePassword()

  return (
    <>
      <div className="container bg-warning mt-5 w-50 p-5">
        <h2 className="text-center">Password Generator</h2>
        <div className="container d-flex">
          <input type="text" className="form-control" placeholder="Password" value={password} readOnly />
          <button type="submit" className="btn btn-primary mx-2">Copy</button>
        </div>

        <div className="container text-center mt-3">

          <input onChange={handleRange} type="range" name="range" id="range" min={6} max={100} />
          <label className="mx-2" htmlFor="range">Length {length}</label>

          <input type="checkbox" name="checknumber" id="checknumber" />
          <label className="mx-2" htmlFor="checknumber">Number</label>

          <input type="checkbox" name="checksymble" id="checksymble" />
          <label className="mx-2" htmlFor="checksymble">Symble</label>

        </div>
      </div >
    </>
  )
}

export default App

// 5.12
