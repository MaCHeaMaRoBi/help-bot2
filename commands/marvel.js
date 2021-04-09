const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://images-ext-1.discordapp.net/external/zIi_QoZwbOccut196rGstd3AyUzfcPLat1GQZlESobA/https/img.posterlounge.co.uk/img/products/690000/681096/681096_poster_l.jpg`);
    return Message.channel.send(`Marvel...`)

};

module.exports.help = {
  name: "marvel"
};