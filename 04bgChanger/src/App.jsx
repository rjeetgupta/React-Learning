import { useState } from "react"

function App() {
  const [color, setColor] = useState("#12e9ec")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-3 rounded-2xl">
          <button
            // Onclick takes function , not return value
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "green"}}
          >green</button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "purple"}}
          >Purple</button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg mr-4 decoration-8"
          style={{backgroundColor: "white"}}
          >White</button>
          <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg mr-4"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button 
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "olive"}}
          >Olive</button>
          <button 
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-4"
          style={{backgroundColor: "gray"}}
          >Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
