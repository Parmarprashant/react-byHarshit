import {createContext, useContext, useState} from 'react'
const AuthContext = createContext()
function AuthProvider({children}) {
    const [isLoggedIn, setIsLoggedIn]  = useState(false)
  return (
    <AuthContext value={{ isLoggedIn, setIsLoggedIn }}>
        {children }
    </AuthContext>
  )
}

export function useAuth(){
    return useContext(AuthContext)
}

export default AuthProvider