const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://cdn.discordapp.com/attachments/775058928387620866/799258049050181672/Selfie_de_la_shaormerie.png`);
    return Message.channel.send(`bubu shaorma **kill the chicken**`)

};

module.exports.help = {
  name: "bubu"
};