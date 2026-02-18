import {useReducer} from 'react'
import Form from './Components/AddTodosForm'
import Todos from './Components/Todos';
function reducer(todos, action){
  console.log(action);

  if(action.type == "DELETE_TODO"){
    console.log("DELETING TODO")
    console.log(action.payload)
    // const newState = [];

    // for(let todo of todos){
    //   if(todo.id !== action.payload.id){
    //     newState.push(todo)
    //   }
    // }
    // return newState

    return todos.filter(todo => todo.id !== action.payload.id);
  }

  if(action.type == "TOGGLE_COMPLETED"){
    return todos.map(todo =>{
      if(todo.id === action.payload.id){
        return {...todo, completed: !todo.completed};
      }
      else{
        return todo;
      }
    })
  }

  if(action.type == "ADD_TODO"){
    return [...todos, action.payload.newTodo]
  }
  
  return todos;
}

const intialState = [
  {id: "1", title: "teach students", completed: true},
  {id: "2", title: "Play games", completed: false},
  {id: "3", title: "sleep", completed: false},
]

function App() {

  const [todos, dispatch] = useReducer(reducer, intialState);   // todos ==== intialState value

  return (
    <>
    
    <Form dispatch={dispatch}/>
    
    <Todos todos = {todos} dispatch = {dispatch}/>

    
    </>
  )
}

export default App