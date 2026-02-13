import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        i am dashboard
        <Outlet/> 
      
    </div>
  )// outlet imp to placed in parent Dashboard for nested childrens
}

export default Dashboard
