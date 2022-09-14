console.log('In bot.js .....(/)');
console.log('new line');

const path = require('node:path');
const config = require(path.join(__dirname, "config.json"));
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
client.login(config.TOKEN);
client.commands = new Collection();
client.codeDB = config.codeDB;
client.codeIDs = config.codeIDs;
client.adminID = config.adminID;
client.cmdID = config.cmdID;
require(path.join(__dirname, "handleEvents.js"))(client);
client.handleEvents();