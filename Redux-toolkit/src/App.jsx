import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counter/counterSlice';


function App() {

const {count} = useSelector((state)=>{
  return state.counter;
})

console.log(count);
const dispatch = useDispatch();


  return (
    <>

      <h2>Count: {count}</h2>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increase</button>
      <br />
      <br />
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrease</button>
      <br />
      <br />
      <button onClick={()=>{
        dispatch(reset())
      }}>reset</button>

    </>
  )
}

export default App