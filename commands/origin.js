const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/origin.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/origin.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Origin Account',`\n**${account}**`)
            .setThumbnail('https://cdn.discordapp.com/attachments/790848064231309322/794989934879571988/1.png')
            .setColor("#363940")
            .setFooter('Black Giveaways Crack Team')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Check your DM!')
                .then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 900000);
                });

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
        });
    }
};

module.exports.help = {
    name: `origin`,
    description: `Sends you a Origin account!`
};