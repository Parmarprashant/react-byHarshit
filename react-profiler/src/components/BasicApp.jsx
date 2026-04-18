import {useState} from 'react'
import ExtraComponent from './ExtraComponent'
function BasicApp() {
  const [details, setDetails] = useState({
  anything: ""
});

function handleInput(e) {
  setDetails({
    ...details,
    anything: e.target.value
  });
}

function clear() {
  setDetails({
    anything: ""
  });
}
  return (
   <>
   <h1>Basic app</h1>
   <div>
    
    <br />

    <input type="text" name="anything" id="" value={details.anything} onChange={handleInput} />
    <button onClick={clear}>Clear it</button>
    
   </div>
   
   
   </>
  )
}

export default BasicApp