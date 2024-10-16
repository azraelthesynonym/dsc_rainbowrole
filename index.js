const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} đang hoạt động!`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[ Error ] Server: ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Error ] Role Rainbow, Tên Server: ${guild.name}` 
    
    if(interval < 60000) console.log(`\n[!!!] Cài đặt thành công`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Rainbow Color',
            type: 'PLAYING',
        }
    })
})


bot.login(token)


