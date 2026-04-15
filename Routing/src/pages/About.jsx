import {useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from '../context/AuthProvider';
function About() {
  const [data, setData] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/users';
   useEffect(()=>{
    async function get(){
    const res = await fetch(URL);
    const resGet = await res.json();
    
    setData(resGet);
     console.log(resGet)
  }
  get();
   }, [])

   const {isLoggedIn, setIsLoggedIn} = useAuth;
  return (
    <div>
      
  {data.map((user) => {
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