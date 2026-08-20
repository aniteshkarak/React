import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

 //UseRef Hook
 const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str +="!@#$%^&*()_+"
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      {/* <h1 className="text-4xl font-bold text-center text-white">PassWord Generator</h1> */}

      {/* <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className='outline-none w-full py-2 px-3 text-black bg-white' 
          placeholder="password" readOnly />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min="6" max="16" 
            value={length} 
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer '
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={(e) => setNumAllowed((prev) => !prev)}
              className='cursor-pointer'
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => setCharAllowed((prev) => !prev)}
              className='cursor-pointer'
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div> */}


      <div className=" w-full max-w-md mx-auto my-8 px-6 py-6 rounded-2xl
        bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950
        border border-gray-700 shadow-2xl shadow-black/40 ">

        {/* ===== TITLE ===== */}
        <h1 className=" text-white text-center text-3xl font-extrabold tracking-wide mb-6 drop-shadow-lg">
          Password Generator
        </h1>

        {/* ===== PASSWORD INPUT + COPY ===== */}
        <div className=" flex overflow-hidden rounded-xl border border-gray-600 bg-gray-950 shadow-lg 
          focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-300 ">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-3 px-4 text-white bg-transparent placeholder-gray-500 font-mono text-sm tracking-wider"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />

          {/* COPY BUTTON */}
          <button
            onClick={copyPasswordToClipboard}
            className=" outline-none px-5 py-2 shrink-0 text-white font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition-all duration-200 shadow-lg ">
            COPY
          </button>
        </div>

        {/* ===== OPTIONS SECTION ===== */}
        <div className=" mt-6 p-4 rounded-xl bg-white/5 border border-white/10 space-y-4 ">

          {/* ===== PASSWORD LENGTH ===== */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-x-3">
              <span className="text-gray-300 text-sm font-medium">
                Length
              </span>

              <input
                type="range"
                min="6"
                max="16"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className=" w-32 accent-blue-500 cursor-pointer "
              />
            </div>

            {/* LENGTH VALUE */}
            <span className=" min-w-[35px] text-center px-2 py-1 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-sm">
              {length}
            </span>

          </div>

          {/* ===== NUMBERS ===== */}
          <div className="flex items-center justify-between">

            <label className=" flex items-center gap-x-3 text-gray-300 text-sm cursor-pointer select-none hover:text-white transition-colors ">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={(e) =>
                  setNumAllowed((prev) => !prev)
                }
                className=" w-4 h-4 accent-blue-500 cursor-pointer"
              />
            
              <span>Numbers</span>
            </label>

            <span className="text-xs text-gray-500">
              0-9
            </span>

          </div>

          {/* ===== CHARACTERS ===== */}
          <div className="flex items-center justify-between">

            <label className=" flex items-center gap-x-3 text-gray-300 text-sm cursor-pointer select-none hover:text-white transition-colors">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={(e) =>
                  setCharAllowed((prev) => !prev)
                }
                className="
                  w-4 h-4
                  accent-blue-500
                  cursor-pointer
                "
              />

              <span>Characters</span>
            </label>

            <span className="text-xs text-gray-500">
              !@#$%
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
