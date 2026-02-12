import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // const change =  useState("harshit");
  // const firstname = change[0];
  // const changed = change[1];

  const [firstname, changed] = useState("jal")
    function handleClick(){ 
       changed("prashant");
    }

  return (
    <>
     <h1>{firstname}</h1>
     <button onClick = {handleClick}>change name</button>
    </>
  )
}

export default App
