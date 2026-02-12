import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/fun.jsx'
import Nice from './components/heck.jsx'
import './components/heloo.css'

const firstName = "prashant";

function check(name){
  return name.toUpperCase();
}

function App() {

  return (
    <>
       <Hello></Hello>
       <Nice/>

       <h1 className='bg-dark'>heelooo</h1>
       <h2>{check("anisha")}</h2>
    </>
  )
}

export default App
