const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://media.discordapp.net/attachments/691339078154846270/829889049430327346/baby-dogty.png?width=1202&height=676`);
    return Message.channel.send(`catelusu ham ham`)

};

module.exports.help = {
  name: "dogty"
};