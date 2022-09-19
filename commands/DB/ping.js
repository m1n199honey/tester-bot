const path = require("node:path")
const { EmbedBuilder } =  require("discord.js");
const { pingID } = require(path.join(__dirname, "..", "..", "codeIDs"));

module.exports = {
    data:{
      name:"ping",
      discription:"add code to discordjs channel",
    },
    async execute(message, client) {
        console.log("commands -> DB -> ping.js");

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`ID:${pingID}\nsudo code Example 1`)
	.setAuthor({
    name: 'Hachimetsu', 
    iconURL: 'https://i.imgur.com/AfFp7pu.png', 
    url: 'https://discord.js.org' 
   })
	.setDescription('this is dummy code to understand working')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ 
    text: 'Some footer text here', 
    iconURL: 'https://i.imgur.com/AfFp7pu.png' 
  });

message.channel.send({ embeds: [exampleEmbed] });
    },
};