const {MessageEmbed} = require('discord.js')

module.exports={
    name:"help",
    description:"ALl the commands SPEDBot has.",
    run: async(client,message, args)=>{
        const Embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`:clipboard: All SPEDBot Commands :clipboard:`)
        .setThumbnail('https://gyazo.com/c7234d523a8b1a82d90a12e2b9199052.png')
        .addField('😄 Fun Commands 😄', '`meme, topic, 8ball, giveaway, poll`')
        .addField('ℹ️ Info Comamnds ℹ️', '`ping, help, gameinfo, avatar`')
        message.channel.send(Embed)
    }
}
