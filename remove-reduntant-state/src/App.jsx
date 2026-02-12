import { useState } from 'react'
import Fullname from './Components/Fullname'

function App() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  function handleFirst(e) {
    setFirstname(e.target.value)
  }

  function handleLast(e) {
    setLastname(e.target.value)
  }

  return (
    <>
      <form>
        <h1>Form</h1>

        <br />

        <label htmlFor="name">Firstname: </label>
        <input 
          type="text"  
          id="name"  
          value={firstname}
          onChange={handleFirst}
        />

        <br /><br />

        <label htmlFor="lastName">Lastname: </label>
        <input 
          type="text" 
          id="lastName"  
          value={lastname}
          onChange={handleLast}
        />

        <br /><br />

        <h2>User Detail</h2>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>

        <Fullname 
          firstname={firstname} 
          lastname={lastname} 
        />
      </form>
    </>
  )
}
//every thing will re-render when use of useState()

export default App
