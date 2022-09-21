module.exports = (client) => {
  client.sudo = async (message) => {
    console.log("clientFunction -> sudo -> sudo.js");
    
    //making array of every word in message
      message.sudoString = message.content.split(/[, ]+/);
    
    //if there is no extra char attached to sudo like sudo., sudop, sudo,, sudo- etc.
    if(message.sudoString[0] == client.prifix) {
      
      //removing sudo from sudoString array coz sudo work is done here
      message.sudoString.shift();
      
    //goto functions -> sudo if there is next command 
    // if not then show empty error...
    if(message.sudoString && message.sudoString.length) {
      
      //geting data of command, saved in client.commands at handleEvents.js
      const command = client.commands.get(message.sudoString.shift());
      
      //if command is "undefined" 
      if (!command) {
        await message.reply({
          content: `can't find ${message.sudoString[0]} command`,
          ephemeral: true
        });
        return;
      }
      
      //invoke async fuction in command from commands ->
      try { await command.execute(message, client); }
      catch (error) {
        console.error(error);
        await message.reply({
          content: 'error while executing this command!',
          ephemeral: true
        });
      }
    }
    else 
       await message.reply({ content: 'empty sudo command !', ephemeral: true });
    }
      
    //if there is extra char on sudo
    else 
       await message.reply({ content: 'wrong sudo syntex !', ephemeral: true });
  }
};