import { useState } from 'react'
import './App.css'
import Users from './components/Users.jsx'
function App() {
  const [users, setUsers] = useState([
    { id: 1, firstname: "prashant", lastname: "parmar", age: 12 },
    { id: 2, firstname: "sai", lastname: "jaljira", age: 13 },
    { id: 3, firstname: "hetvi", lastname: "idk" , age: 15 },
    { id: 4, firstname: "anisha", lastname: "gaajarr", age: 19 }
  ])

  const increaseId = (id)=>{
    setUsers(preState =>{
      return preState.map(user =>{
      if(user.id === id){
        return{...user, age: user.age + 1}
      }
      else{
        return user;
      }
    })
    })
  }


  const deleteUser = (id)=>{
   const newState = [];
   for(let use of users){
    if(use.id !== id){
      newState.push(use);
    }
   }
   setUsers(newState)
   console.log(newState);
  }

  return (
    <>
      <h1>State Example</h1>
      <Users users = {users} increaseId = {increaseId} deleteuser = {deleteUser}/>
    </>
  )
}
export default App