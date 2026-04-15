import {useState} from 'react'
import {useAuth} from '../context/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom';
function Login() {
    const {isLoggedIn, setIsLoggedIn}  = useAuth();
      const location = useLocation();
    const previoudPath = location.state ?. previoudPath || '/about';
const navigate =  useNavigate();
    function clickon(){
        setIsLoggedIn(true);
        navigate(previoudPath, {replace: true})
    }

  
      
  return (
    <div>
        <h1>Login page</h1>
        { !isLoggedIn && (
 <button onClick={clickon}>Login</button>
        )}

       
    </div>
  )
}

export default Login