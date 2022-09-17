console.log("\n In handleEvents.js ...(/)");
const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  //initialize commands... from commands folder & add them in client.commands ->
  //client.commands used in functions -> sudo
    console.log("Loading commands ...(/)");
    const commandsPath = path.join(__dirname, "commands");
    for (const folder of fs.readdirSync(commandsPath)) {
        const folderPath = path.join(commandsPath, folder);
        for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith(".js"))) {
            const command = require(path.join(folderPath, file));
            client.commands.set(command.data.name, command);
        }
    }
    console.log("done...");
  
  //initialize functions... from functions folder and add them in client ->
     const functionsPath = path.join(__dirname, "functions");
     for (const folder of fs.readdirSync(functionsPath)) {
         const folderPath = path.join(functionsPath, folder);
         for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith(".js")))
                require(path.join(folderPath, file))(client);
    }
  //handle events... from events folder & triger them on call -> 
    client.handleEvents = async () => {
        console.log("Initialising Events ...(/)");
        const eventsPath = path.join(__dirname, "events");
        for (const folder of fs.readdirSync(eventsPath)) {
            const folderPath = path.join(eventsPath, folder);
            for (const file of fs.readdirSync(folderPath).filter((f) => f.endsWith(".js"))) {
                const event = require(path.join(folderPath, file));
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client));
                }
                else {
                    client.on(event.name, (...args) => event.execute(...args, client));
                }
            }
        }
    };
 

};