console.log('In bot.js .....(/)');
const path = require('node:path');
const config = require(path.join(__dirname, "config"));
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildPresences

  ]
});
client.login(process.env.TOKEN);
//to store commands data, initialize in handleEvents.js
client.commands = new Collection();
require(path.join(__dirname, "handleEvents"))(client);
client.handleEvents();//goto handleEvents.js