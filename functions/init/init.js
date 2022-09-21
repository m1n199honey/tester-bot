const path = require("node:path");
const fs = require("fs");

const config = require(path.join(__dirname, "..", "..", "config"));

module.exports = (client) => {
  client.init = async () => {
    console.log("clientFunction -> init -> init.js")

    //if values are not null in config
    if (config.adminID) client.adminID = config.adminID;
    if (config.prifix) client.prifix = config.prifix;
    if (config.databaseID) client.databaseID = config.databaseID;
    if (config.guildID) client.guildID = config.guildID;
 
    //to store database channels IDs
    client.database = {};
    client.databaseIDs = {}
    

    //using ID of categoryChannel (database)
    //puting it's channels in client.database,
    //id as keys and name as values 
    client.channels.cache.get(config.databaseID)
      .children.cache
      .forEach( async (channel,i) => {
        let m = await channel.messages.fetch(channel.lastMessageId);
        let IDs = m.content.split(/[, ]+/);
        client.database[IDs[0]] = m.id;
        client.databaseIDs[IDs.shift()] = IDs;
        
        //init ng commands IDs
        const commandsPath = path.join(__dirname, "..", "..", "commands");
          
        for (const folder of fs.readdirSync(commandsPath)) {
          const folderPath = path.join(commandsPath, folder);
          
          for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith(".js"))) {
            const command = require(path.join(folderPath, file));
            
            if(command.code != undefined && command.code){
              for(let ID of IDs)
                if (ID) {
                  ID = ID.substr(ID.length - 10);
                  command.init(ID);
                } 
            }
          }
        }
      });
  }
};