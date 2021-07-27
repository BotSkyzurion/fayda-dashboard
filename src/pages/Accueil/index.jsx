import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
//import Alert from '@material-ui/lab/Alert';
import background from '../../background.png'
/*import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import isReachable  from 'is-reachable';
import { getUserDatails } from '../../utils/api'*/
import { useMediaQuery } from 'react-responsive'


  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const login = () => {
  window.location.href = '/menu'
};



export function Accueil (props) {
  const classes = useStyles();
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  
  let marge="250px"
  if(isTabletOrMobile) {
    marge="125px"
  }

    return (
      <div className={classes.root}>
    
  
   
        <div className="container">
         
    <img src={background} id="bite" alt="Background"/>
    <div className="app"style={{overflow: "hidden"}} >
      <div className="heading" style={styles.heading}>
        <div className="avatar">
            <Image src='https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512' size="medium" circular centered/>
        </div>
       <h1 style ={{color:'white',marginTop:'0%', fontSize:'35px',fontFamily:'monospace'}}>FAYDA</h1>
    
       <h1 style ={{color:'grey',marginTop:'0%', fontSize:'20px',fontFamily:'monospace', marginBottom:"30px"}}>"L'utilitaire discord essentiel pour vos serveurs de discussions"</h1>
       
       <Button inverted color='grey' style={{marginTop:'5px'}} onClick={()=>window.location.href = 'http://fayda-bot.fr/'} >Site Web</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <Button inverted color='grey' style={{marginTop:'5px'}} onClick={login}>Dashboard</Button>
      
       <h1 style ={{color:'white',marginTop:marge, fontSize:'22px',fontFamily:'monospace'}}>Nos Partenaires</h1>
       <a>
			<img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} onClick={()=>window.location.href = 'http://fayda-bot.fr/'} style={{cursor:"pointer"}} alt="Skytsunami" width="50px" height="auto" />
      <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} onClick={()=>window.location.href = 'http://fayda-bot.fr/'} style={{cursor:"pointer"}} alt="Skytsunami" width="50px" height="auto" />
      <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} onClick={()=>window.location.href = 'http://fayda-bot.fr/'} style={{cursor:"pointer"}} alt="Skytsunami" width="50px" height="auto" />
      <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} onClick={()=>window.location.href = 'http://fayda-bot.fr/'} style={{cursor:"pointer"}} alt="Skytsunami" width="50px" height="auto" />
		  </a>
      </div>
      
      </div> 
       </div>
        </div>
    )
}


const styles = {
    heading:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop: '5%',
    }
  }
  /*
let test = (<Collapse in={open}>
  <Alert severity="error"
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setOpen(false);
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
  <h5>Le Dashboard est temporairement inaccessible. Nous sommes désolés pour la gêne occasionnée, veuillez réessayer dans quelques instants.</h5> 
  </Alert>
  </Collapse>)
   */