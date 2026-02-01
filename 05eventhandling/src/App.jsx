import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[input,inputValue]=useState("");
  function handleClick(){
    alert('i am clicked')
  }
  function mouseOver(){
    alert('mouse is hovered ')
  }
  function handleInput(e){
    console.log('input is entered')
    console.log(e.target.value);
    
    inputValue(e.target.value);
    
  }
  function handleSubmit(e){
    e.preventDefault();
    alert('form submitted');

  }




  return (
    <>
    <button onClick={handleClick}>Click me</button>

    <p onMouseOver={mouseOver} style={{border:"1px solid black"}}> hover me</p>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}></input>
      <button type='sumbit'>Submit</button>
      <p>you typed: {input}</p>
    </form>
    
      
    </>

  )
}

export default App
