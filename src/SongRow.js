import React from 'react'
import './SongRow.css'
function SongRow( track ) {
    console.log(track);
  return (
    <div className='songRow'>
        <img src={track.album.images[0].url} alt=""/>
        <div className='songRow-info'>
            <h1>{track.album.name}</h1>
            <p>
                {track.artists.map((artists)=> artists.name)}
                {track.album.name}
            </p>
        </div>
    </div>
  )
}

export default SongRow