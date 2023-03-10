import { useEffect } from 'react';
// import { useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(()=>{
    // gets the access token from url
    const hash = getTokenFromUrl();
    window.location.hash="";
    let _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token: _token,
        
      });

      // pass the token to spotify instance
      spotify.setAccessToken(_token); 
      // gets users profile
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user: user,
        });
      }); // returns a promise(Async)

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // discover weekly playlist id
      spotify.getPlaylist('37i9dQZEVXcOM4Bn9ZArJL').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        )
    }
    // console.log('i have a token->', token);
  }, [token, dispatch]);

  return (
    <div className='app'>
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
    </div>
  );
}

export default App;
