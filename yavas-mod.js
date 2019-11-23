const Discord = require('discord.js');
const optionsofCassie = require('../ayarlar.json');

exports.run = async(client, message, args) => {
      message.channel.bulkDelete(1)
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var cfx = new Discord.RichEmbed()
                .setDescription(`Hatalı Kullanım! Örnek: \`${optionsofCassie.prefix}!sm [0/10]\``)
                .setColor('0x00ff88')
                .setFooter('CodeFENIX', client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
            message.channel.send(cfx)
            return
          }
if (limit > 31536000) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Limit en fazla  \`31536000\` saniye olabilir!`).setColor('0x00ff88') .setFooter(`${message.author.username} Tarafından Kullanıldı!`, message.author.avatarURL));
}
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma hız limiti \`${limit}\` saniye olarak ayarlanmıştır.`).setColor('0x00ff88') .setFooter(`${message.author.username} Tarafından Kullanıldı!`, message.author.avatarURL)).then(msg => {
    msg.delete(10000)
    })
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sm', 'slowmode'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaşmod',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'yavaşmod [1/10]',
};

