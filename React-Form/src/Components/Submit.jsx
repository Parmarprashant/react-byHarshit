import {useState} from 'react'

function Submit() {
    const [username, setName] = useState("");
    function handleChange(e){
        setName(e.target.value);
        console.log(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
         console.log("hello", username);
    }
  return (
    <>
       <form onSubmit={handleSubmit}>
        <label htmlFor="Named">UsernameD: </label>
        <input type="text" id='Named' value = {username} onChange={handleChange}/>
        <button type='submit'>Submit</button>
       </form>

       <h2>Usernamed: {username}</h2>
    </>
  )
}

export default Submit