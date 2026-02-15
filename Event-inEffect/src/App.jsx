import {useState} from 'react'
// import CleanupFunction from './Components/CleanupFunction'
import MouseMoveEvent  from './Components/MouseMoveEvent';


//eventListner
// ussing cleanup Function
function App() {
  const [showCompo, setCompo] = useState(true);
  return (
    <>
    <label htmlFor="showComponent">show component</label>
    <input type="checkbox" name="showComponent" id="showComponent"  checked= {showCompo} onChange={()=>{
      setCompo(!showCompo);
    }}/>
   {showCompo && <MouseMoveEvent/>}
    
    </>
  )
}

export default App