import {useEffect, useState} from 'react'

const URL = "https://jsonplaceholder.typicode.com/users"
function App() {

    // useEffect(()=>{
    //   fetch(URL)
    //   .then(response =>{
    //    return response.json();
    //   } )
    //  .then(data =>{
    //   console.log(data);
    //  }) 
    // })

    //async await

    const [users, setUsers] = useState([]);

    async function fetchData(){
           const response = await fetch(URL);
           const data = await response.json();
           console.log(data);
           setUsers(data);
    }

    useEffect(()=>{
      fetchData();
    }, [])
  

  return (
    <>
    
    <div>
     <h3>users:- 

      {users.map((data)=>{
        return <div>
          <h4>{data.id}</h4>
          <p>{data.name}</p>

<p>{data.email}</p>
<p>{data.address.street}</p>
        </div>
        
      })}
     </h3>
    </div>

    </>
  )
}

export default App