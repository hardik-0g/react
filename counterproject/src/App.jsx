import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalID= setInterval(()=>{
      setCount(prev=>prev+1)
    },1000)

  
    return () => {
      clearInterval(intervalID);
    }
  }, [])
  

  return (
    <>
    <h1>count : {count}</h1>
    
      
    </>
  )
}

export default App
