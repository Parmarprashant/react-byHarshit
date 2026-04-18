import {useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
export async function fetchAbout(){
  const res = fetch('https://jsonplaceholder.typicode.com/users');
  const data =  (await res).json();
  return data
}

function About() {
const gettt = useLoaderData();
console.log(gettt)

  return (
    <div>
      
  {gettt.map((user) => {
  return <div  style={{border: "1px solid black", padding: "1rem", marginBottom: "1rem"}} key={user.id}>
    <Link to={user.id.toString()}>
     <h4 style={{color: "purple"}} >Name: {user.name}</h4>
     </Link>
     <h4>id: {user.id}</h4>
  </div>
})}
      
    </div>
  )
}

export default About