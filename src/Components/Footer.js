import React from 'react';
import "./Footer.css";
import {grid} from ma
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <h3>Albums</h3>
      </div>

      <div className='footer-center'>
        <i className="fa-solid fa-shuffle"></i>
        <i className="fa-solid fa-backward"></i>
        <i className="fa-regular fa-circle-play"></i>
        <i className="fa-solid fa-forward"></i>
        <i className="fa-solid fa-repeat"></i>
      </div>

      <div className='footer-right'>
      {/* <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid> */}
      </div>
    </div>
  )
}

export default Footer