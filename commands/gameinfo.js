const { guildOnly } = require("./ping");
const { Message, MessageEmbed } = require("discord.js");

module.exports={
    name:"gameinfo",
    description:"Info about SPED",
    run: async(client, message, args)=>{
        const Embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`SPED Info`)
        .setThumbnail(`https://gyazo.com/c7234d523a8b1a82d90a12e2b9199052.png`)
        .addField('🎮 Game created on: 🎮', '`6/11/2020`')
        .addField('⚒️ SPED Developers: ⚒️', '`rigger5678, ChompChompDead, awesomehdboy2010, and timo0809`')
        .addField('👨‍💼 Creator of SPED: 👨‍💼', '`reallumpyman`')
        .addField(`🧍 Max Players: 🧍`, '`50`')
        .addField('⚙️ Game Genre: ⚙️', '`All Genres`')
        .addField(`🖥️ VIP Server Support: 🖥️`, '`❌`')
        message.channel.send(Embed)
    }
}