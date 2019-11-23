client.on("channelDelete", async function(channel) {
  
  let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
  let cfxz = await db.fetch(`kanalkoruma${channel.guild.id}`)
  let cfxk = await db.fetch(`kanaluyari${channel.guild.member(logs.entries.first().executor).id}`)
  let cfxrol = await db.fetch(`cfxrol${channel.guild.id}`)
  let cfxrol2 = await db.fetch(`cfxrol2${channel.guild.id}`)
  let cfxg = await db.fetch(`klog${channel.guild.id}`)
  let cfxh = channel.guild.channels.find('id', cfxg)
  let cfxl = channel.member;
  if (cfxz == 'Kapalı') return;
  if (cfxz == 'Açık') {
    

    
      db.add(`kanaluyari${channel.guild.member(logs.entries.first().executor).id}`, 1)
    
      if (cfxk === null) {
        let cfxu = new Discord.RichEmbed()
                  .setTitle(`**CFX Kanal Koruma Sistemi**`)
        .setColor("#00ff88")
        .setFooter(`CodeFENIX|CFX`)
        .setDescription(`<@${channel.guild.member(logs.entries.first().executor).id}> Kanal Koruma Sistemi Devrede **Sildiği Kanal:** \`${channel.name}\` **Uyarı (1/3)**`)
      cfxh.send(cfxu)
        
      }
    if (cfxk === 1) {
      let cfxu = new Discord.RichEmbed()
                .setTitle(`**CFX Kanal Koruma Sistemi**`)
        .setColor("#00ff88")
        .setFooter(`CodeFENIX|CFX`)
        .setDescription(`<@${channel.guild.member(logs.entries.first().executor).id}> Kanal Koruma Sistemi Devrede. **Sildiği Kanal:** \`${channel.name}\` **Uyarı (2/3)**`)
     cfxh.send(cfxu)
      
    }
    if (cfxk === 2) {

      
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
     
    if(logs.entries.first().executor.bot) return;
    if (logs.entries.first().executor.id === "497674151251804160") return;
          if (logs.entries.first().executor.id === "522138336056573972") return;
      
      
    channel.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
    channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get(cfxrol))
    channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get(cfxrol2))
      
    })
  
      db.delete(`kanaluyari${channel.guild.member(logs.entries.first().executor).id}`)
      
    const silen = channel.guild.member(logs.entries.first().executor).user  
    const cfxj = new Discord.RichEmbed()
          .setTitle(`**CFX Kanal Koruma Sistemi**`)
          .setColor("#00ff88")
          .setDescription(`\`${channel.name}\` Adlı Kanal Silindi. Silen: \`${silen.tag}\`, Yetkileri Alındı! **Uyarı(3/3)**`)
          .setFooter(`CodeFENIX|CFX`)

    cfxh.send(cfxj)
      
    }
       
    }   
  
});


