const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://media.dcnews.ro/image/201401/w670/Pipi.jpg`);
    return Message.channel.send(`**Pipi in gurita!**`)

};

module.exports.help = {
  name: "pipi"
};
