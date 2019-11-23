const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (client, message, args) => {

  
  let user = message.author
  
     const cfx2 = new Discord.RichEmbed().setDescription(`Tebrikler 💰 **300** Kredi Çıktı Vay BEEE`).setColor("#c987ff")
      const cfx33 = new Discord.RichEmbed().setDescription(`💰 **100** Kredi Çıktı Tüh`).setColor("#c987ff")
        const cfx444 = new Discord.RichEmbed().setDescription(`Tebrikler 💰 **0** Kredi Çıktı Artık Zenginsin`).setColor("#c987ff")
            

var kasa = [       
   "kasa1",
    "kasa2",
      "kasa3"    
];


let cfxpuan = await db.fetch(`cfxkredipuan${user.id}`)

if (cfxpuan < 200) return message.channel.send(`kasa açmak için önce **200** den fazla kredin olmalı.`)

if (cfxpuan > 200) {

  
   var kazandigi = kasa[Math.floor(Math.random() * kasa.length)]; 
  
const cfx = new Discord.RichEmbed()
.setColor("#c987ff")
.setDescription(`CFX Kasası Falan Filan Açtın 💰 **200** Kredi Puanını Kullandın.`)
message.channel.send(cfx)
db.add(`cfxkredipuan${user.id}`, -200)
  if (kazandigi == 'kasa1') return message.channel.send(cfx2) - db.add(`cfxkredipuan${user.id}`, 300)
  if (kazandigi == 'kasa2') return message.channel.send(cfx33) - db.add(`cfxkredipuan${user.id}`, 100)
  if (kazandigi == 'kasa3') return message.channel.send(cfx444) - db.add(`cfxkredipuan{user.id]`, 0)

}


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kasa-aç',
  description: 'CFX',
  bu_kod_codefenix_kod_paylasim_ekibi_tarafindan_yazilmistir_izinsiz_paylasilmasi_yasaktir: 'CODEFENIX KOD PAYLASIM'
};
