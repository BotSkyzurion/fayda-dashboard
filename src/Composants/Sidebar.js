import React from "react";
import "./Sidebar.css";
import { SidebarData } from './SidebarData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Sidebar({
    guilds,
    show
}) {
 
    if (guilds.filter(c => c.id === window.location.href.split('/')[4])[0]) {
        let guild = guilds.filter(c => c.id === window.location.href.split('/')[4])[0]
      
    return (
      <div className={show ? "App1 Sidebar active" : "App1 Sidebar"} style={{position: "fixed", zIndex:"5"}}>
          <ul className="SidebarList">
            
            <li key="serveur"
            className="rowserveur"
           // onClick={()=>{window.location.pathname= "/dashboard/"+window.location.href.split('/')[4]+"/principal"}}
                >
                <div className="container2">

           
    <div className="serveur-logo">
		<a>
			<img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Skytsunami" width="100%" height="auto" />
		</a>
        
	</div>
        <div className="serveur-nom">
            {guild.name}
         
        </div>
   
 </div>  
            </li>
<hr color="white" style={{marginBottom:"0"}}/>
   
          {SidebarData.map((val,key)=>{
             
              return(
                  <li 
                  key={key} 
                  id={window.location.pathname === `/dashboard/${window.location.href.split('/')[4]}${val.link}` ? "active" : ""}
                  className="row"
                  onClick={()=>{window.location.pathname= "/dashboard/"+window.location.href.split('/')[4]+val.link}}
                  > 
                 
                  <div id="icon">{val.icon}</div>
                  <div id="title">
                      {val.title}
                  </div>
                
                  </li>
            

              )
          })}  
          <hr color="white" style={{marginTop:"0"}}/>
            <li
              key="retour"
              className="rowretour"
              onClick={()=>{window.location.pathname= "/menu/"}}
            >
                 <div id="icon"><ArrowBackIosIcon/></div>
                  <div id="title">
                      Retour
                  </div>

            </li>

          </ul>
      </div>
  );
} else {
    window.location.pathname = "/"
}
}

export default Sidebar;