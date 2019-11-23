const db = require('quick.db')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Buna yetkin yok!`);
  if (!args[0]) return message.channel.send(`aç veya kapat yazmalısın. \`${ayarlar.prefix}reklamkoruma aç\``)

  let reklam = await db.fetch(`reklam_${message.guild.id}`)

  if (args[0] == 'aç') {
if (reklam) {
message.channel.send('Reklam Koruması Zaten Aktif!')
return
} 
else {
    db.set(`reklam_${message.guild.id}`, 'Açık')
     message.channel.send('Reklam Koruması başarıyla açıldı!')
}
  }
  else if (args[0] == 'kapat') {
    db.delete(`reklam_${message.guild.id}`, 'Kapalı')
      message.channel.send('Reklam Koruması başarıyla kapatıldı!')
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reklamkoruma',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'reklamkoruma'
};
