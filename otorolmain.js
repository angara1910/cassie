client.on('guildMemberAdd', async (member, guild, message) => {

 let cfxr = await  db.fetch(`otorolisim_${member.guild.id}`)
 let cfxo = await db.fetch(`autoRole_${member.guild.id}`)
 let cfxk = await db.fetch(`otorolKanal_${member.guild.id}`)
 
  if (!cfxk) return 

member.addRole(member.guild.roles.get(cfxo))
const codefenixkodpaylasim = new Discord.RichEmbed()
.setDescription(`**Sunucuya Giriş Yapan** \`${member.user.tag}\` **Kullanıcısına** \`${cfxr}\` **Rolü verildi.**`)
.setColor('0x00ff88') 
.setFooter(`CodeFENIX`, client.user.avatarURL)
member.guild.channels.get(cfxk).send(codefenixkodpaylasim);   
//CFX

});
