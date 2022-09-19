import React from 'react';
import "./Sidebar.css"
import Sidebaroptions from './Sidebaroptions';

function Sidebar() {
  return (
    <div className='sidebar'>
        <img className='sidebar-logo' src="http://media.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg"></img>
        {/* sidebar options */}
        <Sidebaroptions title="Home" icon="fa-solid fa-house"/>
        <Sidebaroptions title="Search" icon="fa-solid fa-magnifying-glass"/>
        <Sidebaroptions title="Library" icon= "fa-solid fa-book-open"/>
    </div>
  )
}

export default Sidebar