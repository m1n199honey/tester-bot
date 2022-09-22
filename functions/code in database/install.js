const fs = require("fs");
const path = require("path");
const { codeBlock } = require("discord.js");

module.exports = (client) => {
  client.installCode = async (message) => {
    console.log("installing Code...");
    
    if (message.content.endsWith("code")) {
      const commandsPath = path.join(__dirname, "..", "..", "commands");
      
      for (const folder of fs.readdirSync(commandsPath)) {
        const folderPath = path.join(commandsPath, folder);
        
        for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith(".js"))) {
          const command = require(path.join(folderPath, file));
          
          if(command.code != undefined && command.code){
            var ID = (await message.channel.send(`\`\`\`js\n${command.code}\`\`\``)).id;
            
            if (ID) {
              ID = ID.substr(ID.length - 10);
              command.init(ID);              
            } 
          }
        }
      }
    }
  }
};