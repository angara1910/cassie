const Discord = require('discord.js');
const db = require('quick.db')
const a = require('../ayarlar.json')

exports.run = async (client, message, args, member) => {
const cfxc1 = new Discord.RichEmbed()
.setDescription(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
const cfxc2 = new Discord.RichEmbed()
.setTitle(`**\`Sayaç Bilgi;\`**`)
.setDescription(`** ** \n **Ayarlamak İçin: [Seçenek-1]** \`${a.prefix}sayaç ayarla #kanal sayı\` \n **Ayarlamak İçin: [Seçenek-2]** \`${a.prefix}sayaç ayarla sayı #kanal\` \n **Ayarlamak İçin: [Seçenek-3]** \`${a.prefix}sayaç sayı #kanal\` \n\n **Kapatmak İçin:** \`${a.prefix}sayaç kapat\``)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
const cfxc3 = new Discord.RichEmbed()
.setDescription(`**Bir Kanal Etiketleyin.**`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
const cfxc4 = new Discord.RichEmbed()
.setDescription(`**Bir Sayı Girin.**`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
const cfxc6 = new Discord.RichEmbed()
.setDescription(`**Sayaç Başarıyla Kapatıldı.**`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
const cfxc9 = new Discord.RichEmbed()
.setDescription(`**Doğru Kullanım:** \`${a.prefix}sayaç sayı #kanal\``)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)

let sayackanal = message.mentions.channels.first();
  
let sayacSayi = []; 
if (args[1] == sayackanal) sayacSayi = args[2]
if (args[2] == sayackanal) sayacSayi = args[1]

  
let cfxk = message.mentions.channels.first()

let sayacSayi2 = args[0]
  
  
let sayacSayiz = await db.fetch(`sayacSayi_${message.guild.id}`)   




 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(cfxc1);  
 if(!args[0]) return message.channel.send(cfxc2);

   if (args[0] == 'kapat') {
     
     db.delete(`sayacKanal_${message.guild.id}`)
     db.delete(`sayacSayi_${message.guild.id}`)
     message.channel.send(cfxc6)
     
   }
  
  


if (args[0] != 'ayarla') {
  
  
  const cfxc8 = new Discord.RichEmbed()
.setDescription(`**Sayaç** \`${sayacSayi2}\` **,** **Kanal** <#${cfxk.id}> **olarak ayarlandı.**`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
  
  
  if (!sayacSayi2) return message.channel.send(cfxc4);
  if (!cfxk) return message.channel.send(cfxc3);
  if(args[0] == cfxk) return message.channel.send(cfxc9);
  if(args[1] == sayacSayi2) return message.channel.send(cfxc9);
  
if(args[1] == cfxk && args[0] == sayacSayi2) return db.set(`sayacSayi_${message.guild.id}`, sayacSayi2) - db.set(`sayacKanal_${message.guild.id}`, cfxk.id) - message.channel.send(cfxc8);
}
  
  
  if (args[0] == 'ayarla') {

      
    if(!sayackanal) return message.channel.send(cfxc3);
    if(!sayacSayi) return message.channel.send(cfxc4);
      db.set(`sayacKanal_${message.guild.id}`, sayackanal.id)
      db.set(`sayacSayi_${message.guild.id}`, sayacSayi)
   
 
let sayacKanalx = await db.set(`sayacKanal_${message.guild.id}`, sayackanal.id)

let sayacSayix = await db.set(`sayacSayi_${message.guild.id}`, sayacSayi)
     
const cfxc5 = new Discord.RichEmbed()
.setDescription(`**Sayaç** \`${sayacSayix}\` **,** **Kanal** <#${sayacKanalx}> **olarak ayarlandı.**`)
.setColor("#00ff88")
.setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)

     message.channel.send(cfxc5);
     
    }
  

}
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayac'],
  permLevel: 3
};

exports.help = {
  name: 'sayaç',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'sayaç #kanal sayı'
};

