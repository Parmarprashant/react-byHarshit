import {useState, useRef} from 'react'

function ExampleUseRef() {
  // const username = useRef("Jayesh")
  // console.log(username); 

  const h1Ref = useRef();

  function handleChange(){
    console.log(h1Ref)
    const h3Element = h1Ref.current;
    console.log(h3Element)
    h3Element.textContent = "hello samir sir"
    h3Element.style.background = "blue"
  }

  return (
    <>
    
    {/* <h2>username:- {username.current}</h2> */}

    <h3 ref={h1Ref}>hello there</h3>
    <button onClick={handleChange}>change content</button>
    
    </>
  )
}

export default ExampleUseRef