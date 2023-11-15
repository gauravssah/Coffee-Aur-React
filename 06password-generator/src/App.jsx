import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxtz";

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "~!@#$%^&*(){}[]'<>.,/?+=-_";
    }

    // ----------------------------

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // useRef Hook 

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999); // this is optional for selection any specifice range of text.
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <div className="container bg-warning mt-5 w-50 p-5">
        <h2 className="text-center">Password Generator</h2>

        <div className="container d-flex">
          <input type="text" className="form-control" placeholder="Password" value={password} readOnly ref={passwordRef} />

          <button onClick={copyPasswordToClipboard} type="submit" className="btn btn-primary mx-2">Copy</button>
        </div>

        <div className="container text-center mt-3">

          <input onChange={(e) => {
            setLength(e.target.value);
          }}
            type="range" name="range" id="range" min={6} max={100} value={length} />

          <label className="mx-2" htmlFor="range">Length : {length}</label>

          <input onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
            type="checkbox" name="checknumber" id="checknumber" defaultChecked={numberAllowed} />
          <label className="mx-2" htmlFor="checknumber">Number</label>

          <input onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
            type="checkbox" name="checksymble" id="checksymble" defaultChecked={charAllowed} />
          <label className="mx-2" htmlFor="checksymble">Symble</label>

        </div>
      </div >
    </>
  )
}

export default App

// 5.12
