module.exports = (client) => {
  client.codeCreated = async (message) => {
    console.log("codeCreated...");
    let ids = await message.channel.parent.messages.fetch(message.channel.parent.lastMessageId);
    ids.edit(`${ids.content},${message.id}`);
  }
};