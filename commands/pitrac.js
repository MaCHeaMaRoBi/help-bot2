const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://cdn.discordapp.com/attachments/769271999897534485/826065056487702578/pitra-cerseste-dupa-1-leu.png`);
    return Message.channel.send(`**Pitrac si-a luat un job nou!**`)

};

module.exports.help = {
  name: "pitrac"
};
