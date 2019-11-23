const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (client, message, args) => {

 let user = message.author

  var cfxpuan = await db.fetch(`cfxkredipuan${user.id}`)

  const cfx = new Discord.RichEmbed()
  .setColor("#c987ff")
  .setThumbnail(message.author.avatarURL)
 .setDescription(`\`${message.author.tag}\` Kredi Profilin \n\n Toplam Kredin: 💰 **${cfxpuan}**`)
  message.channel.send(cfx)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kredi-profil',
  description: 'CFX',
  bu_kod_codefenix_kod_paylasim_ekibi_tarafindan_yazilmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'
}
