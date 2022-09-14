const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("djs")
        .setDescription("add code to discordjs database"),
    async execute(message, client) {
        console.log(">>");
        const channel = await client.channels.cache.get(client.djsID);
        var codeIDs = await channel.messages.fetch(client.djscodeIDs);
        var ID = message.commands[2];
        codeIDs.edit(`${codeIDs.content},${ID}`)
    },
};
