import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, control,formState: { errors , isSubmitting}} = useForm()    //isSubmitting is a flag who give true if form is under submitting state
  async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000))     // stimulate api calling here form sumbitted after 5 sec
    console.log("submitting the form:",data)
  }

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>First Name:</label>
        <input 
        className={errors.firstName ? 'input-msg' : ''} //. for styling error input box
        {...register('firstName',{ required: true , minLength:{value:3,message:'enter atleast 3 '},maxLength:{value:6,message:'enter atmost 6 '}})}/>   {/* 1st way to print message*/}
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}   {/* for styling error msg*/}

      </div>
      <div>
        <label>Middle Name:</label>
        <input {...register('middleName',{minLength:4})}/>              {/* 2nd way to print message*/}
        {errors.middleName && <p>please enter atleast 4</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input {...register('lastName')}/>
      </div>
      <input type='submit' disabled={isSubmitting} value={isSubmitting ? 'submitting' : 'submit'}/>
    </form>
      
        
    </>
  )
}

export default App
