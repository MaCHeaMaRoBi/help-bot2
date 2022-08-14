const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const keepAlive = require("./server");
require("dotenv").config();

// cand e bot-ul ready
bot.on("ready", () => {
  console.log(`E asta online, ${bot.user.username}, grija mare la el!`);
  bot.user.setActivity("Sa va dau la muie! ceaw ceaw!");
});

//load commands
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter((f) => f.split(".").pop() === "js");

  if (jsfiles.length <= 0)
    return console.log("there are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// message events
bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = "%";
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) {
    cmd.run(bot, message, args);
  }
});

keepAlive();
bot.login(process.env.DISCORD_TOKEN);
