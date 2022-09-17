module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    console.log("\n message event ...");
    console.log(client.prifix);
    //if message start with prifix we set...
    if (message.content.startsWith(client.prifix)) {
      
      //making array of every word in message
      message.sudoString = message.content.split(/[, ]+/);
      
      //if there is no extra char attached to sudo like sudo., sudop, sudo,, sudo- etc.
      if(message.sudoString[0] == client.prifix) {
        
        //removing sudo from sudoString array coz sudo work is done here
        message.sudoString = message.sudoString.filter(e => e != "sudo");
        
      //goto functions -> sudo if there is next command 
      // if not then show empty error...
      if(message.sudoString && message.sudoString.length)
         client.sudo(message);
      else 
         await message.reply({ content: 'empty sudo command !', ephemeral: true });
      }
      //if there is extra char on sudo
      else 
         await message.reply({ content: 'wrong sudo syntex !', ephemeral: true });
      //coz message was sudo command so return from messageCreate when done...
      return;
    }

    
    return console.log("success..\n");
  }
}
