module.exports = {
    name: 'messageDelete',
    async execute(message, client) {
        console.log("messageDelete event ...");
        if (message.channel.id == client.codeDB)
            console.log(message.id);
        
    }
}
