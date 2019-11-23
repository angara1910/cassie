client.on("message", async msg => {
  if(msg.content.startsWith(prefix)) return;
  const db = require('quick.db');
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  const cfx = new Discord.RichEmbed()
  .setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun!`)
  .setColor("#c987ff")
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  


  
  
    if(!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    }
  
  if (msg.content.length > 7) {
    
    db.add(`xp_${id}_${gid}`, 1)
};

  if (await db.fetch(`xp_${id}_${gid}`) > 250) {
    
    db.add(`lvl_${id}_${gid}`, 1)
    msg.channel.send(cfx)
    db.delete(`xp_${id}_${gid}`)};

});
