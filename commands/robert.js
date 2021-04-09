const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://i.imgur.com/zmcOV6y.png`);
    return Message.channel.send(`Just Make a **Roby**`)

};

module.exports.help = {
  name: "robert"
};