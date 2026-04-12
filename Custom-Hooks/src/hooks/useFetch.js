import {useEffect, useState} from 'react'

function useFetch(){
    const [data, setData] = useState('');
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const resData = await res.json();
            setData(resData)
         
        }
        fetchData();
    }, [])
    return {data}
}

export default useFetch;