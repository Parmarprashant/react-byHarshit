import Form from './Components/AddTodosForm'
import Todos from './Components/Todos';
import TodoProvider from './Components/TodoProvider';




function App() {
  return (
    <TodoProvider>
    <Form/>
    <Todos/>
    </TodoProvider>
  )
}

export default App