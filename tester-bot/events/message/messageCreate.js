// const fs = require('fs');
const path = require('node:path');
const config = require(path.join(__dirname, "..", "..", "config.json"));
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        console.log("message event ...");
        const channel = await client.channels.cache.get(config.codeDB);
        if(message.content.startsWith("!code")){
            const command = client.commands.get(message.content.split(/[, ]+/)[1]);
            if (!command) return;
            try { await command.execute(message, client); }
            catch (error) { console.log(error); }
            return;
        }
        if (config.codeDB === message.channel.id && message.id != config.codeIDs) {
            (await channel.messages.fetch(config.codeIDs)).edit(message.content);
            return;
        }

        // if (message.content.startsWith("add")) {
        //     message.channel.send("");
        //     return;
        // }
        
        // if (message.content.startsWith("code")) {
        //     const ID = ((await channel.messages.fetch(config.codeIDs)).content)
        //         .split(",").filter((f) => f.endsWith(message.content.split(" ")[1]))[0];
        //     const code = (await channel.messages.fetch(ID)).content;
        //     if (code)
        //         message.channel.send(code);
        // }


    }
}
