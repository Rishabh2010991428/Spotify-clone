import React from 'react'
import "./Sidebaroptions.css"
function Sidebaroptions(props) {
  return (
    <div className='sidebar-options'>
        <span><i className={props.icon}></i></span>
        <span>{props.title}</span>
    </div>
  )
}

export default Sidebaroptions