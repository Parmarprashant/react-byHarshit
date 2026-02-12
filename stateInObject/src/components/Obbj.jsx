import {useState} from 'react'

function obj() {
        const [person, setPerson] = useState({
      id: 12,
      firstName: "mahi",
      lastName: "arora",
      email: "mahiarora@gmail.com",
      phone: 9998804937,
      age: 19
    })

    function increaseAge(){
      setPerson({...person,
        age: person.age += 1
      });
    }
  return (
    <>
    <p>firstName : {person.firstName}</p>
    <p>lastName : {person.lastName}</p>
    <p>age : {person.age}</p>
    <p> email : {person.email}</p>
    <p>phone : {person.phone}</p>
    <p>id : {person.id}</p>
    <button  onClick={increaseAge}>Click me</button>
    </>
  )
}

export default obj