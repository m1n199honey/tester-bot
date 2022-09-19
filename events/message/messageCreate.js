
module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    console.log("\n message event ...");
    //if message start with prifix we set...
    if (message.content.startsWith(client.prifix))
      return client.sudo(message);
    
    //if message is send in database by admin
    if(message.channel.id in client.database && message.content.startsWith("```js"))
      return client.codeCreated(message);

    //if 
    if(message.channel.id in client.database && message.content.startsWith("apt") && message.author.id == client.adminID)
      return client.installCode(message);
    
    return console.log("success..\n");
  }
}
