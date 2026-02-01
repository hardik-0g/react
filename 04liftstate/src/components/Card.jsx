import React from 'react'

export default function Card(props) {
  return (
    <div>
        <input type='text' onChange={(e)=>props.setCount(e.target.value)}/>
        <p>name state variable ke value inside {props.title}: {props.count}</p>
        
      
    </div>
  )
}
