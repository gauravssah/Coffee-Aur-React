import { useCallback, useState, useEffect, useRef } from "react"

function App() {
  let [password, setPassword] = useState("123");
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [symbleAllowed, setSymbleAllowed] = useState(false);
  let passwordref = useRef(null);

  let passwordGeneroter = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (symbleAllowed) {
      str += "!@#$%^&*()_+=-";
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(index)
    }

    setPassword(pass);

  }, [setPassword, length, numberAllowed, symbleAllowed]);

  let copypassword = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(passwordGeneroter, [passwordGeneroter, length, numberAllowed, symbleAllowed]);

  return (
    <>

      <div className="div text-center mt-10">
        <div className="inputfildandbtn">
          <input className="inputfild"
            style={{ border: "2px solid black" }}
            type="text" value={password} readOnly ref={passwordref} />
          <button
            onClick={copypassword}
            className=" bg-slate-600 text-white p-1 rounded-xl">Copy</button>
        </div>

        <div className="dependencybox">
          <input onChange={(e) => {
            setLength(e.target.value);

          }}
            type="range" value={length} id="length" min={8} max={20} />
          <label htmlFor="length">Length: {length}</label>

          <input
            onChange={() => setNumberAllowed((prev) => !prev)}
            type="checkbox" name="number" id="number" />
          <label htmlFor="number">Number</label>

          <input
            onChange={() => setSymbleAllowed((prev) => !prev)}
            type="checkbox" name="symble" id="symble" />
          <label htmlFor="symble">Symble</label>
        </div>

      </div>

    </>
  )
}

export default App
