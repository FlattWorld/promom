import { useState } from "react"
import FormOverlay from "./Components/FormOverlay"
import bgImage from '/src/assets/images/bg.jpg'

function App() {
  const [isFormOpen, isFormOpenSet] = useState(true)
  return (
    <div className="App h-[100vh] w-full" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover'}}>
      {/* <button onClick={() => isFormOpenSet(!isFormOpen)} className="border p-2">Toggle</button> */}
      {isFormOpen && <FormOverlay onClose={() => isFormOpenSet(false)} ></FormOverlay>}
    </div>
  )
}

export default App
