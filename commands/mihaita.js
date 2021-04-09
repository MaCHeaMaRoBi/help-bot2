const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

  Message.channel.send(`https://i.ytimg.com/vi/mSAVp35OWDg/maxresdefault.jpg`);  
  return Message.channel.send("**Pocaituleeee!**")

};

module.exports.help = {
  name: "mihaita"
};