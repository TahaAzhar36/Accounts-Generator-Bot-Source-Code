const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setThumbnail('https://cdn.discordapp.com/attachments/795022854554910750/796845793793409024/cmd_help.gif')
.setColor("#00FFED")
.setFooter('©️ ™️Black Giveaways Customing Team™️')
.addField('__HELP__','__**COMMANDS**__\n\n`$spotify`: To Get A Spotify Account.\n `$Fortnite`: To Get A Fortnite Account.\n`$disney`: To Get A Disney Account.\n`$hulu`: To Get A hulu  Account.\n`$minecraft`: To Get A Minecraft Account.\n`$nitro`: To Get A Unchecked Nitro Code.\n`$nordvpn`: To Get A NordVPN Account.\n`$origin` To Get A Origin Account.\n`$proxy`:  To Get A Proxy IP.\n `$gstart To Create Giveaway`\n\n **✩** **Black Giveaways Custom Accounts Generator / Moderation Bot**');
message.channel.send(embed)

}
module.exports.help = {
  name: 'help'
}
