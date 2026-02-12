import { useState } from 'react'
import './App.css'

function App() {
 
  const [username, setUsaername] = useState("")

  return (
    <>
      <h1>Form Tutorial</h1>
      <form>
      <label htmlFor="username">username: </label>
      <input type="text" id="username" />
      </form>
    </>
  )
}

export default App
