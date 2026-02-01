import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState('')

  return (
    <>
    <Card title="card 1" count={count} setCount={setCount}/>
    <Card title="card 2" count={count} setCount={setCount}/>
    
    
      
    </>
  )
}

export default App
