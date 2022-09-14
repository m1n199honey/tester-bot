const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rm")
        .setDescription("remove the id from data-base id-collection"),
    async execute(message, client) {
        console.log("rm");
        const channel = await client.channels.cache.get(client.codeDB);
        var codeIDs = (await channel.messages.fetch(client.codeIDs)).content.split(/[, ]+/);
        var ID = message.content.split(/[, ]+/)[2];
        ID = codeIDs.find((id)=>{return id.endsWith(ID)})
        codeIDs = codeIDs.filter(e => e != ID);
    },
};
