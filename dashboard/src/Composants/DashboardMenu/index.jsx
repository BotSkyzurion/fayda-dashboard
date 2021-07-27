import React, {useRef, useState } from 'react';
import {makeStyles, Input } from '@material-ui/core';
import Sidebar from "../Sidebar";
import { RiMenu2Fill } from 'react-icons/ri'
import { useMediaQuery } from 'react-responsive'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import ChatIcon from '@material-ui/icons/Chat';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./index.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Image, table } from 'semantic-ui-react';
import background from '../../background.png'
import Popup from '../popup.js'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export function DashBoardMenuP({
    history,
    guildId,
    user,
    config,
    updateprefix,
    updateGuildNick,
    guilds,
    roles,
    channels,
    guildinfos,
    nick
}) {
    
    let categories = 0;
    let textuels = 0;
    let vocaux = 0;
    let channelog = null;
    channels.forEach(async(e)=>{
      if (e.id === config.logschannel) {
        channelog = e
      }
      if (e.type === 0) {
        textuels++;
      } else {
        if (e.type === 4) {
          categories++;
        } else {
          if (e.type === 2) {
            vocaux++;
          }
        }
      }
    })
    
    let membres = guildinfos.approximate_member_count
    let connectés = guildinfos.approximate_presence_count
    const classes = useStyles();
    const [leprefixsave, setprefixsave ] = React.useState(config.prefix);
    const prefixRef = useRef('') 
    const nickRef = useRef('') 

    const sendPrefix = () => {
      if (prefixRef.current.value === leprefixsave) return;
      console.log('teste')
      setprefixsave(prefixRef.current.value)
        updateprefix(prefixRef.current.value)
    }

    const sendNick = () => {    
 
      updateGuildNick(nickRef.current.value)
  }
  let surnom = 'Fayda'
  if (nick !== null) {
    surnom = nick
  }
    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
    const [ showNav, setShowNav ] = useState(isTabletOrMobile ? false : true)
    const [ mobile ] = useState(isTabletOrMobile ? true : false)
    const [alert, setAlert] = React.useState(false);

    let langues = ['Français', 'English', 'Español'];
    const inputLabel = React.useRef(null);

    const [logschecked, setCheckedlogs] = React.useState(config.logsstatut === 0 ? false : true);
    const [logschannel, setLogsChannel] = React.useState(channelog === null ? "Aucun" : channelog.id);

    const ChangeLogStatut = (event) => {
      setCheckedlogs(event.target.checked);
    };

    let permadminrole;
    let permmodrole;
    let permrp;
    roles.forEach(async(role)=>{
      if (role.id === config.permadmin) {
        permadminrole = role
      } else {
        if (role.id === config.permmod) {
          permmodrole = role
        } else {
          if (role.id === config.permrp) {
            permrp = role
          }
        }
      }
    })
     let verifadmin = permadminrole === undefined ? "Aucun" : permadminrole.id
     let verifmod = permmodrole === undefined ? "Aucun" : permmodrole.id
     let verifrp = permrp === undefined ? "Aucun" : permrp.id

const [perma, setPerma] = React.useState(verifadmin);
const [permm, setPermm] = React.useState(verifmod);
const [permr, setPermr] = React.useState(verifrp);

    const [langue, setLangue] = React.useState(config.langue.replace('fr','Français').replace('en','English').replace('es','Español'));

  const changementlangue = event => {
    console.log(event.target.value)
    setLangue(event.target.value);
  };
  
  const changementLogsChannel = event => {
    console.log(event.target.value)
    setLogsChannel(event.target.value);
  };
  
  const changementperma = event => {
    console.log(event.target.value)
    setPerma(event.target.value);
  };
  const changementpermm = event => {
    console.log(event.target.value)
    setPermm(event.target.value);
  };
  const changementpermr = event => {
    console.log(event.target.value)
    setPermr(event.target.value);
  };
    
  const [helpPopup, setHelpPopup] = useState(false)
  
    let guild = guilds.filter(c => c.id === window.location.href.split('/')[4])[0]


    return (
        <div>
          <img src={background} id="bite" alt="Background"/>
          
          <Popup  trigger={helpPopup} setTrigger={setHelpPopup}>
            <h3 style={{fontSize:"20px"}}>Vous avez besoin d'aide concernant notre bot ?</h3>
            <hr></hr>
            <p style={{marginTop:"20px", fontSize:"15px"}}>Si vous rencontrez un quelconque problème avec notre bot Discord ou notre Site Web, contactez-nous dès à présent par <a href="mailto:contact@fayda-bot.fr" title="Adresse Mail de Contact" style={{color:"#5d6ca1",fontWeight:"bold"}}>Adresse Mail</a> !</p> 
            <p style={{marginTop:"20px", fontSize:"15px"}}> Vous pouvez de même rejoindre notre <a href="https://discord.gg/8wTvpWu" title="Invitation Discord - Support" style={{color:"#5d6ca1",fontWeight:"bold"}}>Serveur Support</a> sur Discord où un membre du staff pourra vous aider à résoudre votre problème. </p>
          </Popup>
          {mobile && <header style={{color: "white"}}>
        
            <RiMenu2Fill className="menup" style={{marginLeft:"10px", marginTop:"3px",marginBottom:"2px", cursor:"pointer"}} onClick={()=> setShowNav(!showNav)}/>
            <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} style={{float:"right",marginRight:"10px",marginTop:"3px"}} alt="Fayda" width="40px" height="auto" />

          </header>}
         <Sidebar guilds={guilds} show={showNav}/>
           <div style={{  marginLeft:`${mobile ? "20px" : "300px"}`, paddingTop:"30px", color:"white" }}>
         
             </div>
             <div className="avatar" style={{marginLeft:`${mobile ? "0px" : "280px"}`}}>
            <Image src='https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512' size="small" centered circular/>
        </div>
            <div style={{  marginLeft:`${mobile ? "0px" : "280px"}` , textAlign:'center', color:"white",marginBottom:`${langue !== "Français" ? "20px" : "40px"}`,fontSize:"30px", fontWeight:"bold", fontFamily:"monospace"}}>
            PANEL DE GESTION
           
            {langue !== "Français" ?  <h3 style={{maxWidth:"96%",fontSize:"15px",backgroundColor:"#F5414c",padding: "10px 10px 15px",borderRadius:"5px",marginTop:"20px"}}>⚠️ This website is currently only available in French. You can still use the website with the automatic translation, an update will be done soon for others languages.</h3> : null}
        </div>

             <Grid container spacing={3} justify="center" style={{marginLeft:`${mobile ? "0px" : "120px"}`,paddingRight:`${mobile ? "30px" : "0px"}` }}>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", textAlign:'center', color:"white", borderRadius:"15px", boxShadow:"5px 5px 10px #212121"}}>
            <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "17px" : "20px"}`}}>Informations Serveur</div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>Identifiant : <div style={{display:'inline',color:"white",fontSize:`${mobile ? "14px" : "15px"}`}}>{guild.id} <FileCopyIcon className='buttoncopie' onClick={() => {navigator.clipboard.writeText(`${guild.id}`); setAlert(true); setTimeout(() => { setAlert(false) }, 5000);}} style={{color:'white', height: "20px", width: "15px"}}/> </div> </div>
        
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Membres : <div style={{display:'inline',color:"white"}}>{membres} ( {connectés} <ExpandLessIcon style={{color:'#03fc2c', height: "18px", width: "18px"}}/> )</div> </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Channels : <div style={{display:'inline',color:"white"}}>{textuels} textuels</div> </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "83px" : "100px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingTop:'5px'}}>{vocaux} vocaux </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "83px" : "100px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingTop:'5px'}}>{categories} catégories </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Rôles : <div style={{display:'inline',color:"white"}}>{roles.length}</div> </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Emojis : <div style={{display:'inline',color:"white"}}>{guildinfos.emojis.length}</div> </div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px', paddingBottom:"18px"}}>Créateur : <div style={{display:'inline',color:"white"}}>{guildinfos.emojis.length}</div> </div>

          </Paper>
        </Grid>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", textAlign:'center', color:"white", borderRadius:"15px",boxShadow:"5px 5px 10px #212121"}}>
          <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "18px" : "20px"}`}}>Paramètres du bot</div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
          Prefix de votre serveur :
          </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>
          <form className={classes.root} noValidate autoComplete="off">
            <Input defaultValue={config.prefix} color="secondary" inputProps={{ 'aria-label': 'description' }} style={{color:'white'}} onKeyPress={(ev) => {

                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  sendPrefix()
                }
              }} inputRef={prefixRef} /> 
</form>    
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Surnom du bot :
          </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>
          <form className={classes.root} noValidate autoComplete="off">
            <Input defaultValue={surnom} color="secondary" inputProps={{ 'aria-label': 'description' }} style={{color:'white'}} disabled onKeyPress={(ev) => {

                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  sendNick()
                }
              }} inputRef={nickRef} /> 
</form>    
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Langue de votre serveur :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-langue-label">
            
        </InputLabel>
        <Select
          labelId="liste-langue-label"
          id="liste-langue"
          value={langue}
          color="secondary"
          onChange={changementlangue}
          style={{color:'white'}}
        >
          {langues.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
          </Paper>
        </Grid>
      
      </Grid>
      <Collapse in={alert} style={{paddingLeft:`${mobile ? "15px": "340px"}`, maxWidth:`${mobile ? "95.5%": "60%"}`, paddingTop:`${alert ? "10px": "0px"}`}}>
  <Alert severity="success"   
    action={
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setAlert(false);
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    }
  >
  <h5>Identifiant Copié avec succès !</h5> 
  </Alert>
  </Collapse>


    <Grid container spacing={3} justify="center" style={{marginLeft:`${mobile ? "0px" : "120px"}`,paddingRight:`${mobile ? "30px" : "0px"}`,paddingTop:'20px' }}>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", color:"white", borderRadius:"15px", boxShadow:"5px 5px 10px #212121"}}>
            <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "16px" : "20px"}`,marginLeft:`${mobile ? "8px" : "20px"}`}}>LOGS</div>
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "20px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:"15px", paddingBottom:"15px"}}>
            <FormControlLabel
        checked={logschecked}
        onChange={ChangeLogStatut}
        labelPlacement='end'
        control={<Checkbox icon={<AssignmentLateOutlinedIcon style={{color:'#adffa1', height: `${mobile ? "20px" : "25px"}`, width: `${mobile ? "20px" : "25px"}`, marginLeft:`${mobile ? "12px" : "0px"}`}}/>} checkedIcon={<AssignmentLateRoundedIcon style={{color:'#5eff45', height: `${mobile ? "20px" : "25px"}`, width: `${mobile ? "20px" : "25px"}`, marginLeft:`${mobile ? "12px" : "0px"}`}}/>} name="checkedH" />}
        label={mobile ? "Affiche des messages à toute modification." : "Envoyer les messages d'avertissements à chaque action sur votre serveur."}
      />
          </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "13px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Channel où afficher les avertissements :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-logs-label">
            
        </InputLabel>
        <Select
          labelId="liste-logs-label"
          id="liste-logs"
          value={logschannel}
          color="secondary"
          onChange={changementLogsChannel}
          style={{color:'white'}}
        >
           <MenuItem key='laucun' value="Aucun">Aucun Channel</MenuItem>
          {channels.map(item => (
            <MenuItem key={"l"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
          </Paper>
        </Grid>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", color:"white", borderRadius:"15px",boxShadow:"5px 5px 10px #212121"}}>
          <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "16px" : "20px"}`,marginLeft:`${mobile ? "8px" : "20px"}`}}>PERMISSIONS</div>

          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "13px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Permission Administrateur :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-permadmin-label">
            
        </InputLabel>
        <Select
          labelId="liste-permadmin-label"
          id="liste-permadmin"
          value={perma}
          color="secondary"
          onChange={changementperma}
          style={{color:'white'}}
        >
           <MenuItem key='aaucun' value="Aucun">Aucun rôle</MenuItem>
          {roles.map(item => (
            <MenuItem key={"a"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

      <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "13px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Permission Modérateur :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-permmod-label">
            
        </InputLabel>
        <Select
          labelId="liste-permmod-label"
          id="liste-permmod"
          value={permm}
          color="secondary"
          onChange={changementpermm}
          style={{color:'white'}}
        >
           <MenuItem key='maucun' value="Aucun">Aucun rôle</MenuItem>
          {roles.map(item => (
            <MenuItem key={"m"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

      <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "13px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Permission RôlePlay :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-permRP-label">
            
        </InputLabel>
        <Select
          labelId="liste-permRP-label"
          id="liste-permRP"
          value={permr}
          color="secondary"
          onChange={changementpermr}
          style={{color:'white'}}
        >
           <MenuItem key='raucun' value="Aucun">Aucun rôle</MenuItem>
          {roles.map(item => (
            <MenuItem key={"r"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

          </Paper>
        </Grid>
      
      </Grid>
   <div style={{  marginLeft:`${mobile ? "0px" : "280px"}` , textAlign:'center', color:"white",paddingBottom:'10px',fontSize:"15px", fontWeight:"bold", fontFamily:"monospace",marginTop:"20px",cursor:"pointer"}} onClick={()=>setHelpPopup(true)}>
            <HelpOutlineIcon style={{verticalAlign:"middle",height:"20px",width:"20px"}}/> Besoin d'aide ?
            </div>

    </div>
       

        
    )

}

  

export function DashBoardMenuS({
  history,
  guildId,
  user,
  config,
  updateprefix,
  updateGuildNick,
  guilds,
  roles,
  channels,
  guildinfos,
  nick
}) {
  
  let categories = 0;
  let textuels = 0;
  let vocaux = 0;
  channels.forEach(async(e)=>{
    if (e.type === 0) {
      textuels++;
    } else {
      if (e.type === 4) {
        categories++;
      } else {
        if (e.type === 2) {
          vocaux++;
        }
      }
    }
  })
  
  let membres = guildinfos.approximate_member_count
  let connectés = guildinfos.approximate_presence_count
  const classes = useStyles();
  const [leprefixsave, setprefixsave ] = React.useState(config.prefix);
  const prefixRef = useRef('') 
  const nickRef = useRef('') 

  const sendPrefix = () => {
    if (prefixRef.current.value === leprefixsave) return;
    console.log('teste')
    setprefixsave(prefixRef.current.value)
      updateprefix(prefixRef.current.value)
  }

  const sendNick = () => {    

    updateGuildNick(nickRef.current.value)
}
let surnom = 'Fayda'
if (nick !== null) {
  surnom = nick
}

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  const [ showNav, setShowNav ] = useState(isTabletOrMobile ? false : true)
  const [ mobile ] = useState(isTabletOrMobile ? true : false)
  const [alert, setAlert] = React.useState(false);

  let langues = ['Français', 'English', 'Español'];
  const inputLabel = React.useRef(null);
 

  const [langue, setLangue] = React.useState(config.langue.replace('fr','Français').replace('en','English').replace('es','Español'));

const changementlangue = event => {
  setLangue(event.target.value);
};

  const [checked, setChecked] = React.useState(['cmd1']);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      // ACTIVER
      newChecked.push(value);
    } else {
      // DESACTIVER
      newChecked.splice(currentIndex, 1);
    }
   
    setChecked(newChecked);
  };

  let guild = guilds.filter(c => c.id === window.location.href.split('/')[4])[0]


  return (
      <div>
        {mobile && <header style={{color: "white"}}>
      
          <RiMenu2Fill className="menup" style={{marginLeft:"10px", marginTop:"3px",marginBottom:"2px", cursor:"pointer"}} onClick={()=> setShowNav(!showNav)}/>
          <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} style={{float:"right",marginRight:"10px",marginTop:"3px"}} alt="Fayda" width="40px" height="auto" />

        </header>}
       <Sidebar guilds={guilds} show={showNav}/>
         <div style={{  marginLeft:`${mobile ? "20px" : "300px"}`, paddingTop:"50px", color:"white" }}>
         <h1 style={{marginBottom:"20px"}}>Commandes disponibles :</h1>
         
         <List className={classes.root} style={{backgroundColor:'#444f75', maxWidth:"96%", marginRight:"30px", borderColor:"white",borderStyle:"solid",borderRadius:"15px"}}>
    <ListItem key='1'>
      <ListItemIcon>
        <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
      </ListItemIcon>
      <ListItemText id="switch-cmd1" primary="Commande" secondary='Description de la commande' classes={{secondary:'description-cmd', primary:"titre"}}/>
      <ListItemSecondaryAction style ={{marginRight:"5%"}}>
        <Switch
          edge="end"
          onChange={handleToggle('cmd1')}
          checked={checked.indexOf('cmd1') !== -1}
          color="default"
          inputProps={{ 'aria-labelledby': 'switch-cmd1' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem key='2'>
      <ListItemIcon >
        <ChatIcon style ={{color:'white', height: "25px", width: "30px"}} />
      </ListItemIcon>
      <ListItemText id="switch-cmd2" primary="Commande" secondary='Description de la commande' classes={{primary:"titre",secondary:"description-cmd"}}/>
      <ListItemSecondaryAction style ={{marginRight:"5%"}}>
        <Switch
          edge="end"
          onChange={handleToggle('cmd2')}
          checked={checked.indexOf('cmd2') !== -1}
          color="default"
          inputProps={{ 'aria-labelledby': 'switch-cmd2' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
    
  </List>
          
           </div>
      
     
           <Grid container spacing={3} justify="center" style={{marginLeft:`${mobile ? "0px" : "125px"}`,paddingRight:`${mobile ? "30px" : "0px"}`, paddingTop:"50px" }}>
      <Grid item xs={mobile ? 6 : 4}>
        <Paper className={classes.paper} style={{backgroundColor:"#444f75", textAlign:'center', color:"white"}}>
          <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "17px" : "20px"}`}}>Informations Serveur</div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>Identifiant : <div style={{display:'inline',color:"white",fontSize:`${mobile ? "14px" : "15px"}`}}>{guild.id} <FileCopyIcon className='buttoncopie' onClick={() => {navigator.clipboard.writeText(`${guild.id}`); setAlert(true); setTimeout(() => { setAlert(false) }, 5000);}} style={{color:'white', height: "20px", width: "15px"}}/> </div> </div>
      
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Membres : <div style={{display:'inline',color:"white"}}>{membres} ( {connectés} <ExpandLessIcon style={{color:'#03fc2c', height: "18px", width: "18px"}}/> )</div> </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px'}}>Channels : <div style={{display:'inline',color:"white"}}>{textuels} textuels</div> </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "83px" : "100px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingTop:'5px'}}>{vocaux} vocaux </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "83px" : "100px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingTop:'5px'}}>{categories} catégories </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be", paddingTop:'10px', paddingBottom:"15px"}}>Rôles : <div style={{display:'inline',color:"white"}}>{roles.length}</div> </div>

        </Paper>
      </Grid>
      <Grid item xs={mobile ? 6 : 4}>
        <Paper className={classes.paper} style={{backgroundColor:"#444f75", textAlign:'center', color:"white"}}>
        <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "18px" : "20px"}`}}>Paramètres du bot</div>
        <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
        Prefix de votre serveur :
        </div>
        <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>
        <form className={classes.root} noValidate autoComplete="off">
          <Input defaultValue={config.prefix} color="secondary" inputProps={{ 'aria-label': 'description' }} style={{color:'white'}} onKeyPress={(ev) => {

              if (ev.key === 'Enter') {
                ev.preventDefault();
                sendPrefix()
              }
            }} inputRef={prefixRef} /> 
</form>    
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Surnom du bot :
        </div>
        <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>
        <form className={classes.root} noValidate autoComplete="off">
          <Input defaultValue={surnom} color="secondary" inputProps={{ 'aria-label': 'description' }} style={{color:'white'}} disabled onKeyPress={(ev) => {

              if (ev.key === 'Enter') {
                ev.preventDefault();
                sendNick()
              }
            }} inputRef={nickRef} /> 
</form>    
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Langue de votre serveur :
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "19px" : "33.5px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"white", paddingBottom:"15px"}}>
<FormControl variant="standard" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="liste-langue-label">
          
      </InputLabel>
      <Select
        labelId="liste-langue-label"
        id="liste-langue"
        value={langue}
        color="secondary"
        onChange={changementlangue}
        style={{color:'white'}}
      >
        {langues.map(item => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
    </div>
        </Paper>
      </Grid>
    
    </Grid>
    <Collapse in={alert} style={{paddingLeft:`${mobile ? "15px": "340px"}`, maxWidth:`${mobile ? "95.5%": "60.2%"}`, paddingTop:`${alert ? "10px": "0px"}`}}>
<Alert severity="success"   
  action={
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        setAlert(false);
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  }
>
<h5>Identifiant Copié avec succès !</h5> 
</Alert>
</Collapse>
<div style={{  marginLeft:`${mobile ? "20px" : "350px"}`, paddingTop:"25px", color:"white" }}>
  LOGS + PERMISSIONS

  </div>
      </div>

      
  )

}




export function DashBoardMenuC({
  history,
  guildId,
  user,
  config,
  updateprefix,
  updateGuildNick,
  guilds,
  roles,
  channels,
  guildinfos,
  nick
}) {
  
 

  const classes = useStyles();



  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  const [ showNav, setShowNav ] = useState(isTabletOrMobile ? false : true)
  const [ mobile ] = useState(isTabletOrMobile ? true : false)

let commandesdisabled = ['cmd1']

  const [checked, setChecked] = React.useState(commandesdisabled);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      // ACTIVER
      newChecked.push(value);
    } else {
      // DESACTIVER
      newChecked.splice(currentIndex, 1);
    }
   
    setChecked(newChecked);
  };

  const [ selected, setSelected ] = useState('modération')
 
  
    
const rôleplaydescription = {
    
  "sms" :"Envoie un SMS à la personne mentionner.",
  "fiche" :"Permet de vous faire une fiche RolePlay et les voir.",
  "embrasse" :"Demander l'accord à la personne mentionné pour l'embrasser.",
  "dé" :"Lance un dé de 6 faces.",
  "tire" :"Tirez sur une personne et regardez où la balle arrive.",
  "mariage" :"Permet de vous marier avec la personne.",
  "divorce" :"Permet de divorcer avec une personne.",
  "gifle" :"Permet de gifler une personne.",
  "vie" :"Permet de regarder la vie restante à la personne.",
  "soigne" :"Permet de soigner une personne si vous êtes Médecin.",
  "money" :"Permet d'avoir votre montant d'argent sur vous.",
  "classement-money" :"Regarder le classement des joueurs ayant le plus d'argent sur votre serveur.",
  "salaire" :"Permet de recevoir votre paye.",
  "pay" :"Permet de payer quelqu'un avec votre argent.",
  "météo" :"Activer ou désactiver l'annonce de la météo.",
  "addmoney" :"Permet d'ajouter de l'argent à quelqu'un sur votre serveur.",
  "delmoney" :"Permet d'enlever de l'argent à quelqu'un sur votre serveur.",
  "roue" :"Tentez de gagner à la roue.",
  "case" :"Permet d'ouvrir une boite mystère.",
  "faim" :"Permet d'accéder à un système de faim.",
  "shop" :"Ouvrir le shop et voir les objets à vendre.",
  "fish" :"Permet de pêcher avec votre canne à pêche.",
  "inventaire" :"Permet de voir la contenance de votre inventaire.",
  "appel" :"Permet de faire un appel envers un service de secours, d'entreprise,...",
  "vol" :"Tenter de voler de l'argent liquide de l'utilisateur !",
  "paris" :"Parier de l'argent ( RolePlay ) sur un pile ou face ! ( Solo ou Duel )",
  "amende" :"Donner des amendes aux utilisateurs et accéder à toutes les amendes impayées.",
  "narration":"Parler sous forme de narration dans un channel RolePlay."
}

const modérationdescription = {
  "panel" :"Vous permet d'avoir une grande partie des informations de votre serveur.",
 "purge" :"Supprime entre 1 et 100 messages.",
 "kick" :"Expulser la personne mentionnée après la commande.",
 "ban" :"Bannir la personne mentionnée après la commande.",
 "config-sms" :"Change le rôle obligatoire pour procéder à la commande /sms @user.",
 "mute" :"Permet de mute un utilisateur sur le serveur.",
 "unmute" :"Permet d'unmute un utilisateur sur le serveur.",
 "check-pubs" :"Permet de voir les personnes ayant des invitations dans leur overlay.",
 "lock" :"Permet de fermer des channels temporairement.",
 "unlock" :"Permet de réouvrir les channels fermés.",
 "setWelcome" :"Paramétrez le système de bienvenue sur votre serveur.",
 "setGoodbye" :"Paramétrez le système d'au revoir sur votre serveur.",
 "warn" :"Permet de warn la personne mentionnée.",
 "warnings" :"Permet de regarder les warns de la personne mentionnée.",
 "delwarn" :"Supprime le warn sélectionné avec le numéro.",
 "cooldown" :"Permet de limiter un temps entre chaque message.",
 "roles" :"Gérer les rôles des utilisateurs ou avoir la liste des rôles.",
 "logs" :"Vous permet de garder un oeil de votre serveur.",
 "report" :"Vous permet de signaler un utilisateur sur votre serveur.",
 "permissions" :"Gérer les rôles ayant les permissions RolePlay/Modérateur/Administrateur.",
 "ticket" :"Permet de créer un ticket de renseignement/d'aide sur un serveur discord.",
 "mod" :"Permet d'activer ou de désactiver la sécurité d'un channel (anti-spam/anti-raid/anti-liens/anti-insultes)",
 "captcha" :"Permet de mettre la sécurité du captcha sur votre serveur.",
 "slowmode" :"Permet de limiter un temps entre chaque message dans un channel comme des salons publicitaires.",
 "nsfw" :"Activer ou Désactiver la partie NSFW du bot.",
 "convocation" :"Convoquer un ou plusieurs utilisateurs dans un channel.",
 "sécurité":"Activer ou Désactiver les différentes fonctions de sécurité de notre bot."
 }

 const musiquesdescription = {
  "play" :"Permet de faire jouer le bot une musique dans un salon vocal",
  "skip" :"Permet de passer à la musique suivante en cas d'écoute",
  "pause" :"Permet de mettre en pause la musique en cours",
  "reprendre" :"Permet de reprendre la musique en cours",
  "attente" :"Permet de voir les musiques dans la file d'attente",
  "maintenant" :"Permet de voir la musique en cours de lecture",
  "stop" :"Permet de stopper la musique en cours",
  "radio" :"Permet de faire jouer le bot une radio dans un salon vocal",
  "playlist":"Permet de vous créer votre propre playlist et la lire"
 }


 const jeuxdescription = {
  "tic-tac-toe | morpion":"Joue avec un ami au morpion.",
  "pof":"Lance une partie de pile ou face.",
  "tue":"Tuer l'un de vos camarades.",
  "say":"Fait parler le bot à votre place dans un embed.",
  "avatar":"Affiche votre avatar ou celui d'une autre personne.",
  "morse":"Transmet un texte en un code Morse.",
  "3D":"Transmet un texte en un texte 3D.",
  "césar":"Transmet un texte en un code César.",
  "blagues":"Donne une blague aléatoire.",
  "vdm":"Donne une vie de merde aléatoire.",
  "ppc":"Lance une partie de pierre papier ciseaux.",
  "bingo":"Lance une partie où il vous faudra chercher le bon nombre. ( entre 1 et 100 )",
  "gif":"Recherche un GIF avec le nom inséré après la commande.",
  "roulette":"Choisit au hasard un membre du serveur.",
  "speed-test":"Démarquez-vous dans un combat de vitesse.",
  "roulette-russe | rr":"Tentez votre chance dans une roulette russe.",
  "chuck":"Regardez des memes sur Chuck Norris.",
  "anonyme":"Permet de discuter avec des personnes sans savoir son nom.",
  "battle":"Défier en duel l'un de ses amis dans une battle."
 }

 const informationsdescription = {
  "serveurinfo | si":"Accédez aux informations du serveur.",
  "userinfo | ui":"Permet de vous donner des informations sur le joueur mentionné ou vous",
  "bot-info | bi":"Accédez aux informations du bot.",
  "channelinfo | ci":"Donne des informations sur le channel où vous faites la commande.",
  "développement":"Accéder à la liste du staff du bot.",
  "membres":"Permet d'afficher le nombre de personnes sur le serveur.",
  "ping":"Vérifier la latence du bot.",
  "help":"Permet d'afficher la liste des commandes disponibles sur le bot.",
  "helpmp":"Permet d'afficher la liste des commandes disponibles par message privé",
  "findusers":"Permet d'afficher la liste des personnes commençant par le texte indiqué après la commande.",
  "réputation":"Permet de voir le nombre de réputation qu'à une personne.",
  "classement-réputation":"Permet de voir le classement des réputations",
  "rép-add":"Permet d'ajouter de la réputation à quelqu'un",
  "level":"Permet de savoir votre level ou celui d'un autre",
  "config-level":"Permet de configurer le level sur votre serveur ( actif ou non )",
  "classement-level":"Regarder le classement des joueurs les plus actifs sur discord"
 }

const autresdescription = {
  "invitation":"Permet d'inviter quelqu'un sur votre serveur.",
  "bot-invite":"Permet d'inviter le bot sur votre serveur.",
  "aide | support":"Permet de contacter le staff ou d'avoir des informations en cas de besoin.",
  "proposition":"Envoyer une proposition sur votre serveur.",
  "bot-proposition":"Envoyer une proposition pour le bot.",
  "report-bug":"Faire part d'un bug que vous avez rencontré.",
  "serveur-support":"Permet d'accéder au serveur support du bot.",
  "afk":"Mettez-vous afk sur tous les serveurs ayant le bot Fayda afin de prévenir vos amis de votre absence. ",
  "setprefix":"Vous permet de changer le prefix sur votre serveur.",
  "invites":"Avoir la liste de toutes les invitations de votre serveur.",
  "reaction-menu":"Ajout un menu de rôles par réactions sur votre serveur.",
  "notif":"Permet de mentionner un rôle uniquement à l'aide d'un nom ou d'un identifiant.",
  "calculatrice":"Faire des calculs en tout genre.",
  "anniversaire":"Annoncer l'anniversaire de vos utilisateurs au bon jour."
}
function Modération() {
      
      var modération = [
  
        `panel`,
        `purge`,
        `kick`,
        `ban`,
        `config-sms`,
        `mute`,
        `unmute`,
        `check-pubs`,
        `lock`,
        `unlock`,
        `setWelcome`,
        `setGoodbye`,
        `warn`,
        `warnings`,
        `delwarn`,
        `cooldown`,
        `roles`,
        `logs`,
        `report`,
        `permissions`,
        `ticket`,
        `mod`,
        `captcha`,
        `slowmode`,
        `nsfw`,
        `convocation`,
        `sécurité`
    ]
    
  
    const listItems = modération.map((commande) =>
  <ListItem key={commande}>
      <ListItemIcon>
        <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
      </ListItemIcon>
      <ListItemText id="switch-cmd" primary={commande} secondary={modérationdescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
      <ListItemSecondaryAction style ={{marginRight:"5%"}}>
        <Switch
          edge="end"
          onChange={handleToggle(commande)}
          checked={checked.indexOf(commande) === -1}
          color="default"
          inputProps={{ 'aria-labelledby': 'switch-cmd' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
  
        
      
      return (
      <div>
        {listItems}
      </div>
      );
}


function RôlePlay() {
      
  var Roleplay = [
    `sms`,
    `fiche`,
    `embrasse`,
    `dé`,
    `tire`,
    `mariage`,
    `divorce`,
    `gifle`,
    `vie`,
    `soigne`,
    `money`,
    `classement-money`,
    `salaire`,
    `pay`,
    `météo`,
    `addmoney`,
    `delmoney`,
    `roue`,
    `case`,
    `faim`,
    `shop`,
    `case`,
    `fish`,
    `inventaire`,
    `appel`,
    `vol`,
    `paris`,
    `amende`,
    `narration`
]




const listItems = Roleplay.map((commande) =>
<ListItem key={commande}>
  <ListItemIcon>
    <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
  </ListItemIcon>
  <ListItemText id="switch-cmd" primary={commande} secondary={rôleplaydescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
  <ListItemSecondaryAction style ={{marginRight:"5%"}}>
    <Switch
      edge="end"
      onChange={handleToggle(commande)}
      checked={checked.indexOf(commande) === -1}
      color="default"
      inputProps={{ 'aria-labelledby': 'switch-cmd' }}
    />
  </ListItemSecondaryAction>
</ListItem>
);

    
  
  return (
  <div>
    {listItems}
  </div>
  );
}



function Autres() {
      
  var autres = [
    `invitation`,
    `bot-invite`,
    `aide | support`,
    `proposition`,
    `bot-proposition`,
    `report-bug`,
    `serveur-support`,
    `afk`,
    `setprefix`,
    `invites`,
    `reaction-menu`,
    `notif`,
    `calculatrice`,
    `anniversaire`
]




const listItems = autres.map((commande) =>
<ListItem key={commande}>
  <ListItemIcon>
    <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
  </ListItemIcon>
  <ListItemText id="switch-cmd" primary={commande} secondary={autresdescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
  <ListItemSecondaryAction style ={{marginRight:"5%"}}>
    <Switch
      edge="end"
      onChange={handleToggle(commande)}
      checked={checked.indexOf(commande) === -1}
      color="default"
      inputProps={{ 'aria-labelledby': 'switch-cmd' }}
    />
  </ListItemSecondaryAction>
</ListItem>
);

    
  
  return (
  <div>
    {listItems}
  </div>
  );
}


function Informations() {
      
var informations = [
    
  `serveurinfo | si`,
  `userinfo | ui`,
  `bot-info | bi`,
  `channelinfo | ci`,
  `développement`,
  `membres`,
  `ping`,
  `help`,
  `helpmp`,
  `findusers`,
  `réputation`,
  `classement-réputation`,
  `rép-add`,
  `level`,
  `config-level`,
  `classement-level`

]




const listItems = informations.map((commande) =>
<ListItem key={commande}>
  <ListItemIcon>
    <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
  </ListItemIcon>
  <ListItemText id="switch-cmd" primary={commande} secondary={informationsdescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
  <ListItemSecondaryAction style ={{marginRight:"5%"}}>
    <Switch
      edge="end"
      onChange={handleToggle(commande)}
      checked={checked.indexOf(commande) === -1}
      color="default"
      inputProps={{ 'aria-labelledby': 'switch-cmd' }}
    />
  </ListItemSecondaryAction>
</ListItem>
);

    
  
  return (
  <div>
    {listItems}
  </div>
  );
}

function Musiques() {
      
  var musiques = [
    `play`,
    `skip`,
    `pause`,
    `reprendre`,
    `attente`,
    `maintenant`,
    `stop`,
    `radio`,
    `playlist`
]


const listItems = musiques.map((commande) =>
<ListItem key={commande}>
  <ListItemIcon>
    <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
  </ListItemIcon>
  <ListItemText id="switch-cmd" primary={commande} secondary={musiquesdescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
  <ListItemSecondaryAction style ={{marginRight:"5%"}}>
    <Switch
      edge="end"
      onChange={handleToggle(commande)}
      checked={checked.indexOf(commande) === -1}
      color="default"
      inputProps={{ 'aria-labelledby': 'switch-cmd' }}
    />
  </ListItemSecondaryAction>
</ListItem>
);

    
  
  return (
  <div>
    {listItems}
  </div>
  );
}

function Jeux() {
      
  var jeux = [
    `tic-tac-toe | morpion`,
    `pof`,
    `tue`,
    `say`,
    `avatar`,
    `morse`,
    `3D`,
    `césar`,
    `blagues`,
    `vdm`,
    `ppc`,
    `bingo`,
    `gif`,
    `roulette`,
    `speed-test`,
    `roulette-russe | rr`,
    `chuck`,
    `anonyme`,
    `battle`
]


const listItems = jeux.map((commande) =>
<ListItem key={commande}>
  <ListItemIcon>
    <ChatIcon style={{color:'white', height: "25px", width: "30px" }}/>
  </ListItemIcon>
  <ListItemText id="switch-cmd" primary={commande} secondary={jeuxdescription[commande]} classes={{secondary:'description-cmd', primary:"titre"}}/>
  <ListItemSecondaryAction style ={{marginRight:"5%"}}>
    <Switch
      edge="end"
      onChange={handleToggle(commande)}
      checked={checked.indexOf(commande) === -1}
      color="default"
      inputProps={{ 'aria-labelledby': 'switch-cmd' }}
    />
  </ListItemSecondaryAction>
</ListItem>
);

    
  
  return (
  <div>
    {listItems}
  </div>
  );
}
  
  

  return (
      <div>
        {mobile && <header style={{color: "white"}}>
      
          <RiMenu2Fill className="menup" style={{marginLeft:"10px", marginTop:"3px",marginBottom:"2px", cursor:"pointer"}} onClick={()=> setShowNav(!showNav)}/>
          <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} style={{float:"right",marginRight:"10px",marginTop:"3px"}} alt="Fayda" width="40px" height="auto" />

        </header>}
       <Sidebar guilds={guilds} show={showNav}/>
         <div style={{  marginLeft:`${mobile ? "20px" : "300px"}`, paddingTop:"50px", color:"white" }}>
         <h1 style={{marginBottom:"20px",textAlign:'center'}}>Commandes activées/désactivées</h1>
        <h3 style={{maxWidth:"96%",fontSize:"15px",backgroundColor:"#F5414c",padding: "10px 10px 15px",borderRadius:"5px",marginBottom:"20px"}}>Cette page n'est utile qu'en cas de désactivation/réactivation d'une commande facilement. Une simple description est donnée sur notre Site Web, vous pouvez toujours utiliser /help "Nom de la Commande" sur votre serveur Discord pour avoir plus d'informations sur l'une d'entre elles !</h3>
         <div style={{textAlign:"center",marginBottom:"20px"}}>
         {mobile ? (
         <div><ButtonGroup size="medium" variant="contained" color="primary" aria-label="large outlined primary button group" style={{marginRight:"30px"}}>
            <Button style={{backgroundColor:`${selected === "modération" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('modération')}>Modération</Button>
            <Button style={{backgroundColor:`${selected === "rôleplay" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('rôleplay')}>RôlePlay</Button>
            <Button style={{backgroundColor:`${selected === "musiques" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('musiques')}>Musiques</Button>
          </ButtonGroup>
          <ButtonGroup size="medium" variant="contained" color="primary" aria-label="large outlined primary button group" style={{marginRight:"30px"}}>
            <Button style={{backgroundColor:`${selected === "jeux" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('jeux')}>Jeux</Button>
            <Button style={{backgroundColor:`${selected === "informations" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('informations')}>Informations</Button>
            <Button style={{backgroundColor:`${selected === "autre" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('autre')}>Autres</Button>
          </ButtonGroup></div>
          ) : (
          <div>
            <ButtonGroup size="large" variant="contained" color="primary" aria-label="large outlined primary button group">
            <Button style={{backgroundColor:`${selected === "modération" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('modération')}>Modération</Button>
            <Button style={{backgroundColor:`${selected === "rôleplay" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('rôleplay')}>RôlePlay</Button>
            <Button style={{backgroundColor:`${selected === "musiques" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('musiques')}>Musiques</Button>
            <Button style={{backgroundColor:`${selected === "jeux" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('jeux')}>Jeux</Button>
            <Button style={{backgroundColor:`${selected === "informations" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('informations')}>Informations</Button>
            <Button style={{backgroundColor:`${selected === "autre" ? "#33408a": "#3f51b5"}`}} onClick={()=> setSelected('autre')}>Autres</Button>
          </ButtonGroup>
          </div>
          )}
         </div>
        
         <List className={classes.root} style={{backgroundColor:'#444f75', maxWidth:"96%", marginRight:"30px", borderColor:"white",borderStyle:"solid",borderRadius:"15px"}}>
      
    {selected === "modération" && <Modération/>}
    {selected === "rôleplay" && <RôlePlay/>}
    {selected === "musiques" && <Musiques/>}
    {selected === "jeux" && <Jeux/>}
    {selected === "informations" && <Informations/>}
    {selected === "autre" && <Autres/>}
  </List>
          
           </div>
      
     
      </div>

      
  )

}



export function DashBoardMenuU({
  history,
  guildId,
  user,
  config,
  updateprefix,
  updateGuildNick,
  guilds,
  roles,
  channels,
  guildinfos,
  nick
}) {
  
  
  

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  const [ showNav, setShowNav ] = useState(isTabletOrMobile ? false : true)
  const [ mobile ] = useState(isTabletOrMobile ? true : false)

 
  let guild = guilds.filter(c => c.id === window.location.href.split('/')[4])[0]


  let levelusers = {
    "Skyzurion":{
      level:5,
      xp:566
    },
    "Jimmy":{
      level:3,
      xp:235
    },
    "Jean":{
      level:2,
      xp:596
    },
    "Julie":{
      level:2,
      xp:285
    },
    "Eude":{
      level:1,
      xp:544
    }
  }
  const classes = useStyles();
   
  let channearr = null;
  let channedép = null;
  channels.forEach(async(e)=>{
    if (e.id === config.welcomechannel) {
      channearr = e
    } else {
      if (e.id === config.goodbyechannel) { 
        channedép = e
      }
    }
 
  })

  const inputLabel = React.useRef(null);

     const [channelarrivée, setChannelArr] = React.useState(channearr === null ? "Aucun" : channearr.id);
     const [channeldépart, setChannelDép] = React.useState(channedép === null ? "Aucun" : channedép.id);

    const changementChannelArr = event => {
      console.log(event.target.value)
      setChannelArr(event.target.value);
    };
    
    const changementChannelDép = event => {
      console.log(event.target.value)
      setChannelDép(event.target.value);
    };

    
  return (
      <div>
        {mobile && <header style={{color: "white"}}>
      
          <RiMenu2Fill className="menup" style={{marginLeft:"10px", marginTop:"3px",marginBottom:"2px", cursor:"pointer"}} onClick={()=> setShowNav(!showNav)}/>
          <img src={`https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512`} style={{float:"right",marginRight:"10px",marginTop:"3px"}} alt="Fayda" width="40px" height="auto" />

        </header>}
       <Sidebar guilds={guilds} show={showNav}/>
         <div style={{  marginLeft:`${mobile ? "20px" : "300px"}`, paddingTop:"50px", color:"white" }}>
       
         <h1 style={{marginBottom:"20px",textAlign:'center'}}>Classement Level</h1>


    <table class="ui inverted grey table" style={{maxWidth:"95%"}}>
  <thead>
    <tr style={{textAlign:"center"}}>
    <th>Place</th>
    <th>Utilisateur</th>
    <th>Level</th>
    <th>Expérience</th>
  </tr></thead><tbody style={{textAlign:"center"}}>
    {Object.entries(levelusers).map(([key],i) => <tr><td>{(` ${i+1} `.replace(' 1 ','🥇').replace(' 2 ','🥈').replace(' 3 ','🥉'))}</td> <td style={{color:`${(i+1) == 1 ? "#ffd700" : `${(i+1) == 2 ? "#7afae8" : `${(i+1) == 3 ? "#a5fa84" : "white"}`}`}`,fontWeight:`${(i+1) == 1 || (i+1) == 2|| (i+1) == 3 ? "bold" : "normal"}` }}>{key}</td> <td>{levelusers[key].level}</td> <td>{levelusers[key].xp}</td></tr> )}
  </tbody>
</table>

           </div>
           
<Grid container spacing={3} justify="center" style={{marginTop:"20px",marginLeft:`${mobile ? "0px" : "120px"}`,paddingRight:`${mobile ? "30px" : "0px"}` }}>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", color:"white", borderRadius:"15px", boxShadow:"5px 5px 10px #212121"}}>
            <div style={{paddingTop:"10px",textAlign:'center', fontWeight:"bold",fontSize:`${mobile ? "17px" : "20px"}`}}>Message d'Arrivée</div>
           
            <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
          Channel d'annonce :
          </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>

     
<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-logs-label">
            
        </InputLabel>
        <Select
          labelId="liste-logs-label"
          id="liste-logs"
          value={channelarrivée}
          color="secondary"
          onChange={changementChannelArr}
          style={{color:'white'}}
        >
           <MenuItem key='laucun' value="Aucun">Aucun Channel</MenuItem>
          {channels.map(item => (
            <MenuItem key={"l"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Message lors d'une arrivée :
</div>

<TextField style={{marginLeft:`${mobile ? "5%" : "20px"}`,marginTop:"15px",marginBottom:"20px",width:"90%"}}
          id="outlined-multiline-static"
          multiline
          classes={{
            root:"test2"
          }}
          rows={3}
          defaultValue="Ceci est un message de bienvenue."
          variant="outlined"
        />
     

          </Paper>
        </Grid>
        <Grid item xs={mobile ? 6 : 4}>
          <Paper className={classes.paper} style={{backgroundColor:"#444f75", textAlign:'center', color:"white", borderRadius:"15px",boxShadow:"5px 5px 10px #212121"}}>
          <div style={{paddingTop:"10px", fontWeight:"bold",fontSize:`${mobile ? "18px" : "20px"}`}}>Message de Départ</div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
          Channel d'annonce :
          </div>
          <div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "15px" : "15px"}`,color:"#b7b6be"}}>

<FormControl variant="standard" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="liste-logs-label">
            
        </InputLabel>
        <Select
          labelId="liste-logs-label"
          id="liste-logs"
          value={channeldépart}
          color="secondary"
          onChange={changementChannelDép}
          style={{color:'white'}}
        >
           <MenuItem key='laucun' value="Aucun">Aucun Channel</MenuItem>
          {channels.map(item => (
            <MenuItem key={"l"+item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
</div>
<div style={{textAlign:'left',fontWeight:"bold",marginLeft:`${mobile ? "10px" : "25px"}`,fontSize:`${mobile ? "14px" : "15px"}`,paddingTop:"15px",color:"#b7b6be"}}>
Message lors d'un départ :
</div>

<TextField style={{marginTop:"15px",marginBottom:"20px",width:"90%"}}
          id="outlined-multiline-static"
          multiline
          classes={{
            root:"test2"
          }}
          rows={3}
          defaultValue="Ceci est un message d'au revoir."
          variant="outlined"
        />
       
          </Paper>
        </Grid>
      
      </Grid>

      
      </div>

      
  )

}