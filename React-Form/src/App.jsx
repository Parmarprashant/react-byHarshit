import { useState } from 'react'
import Submitted from './Components/Submit.jsx'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  function OnChange(e){
    setUsername(e.target.value);
  }
  return (
    <>
     <form>
      <label htmlFor="username">Username: </label>
      <input type="text" id='username' value = {username}  onChange= {OnChange} />
     </form>


     <Submitted></Submitted>
    </>
  )
}

export default App
