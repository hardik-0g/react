import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate= useNavigate(); // use to navigate to pages

  function handleClick(){
    navigate("/Dashboard");

  }

  return (
    <div>
      i am home page
      <button onClick={handleClick}>
        Click to Dashboard
      </button>
    </div>
  )
}

export default Home
