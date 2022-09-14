const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName(">>")
        .setDescription("append new code to specific DB using ID"),
    async execute(message, client){
        console.log(">>");
        const channel = await client.channels.cache.get(client.codeDB);
        var codeIDs = await channel.messages.fetch(client.codeIDs);
        var ID = message.content.split(/[, ]+/)[2];
        codeIDs.edit(`${codeIDs.content},${ID}`)
    },
};
