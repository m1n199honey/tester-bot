const fs = require("fs");
const path = require("path");
const { codeBlock } = require("discord.js");

module.exports = (client) => {
  client.installCode = async (message) => {
    console.log("installCode...");
    setTimeout(() => message.delete(), 30_000);//30 sec
    if(message.content.endsWith("code")){
      const codePath = path.join(__dirname,"..", "..", "codeDatabase");
      for (const file of fs.readdirSync(codePath).filter((f) => f.endsWith(".js"))) {
          const code = require(path.join(codePath, file));
        await message.channel.send(`\`\`\`js\n${code}\`\`\``);
            console.log(code);
      }
    }
    
  }
};