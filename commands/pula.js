const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

     Message.channel.send(`https://images-eu.ssl-images-amazon.com/images/I/61vGuQzcK8L.__AC_SX300_SY300_QL70_ML2_.jpg`);
    return Message.channel.send(`**Puta ta e mica csf asta e viata**`)

};

module.exports.help = {
  name: "pula"
};