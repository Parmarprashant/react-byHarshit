import React from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();
function AuthProvider({children}) {
  return (
    <AuthContext.Provider value={{
        username: "parv",
        email: "prav@gmail.com"
    }}>
    <div>AuthProvider
        {children}
    </div>
    </AuthContext.Provider>
  )
}

export default AuthProvider