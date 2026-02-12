import {useRef} from 'react'

function App() {

   const usernameRef = useRef()
   function handleRef(e){
    e.preventDefault();
    const usernameInput = usernameRef.current;
    console.log(usernameInput.value)
   }
  return (
    <>
    <form>
    <label htmlFor="username" >Username:- </label>
    <input type="text" id='username' ref={usernameRef} />
    <br />
    <br />
    <button onClick={handleRef}>Submit</button>
    </form>
    </>
  )
}

export default App