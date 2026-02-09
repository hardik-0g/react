import React, { useContext } from 'react'
import {userContext} from '../App'

function ChildC() {
    const user=useContext(userContext);
  return (
    <div>
        <h1>{user.name}</h1>
      
    </div>
  )
}

export default ChildC
