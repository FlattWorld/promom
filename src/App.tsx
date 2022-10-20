import { useState } from "react"
import FormOverlay from "./Components/FormOverlay"
import bgImage from '/src/assets/images/bg.jpg'
import logo from '/src/assets/images/logo.jfif'

function App() {
  const [isFormOpen, isFormOpenSet] = useState(true)
  return (
    <div className="h-[100vh] w-full" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
      <header className="w-full flex justify-center bg-white p-2">
      <div className="flex w-full max-w-3xl justify-center">
        <img src={logo} alt="logo" className="h-20" />
      </div>

      </header>
      {/* <button onClick={() => isFormOpenSet(!isFormOpen)} className="border p-2">Toggle</button> */}
      {isFormOpen && <FormOverlay onClose={() => isFormOpenSet(false)} ></FormOverlay>}
    </div>
  )
}

export default App
