const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  message.delete(3000)

    const codefenixkodpaylasim = new Discord.RichEmbed()
    .setTitle("_**```Yüklenen Komut Miktarı.```**_")
    .setDescription('**\n(BotADI)  **' + `\`${client.commands.size}\`` + '** adet komutu yönetiyor.**')
    .setColor("#c987ff")
    .setThumbnail(client.user.avatarURL)
    .setFooter(`${message.author.username} Tarafından Kullanıldı!`, message.author.avatarURL);

    return message.channel.send(codefenixkodpaylasim);
    
    message.channel.send();
};

exports.conf = {
  enabled: true,
  aliases: ['totalcommands'],
  guildOnly: false,
  permLevel: 4
};

exports.help = {
  name: 'komutsayısı',
  description: 'CODEFENIX KOD PAYLASIM',
  usage: 'komutsayısı'
};
