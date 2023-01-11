import React from 'react';
import "./Footer.css";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src='https://tse2.mm.bing.net/th?id=OIP.7VRXG0fLMkbT2CfQ6Kj4YAHaHa&pid=Api&P=0' alt="" className='footer-albumLogo'/>
        <div className='footer-songInfo'>
          <h4>StarBoy</h4>
          <p>The Weeknd</p>
        </div>
      </div>

      <div className='footer-center'>
        <ShuffleIcon className="footer-green"/>
        <SkipPreviousIcon className='footer-icon'/>
        <PlayCircleOutlineIcon fontSize='large' className='footer-icon'/>
        <SkipNextIcon className='footer-icon'/>
        <RepeatIcon className="footer-green"/>
      </div>

      <div className='footer-right'>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer