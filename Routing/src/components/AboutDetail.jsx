import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
function AboutDetail() {
    const {id} = useParams();
   
    const [details, setDetails] = useState([]);
    async function getDetail(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const resGet = await res.json();
        setDetails([resGet]);
    }

    useEffect(()=>{
        getDetail()
    }, [])
  return (
    <>
    
    <h1>UserDetail id:- {id}</h1>
    {
        details.map((data)=>{
            return <div key={data.id}>
                <h1>{data.email}</h1>
            </div>
        })
    }
    
        
    
    </>
  )
}

export default AboutDetail