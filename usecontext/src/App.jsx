import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';



export const userContext= createContext();

//1- create Context
//2- wrap the child inside the provider
//3- pass value
//4- consumer k andar jake ke consume karlo


function App() {
  const [user, setUser] = useState({name:"Hardik"})

  return (
    <>
    <userContext.Provider value={user}>
      <ChildA />
    </userContext.Provider>  
    </>
  )
}

export default App
