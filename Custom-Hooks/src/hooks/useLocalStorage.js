import {useState, useEffect} from 'react'

function useLocalStorage(key, initalValue) {
       const [state, setState] = useState(()=>{
        return JSON.parse(localStorage.getItem("firstname")) || initalValue;
    })

    useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state))
    }, [state])
   return [state, setState]
}

export default useLocalStorage