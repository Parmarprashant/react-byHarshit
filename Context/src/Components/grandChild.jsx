import {useContext} from 'react'
import { MyAppContext  } from '../App'




function grandChild() {
  const myfun =  useContext(MyAppContext);
  console.log(myfun)
  return (
    <div
      style={{height: "20vh", marginTop: "1rem" , border: "1px solid black", width: "200px",marginLeft:"1rem", background: "lightBlue"}}
    >grandChild
    <button onClick = {myfun} style={{marginTop: "2rem", paddingLeft :"1px"}}>
        
        click me
        
        </button></div>
  )
}

export default grandChild