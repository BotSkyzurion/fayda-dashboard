import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import background from '../../background.png'
import logo from './premium-logo.png'
export function Premium (props) {
    


    return (
 
        <div>
        <img src={background} id="bite" alt="Background"/>
        <div className="app">
      <div className="heading" style={styles.heading}>
          
        <Image src={logo} size="medium" href="/menu" circular centered/>
       <h1 style ={{color:'rgb(52,197,136)',marginTop:'0%', fontSize:'40px',fontFamily:'monospace'}}>Dashboard - Premium</h1>
       <h1 style ={{color:'white',marginTop:'0%', fontSize:'35px',fontFamily:'monospace'}}>__________________</h1>
       <h1 style ={{color:'white',marginTop:'1%', fontSize:'35px',fontFamily:'monospace'}}>Bientôt Disponible</h1>
      
       <Button inverted color='red' href='/menu'>
        Retour
      </Button>

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
      marginTop: '1%',
    }
  }