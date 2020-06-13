const Discord = require('discord.js')
const client = new Discord.Client();
const {MessageEmbed} = require('discord.js')

module.exports={
    name:"ping",
    description:"Returns Latency and API Ping.",
    run: async(client, message, args) => {
        const msg = await message.channel.send(`:ping_pong: Pinging...`)
        const Embed = new MessageEmbed()
        .setTitle(':ping_pong: Pong!')
        .setDescription(`Your API Ping is: ${Math.round(client.ws.ping)}ms\nYour Latency Ping is:  ${msg.createdTimestamp - message.createdTimestamp}ms`)
        .setColor(`BLUE`)
        msg.edit(Embed)
    }
}