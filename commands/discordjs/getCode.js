const path = require("node:path");
const config = require(path.join(__dirname, "..", "..", "config"));

module.exports = {
  data: {
    name: "getcode",
    discription: "fetch link of code and return it",
  },
  async execute(message, client) {
    let mID = message.sudoString.shift();
    var link = `https://discord.com/channels/${client.guildID}/`;
    for (let key in client.databaseIDs)
      for (let ID of client.databaseIDs[key])
        if (ID.endsWith(mID)) { link += `${key}/${ID}`; break};
    message.channel.send(link);
  },
};
