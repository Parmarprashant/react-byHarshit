import {useState, useEffect} from 'react'

function CleanupFunction() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("effect called");
        return function (){
            console.log("cleanup function");
        }
        //when value change
        // 1. component re-render
        //2. cleanup function
        //3. useEffects runs
    }, [count])
    function handleCounter(){
        setCount(prev => prev + 1);
    }
  return (
    <>
    
    <h1>Count: {count}</h1>

    <button onClick={handleCounter}>Increase</button>
    
    
    </>
  )
}

export default CleanupFunction