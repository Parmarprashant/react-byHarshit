import {useEffect, useState} from 'react'

function MouseMoveEvent() {

    const [checker, setChecker] = useState({
        x: 0,
        y: 0
    });

function handleove(e){
    console.log({x: e.clientX, y: e.clientY})
    setChecker({X: e.clientX, Y:  e.clientY})
}
    
useEffect(()=>{
    document.addEventListener("mousemove",   handleove);

    return ()=>{
        document.removeEventListener("mousemove",   handleove)
    }
}, [])

  return (
    <div>
        <p>X = {checker.X} </p>
        <p>Y = {checker.Y}</p>
    </div>
  )
}

export default MouseMoveEvent