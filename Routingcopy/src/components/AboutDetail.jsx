import {useState, useEffect} from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

export async function details({params}){
    const id = params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = res.json();
    return data;
}

function AboutDetail() {

  
   
    // const [details, setDetails] = useState([]);
    // async function getDetail(){
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    //     const resGet = await res.json();
    //     setDetails([resGet]);
    // }

    // useEffect(()=>{
    //     getDetail()
    // }, [])

const data = useLoaderData();




  return (
    <>
    
    <h1>UserDetail id:- {data.id}</h1>
    {/* {
        data.map((data)=>{
            return <div key={data.id}>
                <h1>{data.email}</h1>
            </div>
        })
    } */}

    {
        <h1>{data.email}</h1>
    }
    
        
    
    </>
  )
}

export default AboutDetail