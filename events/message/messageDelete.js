module.exports = {
  name: 'messageDelete',
  async execute(message, client) {
    if (message.channel.id in client.database)
      return client.codeDeleted(message);

  }
}
