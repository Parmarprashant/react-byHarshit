import React, { useEffect, useState } from 'react'

function Example() {
    const [counter, setCounter] = useState(0)

    console.log("component rendered");

    function handleCounter(){
        setCounter(counter + 1);
    }
    useEffect(()=>{
        console.log("useEffect inside");
    }, [counter])
  return (
    <>
    
    <h1>Counter:- {counter}</h1>
    <button onClick={handleCounter}>Increase count</button>

    </>
  )
}

export default Example