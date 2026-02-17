import {useState} from 'react'
import Form from './Form'
function App() {
   const [showCompo, setCompo] = useState(true);
  return (
    <>
    
    <label htmlFor="showComponent">show component</label>
    <input type="checkbox" name="showComponent" id="showComponent"  checked= {showCompo} onChange={()=>{
      setCompo(!showCompo);
    }}/>
   {showCompo && <Form/>}
    
    </>
  )
}

export default App