module.exports = {
    name: 'messageDelete',
    async execute(message, client) {
      console.log("messageDelete event ...");
      if(message.channel.id in client.database)
        return client.codeDeleted(message);
      
    }
}
