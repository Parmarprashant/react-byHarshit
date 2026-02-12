import User from './components/User'
import './App.css'
const users = [
  {id: 1, firstName: "prashant", lastName: "parmar"},
  {id: 2, firstName: "yash", lastName: "sharma"},
  {id: 3, firstName: "anisha", lastName: "gaajar"}

]
function App() {

  return (
    <>
     {
      users.map((user)=>{
        return(
      <User {...user} key ={user.id}/>
        )
      })
      
     }
    </>
  )
}

export default App
