import {useState} from 'react'

function Array() {
    const [fruits, setFruits] = useState(["mango", "apple"])

    function addFruit(){
        setFruits([...fruits, "riturajRandi"])
    }
  return (
   <>
   <ul>
    {fruits.map((data)=>{
        return <li> {data} </li>;
    })}
   </ul>

   <button onClick={addFruit}>add more</button>
   
   </>
  )
}

export default Array