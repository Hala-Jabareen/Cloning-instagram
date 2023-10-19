import React from 'react'
import "./InProgress.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import rocketlaunch from "./rocket-launch.png"

function InProgress() {
  return (
    <div >
      <Grid container spacing={2}>
      <Grid item xs={2}>
        <Sidebar/>
      </Grid>
      <Grid item xs={9}>
        <div className='progress'>
          <h1>In Progress</h1>
        <p>This page is currently under construction and will be coming soon</p>
        <img src={rocketlaunch} alt='rocket' /> 
        </div>
       </Grid>
    </Grid>
    </div>
  )
}

export default InProgress
