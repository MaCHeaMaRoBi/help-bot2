const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://img.posterlounge.co.uk/img/products/690000/681096/681096_poster_l.jpg`);
    return Message.channel.send(`**Adi** e in pat cu **Tati**!`)

};

module.exports.help = {
  name: "adi"
};