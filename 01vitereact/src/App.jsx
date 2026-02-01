
import UserCard from "./components/UserCard"
import './App.css';

function App() {
  
// all are props which is name,desc,style
  return (
    <>
    <div id="container">
      <UserCard name='hardik' desc='desc1' style={{"border-radius":"10px"}} /> 
      <UserCard name='utkarsh' desc='desc2' style={{"border-radius":"10px"}} />
      <UserCard name='aman' desc='desc3' style={{"border-radius":"10px"}} />
    </div>
      

 

    </>
  )
}

export default App
