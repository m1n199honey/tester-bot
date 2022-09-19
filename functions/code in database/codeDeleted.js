module.exports = (client) => {
  client.codeDeleted = async (message) => {
    console.log("codeDeleted...");
    let ids = await message.channel.parent.messages.fetch(message.channel.parent.lastMessageId);
    let e = ids.content.split(/[, ]+/).filter(e => e != message.id).join(",");
    let n = await ids.edit(e);
    console.log(n.content);
  }
};