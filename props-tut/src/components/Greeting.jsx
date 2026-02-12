import React, { Children } from 'react'
import Showfullname from './Showname.jsx'
function Greeting({firstname , lastname, user, fullname = "prashantparmar" , children}) {
  return (
    <>
    <div>
      
      <h1>
        {children}
        
      </h1>
      {firstname}
    </div>
    
    </>
  )
  
}

export default Greeting