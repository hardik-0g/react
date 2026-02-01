import React from 'react'

function Button(props) {
  return (
    <div>
        <button onClick={props.new}>
            {props.text}
        </button>
        {props.children}
      
    </div>
  )
}

export default Button
