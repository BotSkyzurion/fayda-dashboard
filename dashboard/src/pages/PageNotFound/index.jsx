import React from 'react';
import background from '../../background.png'
import { Image, Button } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';

import ChromeDinoGame from 'react-chrome-dino';


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

export function PageNotFound (props) {
 
    const classes = useStyles();
 

    return (
      
           <div className={classes.root}>

   
    <div className="container" style={{overflow:"hidden"}}>
     
<img src={background} id="bite" alt="Background"/>
<div className="app">
  <div className="heading" style={styles.heading}>
    <div className="avatar">
        <Image src='https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512' size="medium" circular centered/>
    </div>
    <h1 style ={{color:'white',marginTop:'0%', fontSize:'35px',fontFamily:'monospace', textTransform:"uppercase", marginBottom:"0px"}}>ERREUR</h1>
    <hr color="#7e89bb" style={{ height:"auto", width:"130px", marginBottom:"5px", marginTop:"10px"}}/>
   
   <h1 style ={{color:'#5967a8',marginTop:'0%', fontSize:'35px',fontFamily:'monospace', textTransform:"uppercase"}}>Page non trouvée</h1>
 
   <Button inverted color='red' style={{marginTop:'5px'}} onClick={()=>window.location.href = 'http://localhost:3000/'} >Retour à la page d'accueil</Button>
  
   <div style={{marginTop:'2%'}}>
       <ChromeDinoGame />
   </div>
   
  </div>
  
  </div> 
   </div>
 
    </div>
     
    )
}

