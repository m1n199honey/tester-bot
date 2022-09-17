module.exports = (client) => {
  client.sudo = async (message) => {
    console.log("clientFunction -> sudo -> sudo.js");

    //geting data of command, saved in client.commands at handleEvents.js
    const command = client.commands.get(message.sudoString[0]);

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
};