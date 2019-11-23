const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
  
  const cfxyetki = new Discord.RichEmbed()
  .setDescription(`Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın!`)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(cfxyetki) 
  
  let sayac = await db.fetch(`sayacSayi_${message.guild.id}`)
  let i = await db.fetch(`sayacSayi_${message.guild.id}`)
  let toplamkullanıcı = i - message.guild.memberCount
  
   const cfxc1 = new Discord.RichEmbed()
  .setDescription(`**Sayaç Çıkış yazısı sıfırlandı.**`)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
   const cfxc2 = new Discord.RichEmbed()
  .setTitle("**Sayaç Çıkış Mesajı Bilgilendirme**:")
  .addField("{sayac}", "Belirtilen Hedef Sayıyı Belirtmek İçin Kullanılır.")
  .addField("{kalantoplamkullanıcı}", "Sunucudaki Toplam Kullanıcı Sayısını Belirtmek İçin Kullanılır.")
  .addField("{cikan}", "Çıkış Yapan Kullanıcıları Belirtmek İçin Kullanılır.")
  .addField("** ** \n **Sayaç Çıkış Mesajı** Örnek:", "`Görüşürüz {cikan}, {sayac} kişi olmamıza {kalantoplamkullanıcı} kişi kaldı!`")
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
   const cfxc3 = new Discord.RichEmbed()
  .setTitle("**Sayaç Çıkış Mesajı Bilgilendirme**:")
  .addField("{sayac}", "Belirtilen Hedef Sayıyı Belirtmek İçin Kullanılır.")
  .addField("{kalantoplamkullanıcı}", "Sunucudaki Toplam Kullanıcı Sayısını Belirtmek İçin Kullanılır.")
  .addField("{cikan}", "Çıkış Yapan Kullanıcıları Belirtmek İçin Kullanılır.")
  .addField("** ** \n **Sayaç Çıkış Mesajı** Örnek:", "`Görüşürüz {cikan}, {sayac} kişi olmamıza {kalantoplamkullanıcı} kişi kaldı!`")
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL)
   const cfxc4 = new Discord.RichEmbed()
  .setDescription(`**Sayaç Çıkış Mesajı Ayarlandı.**`)
  .setColor("#00ff88")
  .setFooter(`CodeFENIX| Sayaç Sistemi.`, client.user.avatarURL) 
  
    if(args[0] == 'sıfırla') {
      
      db.delete(`ccikissayac_${message.guild.id}`)
       return message.channel.send(cfxc1);
      
    }  
  
  let cfx = args.join(' ');
  
  if (cfx.length < 1) return message.channel.send(cfxc2); 
  
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
   
  let ccikissayac = await db.fetch(`ccikissayac_${message.guild.id}`);
  if (ccikissayac == null) ccikissayac = ` `
    if (args.length < 1) return message.channel.send(cfxc3);
    let newMessage;
    if (args.join(" ").toLowerCase() === `none`) newMessage = '';
    else newMessage = args.join(" ").trim();
    db.set(`ccikissayac_${message.guild.id}`, newMessage).then(i => {
        return message.channel.send(cfxc4)
    })
}

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['smc'],
  permLevel: 3
};

exports.help = {
  name: 'sayaç-çıkışmesajı',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'smc -yazınız-'
};
