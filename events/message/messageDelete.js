module.exports = {
  name: 'messageDelete',
  async execute(message, client) {

    //to remove id of code from collection IDs
    if (message.channel.id in client.database)
      return client.codeDeleted(message);

  }
}
