import React from 'react'

function Todo({completed, id, title, dispatch}) {

  function handleDelete(){
    dispatch({
      type: "DELETE_TODO", payload: {id: id}  //normally id bhi pass kr hai
    });
  }

  function handleToggle(){
    console.log("handle toggled")
    dispatch({
      type: "TOGGLE_COMPLETED", payload: {id: id}  //normally id bhi pass kr hai
    });
  }
  return (
    <>
    <div style={{padding: "1rem", background: "#cecece", margin: "1rem", borderRadius: "1rem" }}>
  <h4>Id:- {id}</h4>
  <h4>title:- {title}</h4>
  <h4>completed: {completed? "true" : "false"}</h4>
  <button onClick={handleDelete}>delete</button>
  <button onClick={handleToggle}>Toggle</button>
  </div>
    
    </>
  )
}

export default Todo