import React from 'react';
import { GuildMenuItem } from './GuildMenu'
export function MenuComponent({
    guilds,
}) {
    return (
        <div className="container">
        <div className="guild-menu-container">
        
        {guilds.map((guild)=>(
                 <GuildMenuItem guild={guild} key={guild.id}/>
            ))}
        </div>
        </div>
    )
}