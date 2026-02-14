import {useState} from 'react'
import CleanupFunction from './components/CleanupFunction'
function App() {
  const [showCompo, setCompo] = useState(true);
  return (
    <>
    <label htmlFor="showComponent">show component</label>
    <input type="checkbox" name="showComponent" id="showComponent"  checked= {showCompo} onChange={()=>{
      setCompo(false);
    }}/>
   {showCompo && <CleanupFunction></CleanupFunction>}
    
    </>
  )
}

export default App