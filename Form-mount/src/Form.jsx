import {useRef, useEffect} from 'react'

function Form() {

    const usernameref = useRef();

    useEffect(()=>{
        usernameref.current.focus();
    })


  return (
    <>
    
    <input type="text" name='textt' ref={usernameref} />
    
    </>
  )
}

export default Form