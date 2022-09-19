const code = `
const { EmbedBuilder } =  require("discord");
const { pingID } = require(path.join(__dirname,"codeIDs"));
const exampleEmbed = new EmbedBuilder()
.setColor(0x0099FF)
.setTitle('ID: $ {pingID}\nsudo code Example 1')
.setAuthor({ 
  name: 'Hachimetsu',
  iconURL: 'https://i.imgur.com/dummy.png', 
  url: 'https://anonymous-helper.com' 
})
.setDescription('this is dummy code to understand working')
.setThumbnail('https://i.imgur.com/dummy.png')
.addFields(
  { 
    name: 'Regular field title', 
    value: 'Some value here' 
  },
  { 
    name: '\u200B', 
    value: '\u200B' 
  },
  { 
    name: 'Inline field title', 
    value: 'Some value here', 
    inline: true 
  },
  { 
    name: 'Inline field title', 
    value: 'Some value here', 
    inline: true 
  },
)
.addFields({ 
  name: 'Inline field title', 
  value: 'Some value here', 
  inline: true 
})
.setImage('https://i.imgur.com/dummy.png')
.setTimestamp()
.setFooter({  
text: 'Some footer text here', 
  iconURL: 'https://i.imgur.com/dummy.png' 
});
ping.send({ embeds: [exampleEmbed] });`;
module.exports = code;
