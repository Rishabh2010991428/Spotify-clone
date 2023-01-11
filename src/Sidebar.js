import React from 'react';
import { useDataLayerValue } from './DataLayer';
import "./Sidebar.css"
import Sidebaroptions from './Sidebaroptions';

function Sidebar() {
  // destructuring and getting playlists
  const[{playlists}, dispatch] = useDataLayerValue();
  return (
    <>
      <div className='sidebar'>
        <img className='sidebar-logo' src="http://media.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg"></img>
        {/* sidebar options */}
        <Sidebaroptions title="Home" icon="fa-solid fa-house" />
        <Sidebaroptions title="Search" icon="fa-solid fa-magnifying-glass" />
        <Sidebaroptions title="Library" icon="fa-solid fa-book-open" />
        <br />
        <strong className='Sidebar-playlist'>PLAYLISTS</strong>
        <hr id='playlist-hrline'/>
        {playlists?.items?.map(playlist=>(
          <Sidebaroptions title={playlist.name}/>
        ))}
      </div>
    </>
  );
}

export default Sidebar