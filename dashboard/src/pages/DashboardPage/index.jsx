import React, { useState } from 'react';
import { getUserDatails, getGuildConfig, updateGuildPrefix, getGuilds, getGuildRoles, getGuildChannels,getGuildInfos,getGuildBot,updateGuildNick } from '../../utils/api';
import { DashBoardMenuP,DashBoardMenuS,DashBoardMenuC, DashBoardMenuU } from "../../Composants"
import { Ellipsis } from 'react-spinners-css';
import './index.css'
import { useMediaQuery } from 'react-responsive'

export function DashboardPage ( {
    history,
    match,
}) {
    
    

   
    const [user, setUser ] = React.useState(null);
    const [loading, setLoading ] = React.useState(true);
    const [loading2, setLoading2 ] = React.useState(true);
    const [loading3, setLoading3 ] = React.useState(true);
    const [loading4, setLoading4 ] = React.useState(true);
    const [loading5, setLoading5 ] = React.useState(true);
    const [loading6, setLoading6 ] = React.useState(true);
    const [config, setConfig ] = React.useState([]);
    const [guilds, setGuilds ] = React.useState([]);
    const [guildRole, setGuildRole ] = React.useState([]);
    const [guildChannels, setGuildChannels ] = React.useState([]);
    const [guildInfos, setGuildInfos ] = React.useState([]);
    const [nickBot, setnickBot ] = React.useState([]);
   
    React.useEffect(()=>{
        getUserDatails().then(({data})=>{
            setUser(data);
            
            return getGuildConfig(match.params.id);
        }).then(({data})=>{
            setConfig(data)
            setLoading(false);
        }).catch((err)=>{
            history.push('/')
            setLoading(false);
        })
    }, [])

    React.useEffect(()=>{
        getGuildRoles(match.params.id).then(({data})=>{
            setGuildRole(data)
            setLoading3(false);
        }).catch((err)=>{
            setLoading3(false);
        })
    }, [])

    React.useEffect(()=>{
        getGuildChannels(match.params.id).then(({data})=>{
            setGuildChannels(data)
            setLoading4(false);
        }).catch((err)=>{
            setLoading4(false);
        })
    }, [])

    React.useEffect(()=>{
        getGuildInfos(match.params.id).then(({data})=>{
            setGuildInfos(data)
            setLoading5(false);
        }).catch((err)=>{
            setLoading5(false);
        })
    }, [])

    
    React.useEffect(()=>{
        getGuildBot(match.params.id).then(({data})=>{
            setnickBot(data.nick)
            setLoading6(false);
        }).catch((err)=>{
            setLoading6(false);
        })
    }, [])


    React.useEffect(()=>{
        getGuilds().then(({data})=>{
          
            setGuilds(data);
            setLoading2(false);
        }).catch((err)=>{
            history.push('/')
            setLoading2(false);
        })
    }, [])

    const updateGuildPrefixParent = async (prefix) => {
        try{
            const update = await updateGuildPrefix(match.params.id, prefix);
            
            if (update.statusText === "OK") {

            }

        } catch(err) {
            console.log(err)
            if (`${err}`.includes('code 401')) {
                alert("Le prefix inséré est invalide.")
            } else {
                if (`${err}`.includes('code 399')) {
                    alert("Le prefix n'a pas été inséré.")
                } else {
                    if (`${err}`.includes('code 400')) {
                        alert("Le serveur que vous souhaitez modifier est invalide.")
                    } 
                }
            }
        }
       }
       const updateGuildNickNameParent = async (nickname) => {
        try{
            const update = await updateGuildNick(match.params.id, nickname);
            
            if (update.statusText === "OK") {

            }

        } catch(err) {
            console.log(err)
            if (`${err}`.includes('code 401')) {
                alert("Le nom inséré est invalide.")
            } else {
                if (`${err}`.includes('code 399')) {
                    alert("Le nom n'a pas été inséré.")
                } else {
                    if (`${err}`.includes('code 400')) {
                        alert("Le serveur que vous souhaitez modifier est invalide.")
                    } 
                }
            }
        }
       }

       

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1075px)' })
  const [ mobile ] = useState(isTabletOrMobile ? true : false)
  
    return (
        <div> 
          
            {(!loading && !loading2 && !loading3&& !loading4&& !loading5&& !loading6) === false ? (
            <div> 
                <Ellipsis size={120} color="#5d6ca1" style={{position:"absolute",top:`${mobile ? "42%" : "48%"}`,left:`${mobile ? "35%" : "48%"}`}}/> 
                </div>
                ) : ( 
                <div> 

            {match.path.split('/')[3] === "principal" && <DashBoardMenuP guilds={guilds} user={user} config = {config} roles={guildRole} nick={nickBot} channels={guildChannels} guildinfos={guildInfos} updateGuildNick={updateGuildNickNameParent} updateprefix={updateGuildPrefixParent}/>}
            {match.path.split('/')[3] === "sécurité" && <DashBoardMenuS guilds={guilds} user={user} config = {config} roles={guildRole} nick={nickBot} channels={guildChannels} guildinfos={guildInfos} updateGuildNick={updateGuildNickNameParent} updateprefix={updateGuildPrefixParent}/>}
            {match.path.split('/')[3] === "commandes" && <DashBoardMenuC guilds={guilds} user={user} config = {config} roles={guildRole} nick={nickBot} channels={guildChannels} guildinfos={guildInfos} updateGuildNick={updateGuildNickNameParent} updateprefix={updateGuildPrefixParent}/>}
            {match.path.split('/')[3] === "utilitaire" && <DashBoardMenuU guilds={guilds} user={user} config = {config} roles={guildRole} nick={nickBot} channels={guildChannels} guildinfos={guildInfos} updateGuildNick={updateGuildNickNameParent} updateprefix={updateGuildPrefixParent}/>}
          
            </div>
            )}
           
        </div>
    )
}