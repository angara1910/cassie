const Discord = require('discord.js')
const db = require('quick.db')
const a = require('../ayarlar.json')


exports.run = async (client, message, args) => {
if(args[0] === "kapat") {
  
db.delete(`cfxget${message.guild.id}`)
  
  const cfxs = new Discord.RichEmbed()
  .setDescription(`Giriş Çıkış başarıyla kapatıldı!`)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Giriş Çıkış Sistemi.`, client.user.avatarURL)
 
  message.channel.send(cfxs)
} 
else {
  

  let cfxs = message.mentions.channels.first();
  
  const cfxz = new Discord.RichEmbed()
  .setTitle(`**\`GirişÇıkış Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin**: \`${a.prefix}girişçıkış #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}girişçıkış kapat\``)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Giriş Çıkış Sistemi.`, client.user.avatarURL)
  
  if(!cfxs) return message.channel.send(cfxz)
  

  db.set(`cfxget${message.guild.id}`, cfxs.id)
  
  const cfx = new Discord.RichEmbed()
  .setDescription(`Giriş çıkış mesajlarının atılacağı kanal **${cfxs}** olarak ayarlandı!`)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Giriş Çıkış Sistemi.`, client.user.avatarURL)
  message.channel.send(cfx)
  
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: 'girişçıkış',  
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'girişçıkış <#kanal>'
};
