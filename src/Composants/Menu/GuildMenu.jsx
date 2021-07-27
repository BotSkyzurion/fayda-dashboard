import React from 'react';
import './index.css'
import { Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


export const GuildMenuItem = ({guild}) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  if (isTabletOrMobile) {

    return(
      <div className="guild-menu-item2">
            <div className="guild-details" style={{height: "90px", verticalAlign: "center"}}>
              <div className="btn-container" style={{display: "inline", marginTop: "30px"}}>
                <div className="guild-text2" style={{display: "inline-block"}} >
                {guild.name}
                </div>
  
               <div style={{float:"right", display: "inline-block", marginTop: "3%", marginRight: "10%"}}>              
                  <Link to={`/dashboard/${guild.id}/principal`}><Button className="base-btn2 dashboard-btn"> Dashboard</Button></Link>&nbsp;&nbsp;
                  <Link to={`/premium/${guild.id}`}><Button className="base-btn2 premium-btn">Premium 🔒</Button></Link>
                  </div>  
                  
              </div>
             
            </div>
            
      </div>)
  } else {
    return(
    <div className="guild-menu-item">
          <div className="guild-details" style={{height: "90px", verticalAlign: "center"}}>
            <div className="btn-container" style={{display: "inline", marginTop: "30px"}}>
              <div className="guild-text" style={{display: "inline-block"}} >
              {guild.name}
              </div>

             <div style={{ float: "right", display: "inline-block", marginTop: "20px", marginRight: "28px"}}>              
                <Link to={`/dashboard/${guild.id}/principal`}><Button className="base-btn dashboard-btn"> Dashboard</Button></Link>&nbsp;&nbsp;
                <Link to={`/premium/${guild.id}`}><Button className="base-btn premium-btn">Premium 🔒</Button></Link>
                </div>  
                
            </div>

          </div>
          <Box>
              <Box className="guild-icon" style={{backgroundImage:(`url(https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png)`), backgroundSize:"100%", backgroundPosition: "center"}}></Box>
            </Box>
      
    </div>)
  }
}