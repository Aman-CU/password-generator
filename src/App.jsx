import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characters, setCharacters] = useState(false);

  function passwordGenerator() {
    let pass = "";
    let str = "ABCDEFIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characters) str += "!@#$%^&*()_-+={[}]|;'><,.?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characters]);

  return (
    <>
      <div className="w-full h-screen bg-black py-10">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 ">
          <h1 className="text-white text-center my-3">Password Generator</h1>
          <div className="flex w-full rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none bg-white w-full px-3 py-1 rounded-lg"
              readOnly
            />
            <button className="outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0">
              Copy
            </button>
          </div>
          <div className="flex  text-orange-500 text-sm gap-x-2">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setCharacters((prev) => !prev);
                  }}
                />
                <label>Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
