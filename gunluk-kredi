const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


let behle = 8.64e+7

exports.run = async (client, message, args) => {

let user = message.author
let sure = await db.fetch(`kredizaman${message.guild.id}`)
      
      if (sure !== null && behle - (Date.now() - sure) > 0) {
      let timeObj = ms(behle - (Date.now() - sure))
      message.channel.send(`> Bu Komutu Günde 1 Kez Kullanabilirsin! \n > Tekrar Kullanmak İçin **${timeObj.hours} saat ${timeObj.minutes} dakika** beklemelisin`)
      } 
  
  else {
    
    var cfxdaily = [
      
    "1",
      "2",
        "3"
      
    ];
    
    var cfxgnlk = cfxdaily[Math.floor(Math.random() * cfxdaily.length)];
  
    const cfx1 = new Discord.RichEmbed().setColor("#c987ff").setDescription(`\`${message.author.tag}\` Günlük Hediyeni Kullandın Ve Hesabına 💰 500 Kredi Eklendi`)
    const cfx2 = new Discord.RichEmbed().setColor("#c987ff").setDescription(`\`${message.author.tag}\` Günlük Hediyeni Kullandın Ve Hesabına 💰 800 Kredi Eklendi`)
    const cfx3 = new Discord.RichEmbed().setColor("#c987ff").setDescription(`\`${message.author.tag}\` Günlük Hediyeni Kullandın Ve Hesabına 💰 1000 Kredi Eklendi`)
    
 if(cfxgnlk == '1') return message.channel.send(cfx1) - db.add(`cfxkredipuan${user.id}`, 500) - db.set(`kredizaman${message.guild.id}`, Date.now());
   if(cfxgnlk == '2') return message.channel.send(cfx2) - db.add(`cfxkredipuan${user.id}`, 800) - db.set(`kredizaman${message.guild.id}`, Date.now());
     if(cfxgnlk == '3') return message.channel.send(cfx3) - db.add(`cfxkredipuan${user.id}`, 1000) - db.set(`kredizaman${message.guild.id}`, Date.now());
  
      }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlük-kredi',
  description: 'CFX',
  bu_kod_codefenix_kod_paylasim_ekibi_tarafindan_yazilmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'
};
