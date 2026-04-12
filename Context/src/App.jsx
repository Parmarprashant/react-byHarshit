import React from 'react'
import { createContext } from 'react'
import MyComponent from './Components/myComponent'

export const MyAppContext = createContext();

function App() {

//what is prop drilling 
// ===>>> ye kabhi parents se direct Grand Child me ni jaayega step by step hoga

// parent
//   |
// Mycomponent
//   |
// Child
//   |
// Grand Child


// to Avoid Props Drilling??

// we Use useContext

//how to use Context?

// step:1 ==> import createContext from react
// step:2 ==> create a context outside the main component or app function
// step:3 ==> wrap the app with context.provider

 function myFun(){
  console.log("parent hoon")
 } 


  return (
    <MyAppContext.Provider value={myFun}>
    <div
    style={{height: "100vh", border: "1px solid black", background: "pink"}}
    >
      
      App
      
      <MyComponent myFun = {myFun}/>
      </div>
      </MyAppContext.Provider>
    
  )
}

export default App