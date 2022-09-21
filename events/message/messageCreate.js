
module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    console.log("\n message event ...");
    //if message start with prifix we set...
    if (message.content.startsWith(client.prifix))
      return client.sudo(message);

    //if message is send in database
    if (message.channel.id in client.database){
      if(message.content.startsWith("```js"))
        return client.codeCreated(message);//if message is code
        
      else {
        setTimeout(() => message.delete(), 20_000);//if not code, delete it after 20 sec
        
        if(message.author.id == client.adminID){
          if(message.content.startsWith("apt"))
            return client.installCode(message);//add code to database channels
        }
      }
    }
    return console.log("success..\n");
  }
}
