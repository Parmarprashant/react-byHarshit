import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gender, setGender] = useState("Male");

  return (
    <>
    <label htmlFor="male">Male</label>
     <input type="radio" id='male' name='gender' checked = {gender === "Male"} onChange={()=>{
      setGender("Male");
     }} />
     <label htmlFor="female">female</label>
     <input type="radio" id='female' name='gender' checked = {gender === "female"} onChange={()=>{
      setGender("female");
     }}/>
    </>
  )
}

export default App
