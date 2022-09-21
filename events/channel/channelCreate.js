const { codeBlock } = require("@discordjs/builders");

module.exports = {
    name: 'channelCreate',
    async execute(channel, client) {
      console.log("in channelCreate...");

      //to initialize channels with 2 messages
      //1. thread 2.collection of IDs
      if(channel.parentId == client.databaseID) {
         await channel.send(codeBlock("code collection !"))
        .then(async (message) => {
          await message.startThread({ name: "code send here..." });
          client.database[message.id] = (await channel.send(message.id)).id;
        });
      }
    },
};