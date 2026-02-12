import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  function handleCounter(){
    console.log("function called")
    setCounter(prev => (prev + 1))
    console.log(counter);
  }


  return (
    <>
    
   <h1>Counter:- {counter}</h1>
   <button onClick={handleCounter}>add</button>
    
    </>
  )
}

export default App