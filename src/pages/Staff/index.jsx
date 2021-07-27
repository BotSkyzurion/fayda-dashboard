import React from 'react';
import background from '../../background.png'
import { Image } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const styles = {
    heading:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop: '5%',
    }
  }

export function Staff (props) {
 
    const classes = useStyles();
 

    return (
      
           <div className={classes.root}>

   
    <div className="container" >
     
<img src={background} id="bite" alt="Background"/>
<div className="app">
  <div className="heading" style={styles.heading}>
    <div className="avatar">
        <Image src='https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512' width="15%" circular centered/>
    </div>

    
    <h1 style ={{color:'white',fontSize:'30px',fontFamily:'monospace', marginTop:"0px"}}>Equipe Administrative</h1>
 
 <div className="container-centered">


   
    <div className="circle-container">
    <div className="circle">
    <div className="front2">
    <img src={`https://cdn.discordapp.com/avatars/304327970460270592/e750ff00fd613bfb4dd94ebae1a4dc9b.webp`} style={style2} alt="Skyzurion" title="Skyzurion" width="100%" height="auto" centered/>
    </div>
    <div className="back" style={{ boxSizing:"border-box", border:"2px DarkSlateBlue solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
    <h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Chef de Projet</h1> 
   <h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Skyzurion</h1>
    </div>
    
    
   
    </div>
  
   </div>
 
   </div>

   <div>
       
 <div className="container-centered">
 <div className="col-sm-3">
    <div className="circle-container">
    <div className="circle">
    <div className="front">
    <img src={`https://images-ext-1.discordapp.net/external/YL9rGC2wVR7W_A7HVDbNvnJXngu3mXVbYaCLKsSWE8s/https/cdn.discordapp.com/avatars/462672634438483969/a_477f8c0ce76cf7c5a0b86d5bc4d4fa7a.webp`} style={style} alt="Obscurity" title="Obscurity" width="100%" height="auto" centered/>
    </div>
    <div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
    <h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Resp. Comm.</h1> 
   <h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Obscurity</h1>
    </div>
    
    </div>
    </div>
   </div>
        
 </div>

 <div className="container-centered">
 <div className="col-sm-3" style={{marginLeft:"20px"}}>
    <div className="circle-container">
    <div className="circle">
    <div className="front">
    <img src={`https://images-ext-1.discordapp.net/external/R0cO-gwhfFxX6Mz7IQEpEGu0XiR50UHH5X6bKzL8ZTA/https/cdn.discordapp.com/avatars/400730824254685185/ff85acd6a225ebfb5f00b2cb2db2d1b4.webp`} style={style} alt="Princesse Rachel" title="Princesse Rachel" width="100%" height="auto" centered/>
    </div>
    <div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
    <h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Resp. Modération</h1> 
   <h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Rachel</h1>
    </div>
    
    </div>
    </div>
   </div>
        
 </div>

 <div className="container-centered">
 <div className="col-sm-3" style={{marginLeft:"20px"}}>
    <div className="circle-container">
    <div className="circle">
    <div className="front">
    <img src={`https://cdn.discordapp.com/avatars/388985688504270848/32141d88b42a250a1d3dfbffe2cc8bb6.webp`} style={style} alt="NekOrigami" title="NekOrigami" width="100%" height="auto" centered/>
    </div>
    <div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
    <h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Resp. Modération</h1> 
   <h1 style={{marginTop:"-15px", color:'white',fontSize:"16.5px"}}>NekOrigami</h1>
    </div>
    
    </div>
    </div>
   </div>
        
 </div>
        
        
   </div>
   <div>
    <h1 style ={{color:'white', fontSize:'30px',fontFamily:'monospace', marginTop:"5px"}}>Equipe Modération</h1>

    <div className="container-centered">


   
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/345521899515674626/a_691f832a3062aa1cb8c00158c782b6e2.webp`} style={style} alt="Kosmii" title="Kosmii" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Modérateur</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Kosmii</h1>
</div>



</div>

</div>

</div>


<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/782017059705716736/a_98c98a25778815edae48807fbbe22857.webp`} style={style} alt="Kyzuto" title="Kyzuto" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Modérateur</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Kyzuto</h1>
</div>

</div>
</div>
</div>
    
</div>


<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/490878707209076747/80c6213b2690fc94b28b01b6539845b3.webp`} style={style} alt="Just' Fabio" title="Just' Fabio" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Modérateur</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"19px"}}>Just' Fabio</h1>
</div>

</div>
</div>
</div>
    
</div>

<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://images-ext-1.discordapp.net/external/YL9rGC2wVR7W_A7HVDbNvnJXngu3mXVbYaCLKsSWE8s/https/cdn.discordapp.com/avatars/462672634438483969/a_477f8c0ce76cf7c5a0b86d5bc4d4fa7a.webp`} style={style} alt="Obscurity" title="Obscurity" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"10px"}}>Modérateur</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"19px"}}>Obscurity</h1>
</div>

</div>
</div>
</div>
    
</div>

<div>
    


    
</div>
    <h1 style ={{color:'white', fontSize:'30px',fontFamily:'monospace', marginTop:"5px"}}>Equipe Communication</h1>

    
<div className="container-centered"> 
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/506952776442445824/b61725376a8c9817688e6cd237c17ec9.webp`} style={style} alt="Bleuette" title="Bleuette" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"9px"}}>Community Manager</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Bleuette</h1>
</div>



</div>

</div>

</div>

<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/270593544777891841/0bc6afef8740f47a0ee814c58ca0668a.webp`} style={style} alt="Charpentemars" title="Charpentemars" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"9px"}}>Community Manager</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"13px"}}>Charpentemars</h1>
</div>

</div>
</div>
</div>
    

</div>

<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/638405630117412884/ba841d67932797d122bf68e1328c937c.webp`} style={style} alt="fand'arius" title="fand'arius" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"9px"}}>Community Manager</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>fand'arius</h1>
</div>

</div>
</div>
</div>
    
</div>


<div className="container-centered">
<div className="col-sm-3" style={{marginLeft:"20px"}}>
<div className="circle-container">
<div className="circle">
<div className="front">
<img src={`https://cdn.discordapp.com/avatars/529064691767574568/ff88d7ee29bd676d4260ea510ec18040.webp`} style={style} alt="Adrien" title="Adrien" width="100%" height="auto" centered/>
</div>
<div className="back" style={{ boxSizing:"border-box", border:"2px white solid", borderRadius:"50%", background:"url(https://cdn.discordapp.com/attachments/696777817530040440/822866207421235240/anime-minimalism-4k_1541973671.jpg)", backgroundColor:"#5967a8", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"180%"}}>
<h1 style={{marginTop:"25px", color:'white',fontSize:"9px"}}>Community Manager</h1> 
<h1 style={{marginTop:"-15px", color:'white',fontSize:"20px"}}>Adrien</h1>
</div>

</div>
</div>
</div>
    
</div>



</div>
    
   </div>
  </div> 
   </div>
 
    </div>
     
    )
}


const style = {
    boxSizing:"border-box", border:"2px white solid", borderRadius:"50%"
}
const style2 = {
    boxSizing:"border-box", borderColor:"#5967a8", border:"2px DarkSlateBlue solid", borderRadius:"50%"
}