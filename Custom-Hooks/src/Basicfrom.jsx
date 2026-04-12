import { useEffect } from 'react';
import {useState} from 'react'
import useLocalStorage from './hooks/useLocalStorage';

function Basicfrom() {
 const [firstName, setfirstName]  = useLocalStorage("firstName", "")
  return (
   <>
   
   <form>
    
    <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e)=>{
        setfirstName(e.target.value)
    }} />


   </form>

   <h1>Firstname: {firstName}</h1>
   
   </>
  )
}

export default Basicfrom