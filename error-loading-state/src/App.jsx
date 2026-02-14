import {useEffect, useState} from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [detail, setDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
   async function fetchData() {
    
    const response = await fetch(URL);
  
    const data = await response.json();
    console.log(data);
    setDetail(data);
    setLoading(false);

   }

   useEffect(()=>{
    fetchData();
   }, [])

   if(isLoading){
    return <h1>loading...</h1>
   }

  return (
    <>
    
     {
      detail.map((data)=>{
        return <div key={data.id} style={{
          padding : "1rem",
          margin: "1rem",
          backgroundColor: "black",
          color: "white"
        }}>
          <p>{data.id}</p>
          <p>{data.email}</p>
          <p>{data.name}</p>
        </div>
      })
     }
    

    </>
  )
}

export default App