client.on('guildMemberAdd', async member => {
  let cfx = await db.fetch(`cgirissayac_${member.guild.id}`)
  
 let i = await db.fetch(`sayacSayi_${member.guild.id}`)
 let kanalz = await db.fetch(`sayacKanal_${member.guild.id}`)
 let kanal = member.guild.channels.find('id', kanalz)
 let giren = member.user.tag

 
 if(!i) return;
 if(!kanalz) return; 
    
  
  var cfx13 = {
    "cll": "631921474021621771",// GIRIS EMOJISI
  }
  
  const cfxc1 = new Discord.RichEmbed()
  .setAuthor(`==============`)
  .setFooter(`Sunucu |- ${member.guild.name}`, member.guild.iconURL)
  .setTitle(`Toplam Kullanıcı |- **\`${member.guild.memberCount}\`** -|`)
  .setThumbnail(cfx13.tik)
  .setDescription(`** **  \n **\`${member.user.tag}\`** Aramıza Katıldı!\n\n -**\`${i}\`**- kişi olmamıza -**\`${i - member.guild.memberCount}\`**- kişi kaldı! \n ** ** `)
  .setColor("#00ff88")
  
    if (cfx == null) cfx = `> Toplam Kullanıcı |- **\`${member.guild.memberCount}\`** -| \n > ** ** \n > **\`${member.user.tag}\`** Aramızdan Katıldı! \n > \n > -**\`${i}\`**- kişi olmamıza -**\`${i - member.guild.memberCount}\`**- kişi kaldı!  \n > \n > ${client.emojis.get(cfx13.cll) || ' '} Sunucu |- **\`${member.guild.name}\`** ` 
    kanal.send(cfx.replace('{sayac}', `\`${i}\``).replace('{kalantoplamkullanıcı}', `\`${i - member.guild.memberCount}\``).replace('{giren}', `\`${member.user.tag}\``))    
})

client.on('guildMemberRemove', async member => { 
  let cfx = await db.fetch(`ccikissayac_${member.guild.id}`)
     
 let i = await db.fetch(`sayacSayi_${member.guild.id}`)
 let kanalz = await db.fetch(`sayacKanal_${member.guild.id}`)
 let kanal = member.guild.channels.find('id', kanalz)
  let sayac = await db.fetch(`sayacSayi_${member.guild.id}`)
  let toplamkullanıcı = i - member.guild.memberCount
  let cikan = member.user.tag
  
    if (!i) return;
    if (!kanal) return;
    
  var cfx12 = {
    
   "cl": "631921515247697930", // CIKIS EMOJISI
  }
  
   const cfxc2 = new Discord.RichEmbed()
   .setAuthor(`==============`)
   .setFooter(`Sunucu |- ${member.guild.name}`, member.guild.iconURL)
   .setTitle(`Toplam Kullanıcı |- **\`${member.guild.memberCount}\`** -|`)
   .setDescription(`** ** \n **\`${member.user.tag}\`** Aramızdan Ayrıldı!\n\n -**\`${i}\`**- kişi olmamıza -**\`${i - member.guild.memberCount}\`**- kişi kaldı! \n ** ** `)
   .setColor("#00ff88")
   
    if (cfx == null) cfx = `> Toplam Kullanıcı |- **\`${member.guild.memberCount}\`** -| \n > ** ** \n > **\`${member.user.tag}\`** Aramızdan Ayrıldı! \n > \n > -**\`${i}\`**- kişi olmamıza -**\`${i - member.guild.memberCount}\`**- kişi kaldı!  \n > \n > ${client.emojis.get(cfx12.cl) || ' '} Sunucu |- **\`${member.guild.name}\`** ` 
    kanal.send(cfx.replace('{sayac}', `\`${i}\``).replace('{kalantoplamkullanıcı}', `\`${i - member.guild.memberCount}\``).replace('{cikan}', `\`${member.user.tag}\``))  
})
