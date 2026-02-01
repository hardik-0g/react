

import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Children from './components/Children'

function App() {

  const [count, state]=useState(0);
  function newone(){
    state(count+1);
  }
  

  return (
    <>
      <Children name="unique">
        
        <p>hi i am hardik</p>
        <h1>i am from kanpur</h1>

      </Children>
      <Button new={newone} text='click me'>

        <h1>{count}</h1>


      </Button>
    </>
  )
}

export default App
