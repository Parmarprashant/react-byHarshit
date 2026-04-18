import {useState} from 'react'
import { findfibo } from './fibonacci';
function Example1UseMemo() {
    const [num, setNum] = useState(1);
    const febo = [];
    for(let i = 1; i<=num; i++){
        febo.push(findfibo(i));
    }
    
  return (
    <>
    
    <input 
    type="number"
    name="number"
    id="number"
    value={num} 
    onChange={(e)=> setNum(e.target.value)}/>
    

    {num >0 && <div>
        
        <h2>first {num} fibonacci numbers are </h2>
        {febo.join(", ")}
        
        </div>}

    </>
  )
}

export default Example1UseMemo