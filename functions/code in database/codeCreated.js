module.exports = (client) => {
  client.codeCreated = async (message) => {
    console.log("codeCreated...");

    //fetch last message of message 
    let IDs = await message.channel.parent.messages.fetch(message.channel.parent.lastMessageId);
    IDs.edit(`${IDs.content},${message.id}`);
    client.databaseIDs[IDs.id].push(message.id);
  }
};