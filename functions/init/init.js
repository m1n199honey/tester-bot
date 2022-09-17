const path = require("node:path");
const config = require(path.join(__dirname, "..", "..", "config"));

module.exports = (client) => {
  client.init = async () => {
    console.log("clientFunction -> init -> init.js")
    
    //if values are not null in config
    if (config.adminID) client.adminID = config.adminID;
    if (config.prifix) client.prifix  = config.prifix;
    if (config.databaseID) client.databaseID = config.databaseID;
    
  }
};