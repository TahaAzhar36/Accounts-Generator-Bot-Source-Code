const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete();

if(!args.join(" ")){
  if(message.author.id !== '') return message.channel.send("Your Message A Sending.......")

}
let sayembed = new Discord.RichEmbed({
disabelEveryone: true})
.setFooter('Black Giveaways Customing Team')
.setColor("#363940")
.addField(`$`, args.join(" "))
.setTimestamp(message.createdAt)

message.channel.send(sayembed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "say"
}