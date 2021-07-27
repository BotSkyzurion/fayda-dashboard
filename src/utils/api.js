import axios from 'axios';

export function getUserDatails() {
    return axios.get('http://localhost:3001/api/auth', {withCredentials:true, credentials: "same-origin" })
}
export function getGuilds() {
    return axios.get('http://localhost:3001/api/discord/guilds', {
        withCredentials:true})
}

export function getGuildConfig(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/config`, {withCredentials:true})
}

export function getGuildBot(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/getbot`, {withCredentials:true})
}

export function getGuildRoles(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/roles`, {withCredentials:true})
}


export function getGuildChannels(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/channels`, {withCredentials:true})
}


export function getGuildInfos(guildId) {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/infos`, {withCredentials:true})
}

export function updateGuildPrefix(guildId, prefix) {
    return axios.put(
        `http://localhost:3001/api/discord/guilds/${guildId}/prefix`, {
            prefix
        }, {
            withCredentials:true
        }
    )
}

export function updateGuildNick(guildId, nick) {
    return axios.put(
        `http://localhost:3001/api/discord/guilds/${guildId}/nickname`, {
            nick
        }, {
            withCredentials:true
        }
    )
}