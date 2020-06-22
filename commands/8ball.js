const Discord = require('discord.js')
const prefix = require('../config.json')

module.exports={
    name:"8ball",
    description:"Answers your questions!",
    usage: "<question>",
    run: async(client,message,args)=>{
        let question = args.join(" ");
        if(!question){
            return message.reply('You did not specify your question.')
        } else{
            let responses = [
                "**Yes**",
                "**No**",
                "**I hate your question.**",
                "**Try again later?**",
                "**Not in a million years. Or billion. Who knows?**",
                "**Defenitely.**",
                "**For sure!**",
                "**const Yes = true**"
            ]
            let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new Discord.MessageEmbed()
            .setTitle('**8ball**')
            .setColor(`BLUE`)
            .setDescription('**Your Question:** '+question+"\n**Your Answer:** "+Response)
            message.channel.send(Embed)
        }

    }
}
