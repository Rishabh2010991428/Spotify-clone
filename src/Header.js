import { Avatar, Icon } from '@mui/material';
import React from 'react';
import "./Header.css";
import {useDataLayerValue} from "./DataLayer";
// import { useEffect } from 'react';
function Header() {
    const [{user}, dispatch] = useDataLayerValue();

  return (
    <div className='header'>
        <div className='header-left'>
            <Icon/>
            <input placeholder='Search for Artists, Songs, Playlists' type="text" />
        </div>
        
        <div className='header-right'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div> 
  )
}

export default Header;