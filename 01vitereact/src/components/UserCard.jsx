import React from 'react'
import hardikphoto from "../assets/hardikphoto.png"
import "./UserCard.css";

// data given to usercard and fetched using props.'whatever you want'
const UserCard = (props) => {
  return (
    <div className='UserCard' style={props.style}>
        <p id='name'>{props.name}</p>           
        <img id='image' src={hardikphoto} alt="" />
        <p id='description'>{props.desc}</p>
      
    </div>
  )
}

export default UserCard
