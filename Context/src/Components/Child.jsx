import React from 'react'
import GrandChild from './grandChild'
function Child() {
  return (
    <div
    
    style={{height: "40vh", marginTop: "1rem" , border: "1px solid black", width: "300px",marginLeft:"1rem", background: "beige"}}
    >Child
    
    <GrandChild></GrandChild>
    
    </div>
  )
}

export default Child