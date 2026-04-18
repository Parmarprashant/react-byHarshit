import { Outlet, NavLink, useNavigate, useNavigation } from 'react-router-dom'; 
import {useAuth} from '../context/AuthProvider'

function RootLayout() {
    const {isLoggedIn, setIsLoggedIn} = useAuth();
    const navigation = useNavigation();
function LogOut(){
      setIsLoggedIn(false);
      navigate('/login')
    }

    const navigate = useNavigate();
  
  return (
     <>
     
     <h1>Nav</h1>
     <nav>
        <ul>
           <li><NavLink to = '/'>home</NavLink> </li> 
            <li><NavLink to = 'about'>about</NavLink></li>
          <li> <NavLink to = 'products'>products</NavLink> </li>
         {!isLoggedIn && (

         <li><NavLink to = 'login'>login</NavLink> </li>
            )} 

           
        </ul>

        {
          isLoggedIn && (
             <button onClick={LogOut}>Logout</button>
          )
        }

        
     </nav>
     <main>
       {navigation.state === "loading"? (
         <h1>Loading....</h1>
       ):(
        <Outlet></Outlet>
       )}
     </main>
     
     </>
  )
}

export default RootLayout