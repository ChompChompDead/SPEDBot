const Discord = require('discord.js')
const {prefix} = require('./config.json');
const fs = require('fs')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    client.user.setActivity('SPEDBot | s!help')
    console.log(`${client.user.username} is now online!`)
})

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(!message.guild) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).run(client,message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command.')
    }

})

client.login(process.env.token)
