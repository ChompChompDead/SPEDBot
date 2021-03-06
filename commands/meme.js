const {MessageEmbed} = require('discord.js')
const api = require("imageapi.js");
module.exports = {
  name: "meme",
  description: "Get a meme!",
  run: async (client, message, args) => {
    let subreddits = ["dankmemes","memes", "cleanmemes"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor(`BLUE`)
      .setImage(img);
    message.channel.send(Embed);
  },
};