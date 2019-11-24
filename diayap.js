const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
     
let aydi = args[0]
let dia = message.guild.members.get(args[0]);
let cfxz = message.guild.roles.find(cfxz => cfxz.name === "Diamond");
  
  const cfx = new Discord.RichEmbed()
  .setColor("#c987ff")
  .setDescription(`**${dia}** artık **[ Diamond üye ]** oldu!`)
  .setImage(`https://cdn.discordapp.com/attachments/647135800420466688/647376223646777374/giphy.gif`)
    
  if (!aydi) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`cfxz${aydi}`, 'diamond')
  await(dia.addRole(cfxz.id));
  message.channel.send(cfx)    
}
exports.conf = { enabled: true, guildOnly: false, aliases: [], permLevel: 4 };
exports.help = { name: 'diayap' };
