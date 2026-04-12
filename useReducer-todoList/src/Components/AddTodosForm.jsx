import {useState,useContext} from 'react'
import { TodosContext } from './TodoProvider';

function AddTodosForm() {
const {dispatch} = useContext(TodosContext)

  const [title, setTitle] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(title.trim().length == 0){
      alert("please fill the input");
      return;
    }
  
  const newTodo = {
    title: title,
    completed: false,
    id: crypto.randomUUID()
  }
  console.log(newTodo)
 dispatch({
  type: "ADD_TODO",
  payload: {newTodo: newTodo}
  
 });
 setTitle("");

}
  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"> Enter your Todo:- </label>
      <input type="text" id='todo' value={title} onChange={(e)=>{
         setTitle(e.target.value);
      }} />
      <button type="submit">Add Todo</button>
    </form>
    
    </>
  )
}

export default AddTodosForm