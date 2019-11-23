client.on("message", async msg => {
let cfxy = await db.fetch(`reklam_${msg.guild.id}`)
if (!msg.member.hasPermission("BAN_MEMBERS")) {
if (cfxy == 'Açık') {
        const reklam = ["discord.gg","https//",".com",".xyz",".net", ".com.tr", ".glitch.me" , ".org", ".net", ".site", ".co", ".dx.am", ".tk", ".cf", ".ga"];
        if (reklam.some(word => msg.content.includes(word))) {
          try {          
         const cfxiy = new Discord.RichEmbed()
          .setTitle("Sunucunda " + msg.author.tag + " REKLAM YAPIYOR!")
          .setColor(0x00AE86)
          .setDescription(msg.author + "kullanıcısı " + msg.guild + " sunucusunda reklam yaptı.")
          .addField("Kullanıcının mesajı:", "**" + msg.content + "**")  
  msg.guild.owner.send(cfxiy)                           
               msg.delete(); 
                  return;             
          } catch(err) {
            console.log(err);
          }
        } } else if (cfxy == 'Kapalı') {

}
}
});
