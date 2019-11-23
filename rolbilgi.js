const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  let rolz = message.content.split(" ").slice(1).join(" ");
  let role = message.mentions.roles.first()
  if (!role) return message.channel.send("Bir rol etiketlemelisin.");
  
  var zaman = require("moment");
  var temps = zaman(message.createdTimestamp).format("LLLL");
  
  var codefenixkodpaylasim = new Discord.RichEmbed()
  .setTitle(`_**\`${role.name} Rolü Hakkında Bilgi:\`**_`)
  .setFooter('(BotADI)', client.user.avatarURL)
  .addField('Rol İsmi', role.name, true)
  .addField('Rol ID', role.id, true)
  .addField('Etiketlenebilir?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('Bu Roldeki Kullanıcı Sayısı', role.members.size, true)
  .addField('Oluşturulduğu Tarih', zaman(role.createdAt).format("LL"), true)
  .addField('Renk', role.hexColor, true)
  .setColor(0x00ff88)
  message.channel.send(codefenixkodpaylasim)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['roleinfo'],
  permLevel: 3
};

exports.help = {
  name: 'rolbilgi',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'rolbilgi <@rol>'
};
