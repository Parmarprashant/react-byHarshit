import React from 'react'
import {AuthContext} from './AuthProvider'
import { useContext } from 'react'
function BasicDetails() {
    const auth = useContext(AuthContext)
  return (
    <div>BasicDetails <br />
        {auth.username}
        <br />
        {auth.email}
    </div>
  )
}

export default BasicDetails