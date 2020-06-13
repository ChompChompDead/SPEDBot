const Discord = require('discord.js')
const client = new Discord.Client();
const {MessageEmbed} = require('discord.js')

module.exports={
    name: "avatar",
    description: "Shows your or someone elses avatar.",
    run: async(client,message,args)=>{
        const user = message.mentions.users.first() || message.author;
        let embed = new MessageEmbed()
        .setColor(`BLUE`)
        .setTitle(`${user.tag}s profile picture!`)
        .setImage(client.users.cache.get(user.id).displayAvatarURL());
        message.channel.send(embed);
    }
  }