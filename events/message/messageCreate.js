module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        console.log("message event ...");
        if(message.content.startsWith("sudo")){
            message.commands = message.content.split(/[, ]+/).filter(e => e != "sudo");
            return sudo(message);//goto handleEvents.js
        }

        return console.log("success..");
        if (message.channel.id == client.cmdID && message.author.id == client.adminID) 
            return client.terminal(message);
        
        if (message.channel.id == client.codeDB && message.author.id == client.adminID)
            return client.newCode(message);

        return;
        if (message.content.startsWith("!code")) {
            const command = client.commands.get(message.content.split(/[, ]+/)[1].substring(1));
            if (!command) return;
            try { await command.execute(message, client); }
            catch (error) { console.log(error); }
            return;
        }
        // if (client.codeDB === message.channel.id && message.id != client.codeIDs) {
        //     (await channel.messages.fetch(client.codeIDs)).edit(message.content);
        //     return;
        // }

        // if (message.content.startsWith("add")) {
        //     message.channel.send("");
        //     return;
        // }

        // if (message.content.startsWith("code")) {
        //     const ID = ((await channel.messages.fetch(client.codeIDs)).content)
        //         .split(",").filter((f) => f.endsWith(message.content.split(" ")[1]))[0];
        //     const code = (await channel.messages.fetch(ID)).content;
        //     if (code)
        //         message.channel.send(code);
        // }


    }
}
