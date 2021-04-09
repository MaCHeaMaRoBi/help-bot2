const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://i.pinimg.com/originals/a7/26/d7/a726d76d5309bb2accb73bd48dba50c8.jpg`);
    return Message.channel.send(`**Pingu tau e mic csf asta e viata**`)

};

module.exports.help = {
  name: "pingu"
};