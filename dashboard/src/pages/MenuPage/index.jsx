import React, {useState} from 'react';
import { getUserDatails, getGuilds } from '../../utils/api';
import { MenuComponent } from '../../Composants'
import background from '../../background.png'
import { Ellipsis } from 'react-spinners-css';
import { Image, Button } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive'
export function Menu ( {
    history,
}) {
   
    const [user, setUser ] = React.useState(null);
    const [loading, setLoading ] = React.useState(true);
    const [ guilds, setGuilds ] = React.useState([]);
   

    React.useEffect(()=>{
        getUserDatails().then(({data})=>{
            
            setUser(data);
            
            return getGuilds();
        }).then(({data})=>{
           
            setGuilds(data)
            setLoading(false);
        }).catch((err)=>{
            console.log(err)
          window.location.href = 'http://localhost:3001/api/auth/discord'
            setLoading(false);
        })
    }, [])

    

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  const [ mobile ] = useState(isTabletOrMobile ? true : false)
  

    return (

       
        <div> 
            {loading ? (
            <div> 
                <Ellipsis size={120} color="#5d6ca1" style={{position:"absolute",top:`${mobile ? "42%" : "48%"}`,left:`${mobile ? "35%" : "48%"}`}}/> 
            </div>
            ) : ( 
            <div>
            <img src={background} id="bite" alt="Background"/>
            <div className="app">
      <div className="heading" style={styles.heading}>
          
        <Image src='https://images.discordapp.net/avatars/433987827642925076/f6e568986af43e0ef9843ebb1b314a79.png?size=512' href="/" size="small" circular centered/>
       <h1 style ={{color:'white',marginTop:'0%', fontSize:'35px',fontFamily:'monospace'}}>Menu des serveurs</h1>
      </div>
      </div>
      {guilds.length === 0 ? (
          <div style ={{textAlign:"center"}}> 
            <h3 style ={{color:'grey',marginTop:'0%', fontSize:'25px',fontFamily:'monospace',paddingTop:"100px"}}>Vous n'avez pas encore de serveurs détenant Fayda...</h3>
            <Button inverted color='red' style={{marginTop:'15px'}} onClick={()=>window.location.href = 'https://discord.com/oauth2/authorize?client_id=433987827642925076&permissions=804777153&scope=bot'} >Ajouter Fayda sur votre serveur</Button>
      
          </div>
      ) : (
      <div> 
        <MenuComponent guilds={guilds} />
      </div>
          )}
            
            </div>
            )}
            
        </div>
    )
}


const styles = {
    heading:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop: '1%',
    }
  }
  