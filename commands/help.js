const discord = require("discord.js");

module.exports.run = async (bot, Message, args) => {

    return Message.channel.send("**My name is `Help Bot`! I'm here to help you with some epic commands!**");

};

module.exports.help = {
  name: "help"
};
