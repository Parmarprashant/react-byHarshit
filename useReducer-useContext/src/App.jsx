import {useReducer, useState} from 'react'


function reducer(state, action){
  console.log("inside reducer")
  if(action.type === "INCREMENT"){
     return {...state ,count: state.count + 1}
  }
   if(action.type === "RESET"){
     return {...state ,count: 0}
  }
   if(action.type === "decrement"){
     return {...state ,count: state.count - 1}
  }
  return state;
}   //reducer input function;
function App() {
    //  const [counter, setCounter] = useState(0);
    const intialState = {count: 0,firstName: "prashant"}
  const [state, dispatch] = useReducer(reducer, intialState)
    function handleIncrease(){
        dispatch({ //action object
          type: "INCREMENT"  //action type
        }); 
    }
    function handleReset(){
       dispatch({
        type: "RESET"
       });
    }
    function handleDecrease(){
       dispatch({
        type: "decrement"
       });
    }
  return (
    <div>
      <h1>hello {state.firstName}</h1>
        <h1>{state.count}</h1>
        <button onClick = {handleIncrease}>increase</button>
        <button onClick = {handleReset}>reset</button>
        <button onClick = {handleDecrease}>decrease</button>
        </div>
  )
}

export default App