import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total,setTotal]= useState(1);


  
  // variation 1 - runs on each render
  // useEffect(() => {
  //       alert('i will run at render')
        
  //     });


// variation 2 - runs on 1st render only
  // useEffect(() => {
  //   alert('runs on 1st render only')
    
  // }, [])
  
  // variation 3 - runs only when count is updated
  // useEffect(() => {
  //   alert('run every time when count is updated')
    
  // }, [count])



  // variation 4 - runs only when count or total changes
  // useEffect(() => {
  //   alert('run either count or total changes')
    
  // }, [count,total])
  

  // variation 5 - cleanup function used here when count removed from ui then 'count is unmounted from UI' and then count is updated
  useEffect(() => {
    alert('count is updated')
  
    return () => {
      alert('count is unmounted from UI')
    }
  }, [count]);
  
  
  
  function handleClick(){
    setCount(count+1);
  }
  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
    <>
      <h1>hifdffdf</h1>
      <button onClick={handleClick}>click me</button>
      <br/>
      count is: {count};
      <br/>
      <button onClick={handleClickTotal}>click me</button>
      <br/>
      count is: {total};

      
    </>
  )
}

export default App
