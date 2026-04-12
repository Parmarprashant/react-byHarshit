import {useContext} from 'react'
import Todo from './Todo'
import { TodosContext } from './TodoProvider'
function Todos() {
  const {todos, dispatch} = useContext(TodosContext)
  return (
    <div>
       
  {todos.map((todo) => {
  return  <Todo key={todo.id} {...todo} dispatch={dispatch}/>
  })}

    </div>
  )
}

export default Todos