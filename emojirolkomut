const Discord = require('discord.js');
const db = require('quick.db')
const codefenixx = require('../ayarlar.json')
const codefenix = codefenixx.prefix

exports.run = async (client, message,args) => {

let emojirol = await db.fetch(`cfxemoci${message.guild.id}`)
let cfxkmesaj = await db.fetch(`cfxkmesaj${message.guild.id}`)
let cfxkmesajlog = message.mentions.channels.first()
let mensincfx = message.mentions.roles.first()


const cfxbilgi = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(` > **EmojiRol Sistemini Aktif Etmek İçin:** \`${codefenix}emojirol aç\` \n > **EmojiRol Sistemini DeAktif Etmek İçin:** \`${codefenix}emojirol kapat\` \n > **EmojiRol Verilecek Rol'ü Ayarlamak için:** \`${codefenix}emojirol rolayarla @roletiket\` \n > **EmojiRol Komutun Kullanılacağı Kanalı Belirtmek İçin:** \`${codefenix}emojirol kanalayarla #kanaletiket\` \n > **EmojiRol Mesajını Atmak İçin:** \`${codefenix}emojirolbaşlat\` `)
.setFooter(`CodeFENIX`, client.user.avatarURL)

if(!args[0]) return message.channel.send(cfxbilgi);


if(args[0] == 'rolayarla') {
  
  db.set(`cfxemojirol${message.guild.id}`, mensincfx.id)
  message.channel.send(`EmojiRol Rolü ${mensincfx} olarak ayarlandı.`)
  
  return
}



if(args[0] == 'kanalayarla') {

db.set(`cfxkmesaj${message.guild.id}`, cfxkmesajlog.id)
message.channel.send(`EmojiRol ün Çalışacağı Kanal ${cfxkmesajlog} olarak ayarlandı.`)

return
}

if(args[0] == 'kapat') {

db.delete(`cfxemoci${message.guild.id}`)
db.set(`cfxemoci${message.guild.id}`, 'Kapalı')
message.channel.send(`EmojiRol Sistemi Kapatıldı.`)

  return
}
  
if(emojirol == 'Açık') {

message.channel.send(`EmojiRol Sistemi Zaten Aktif!`)

return
}

if(args[0] == 'aç') {

db.set(`cfxemoci${message.guild.id}`, 'Açık')
message.channel.send(`EmojiRol Sistemi Açıldı`)

return
}

}




module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

module.exports.help = {
  name: 'emojirol',
  description: 'CODEFENIX KOD PAYLASIM',
  bu_kod_codefenix_kod_paylasim_ekibi_tarafindan_yazilmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'
};
