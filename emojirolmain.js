client.on('message', async message => {

let cfxk = await db.fetch(`cfxemoci${message.guild.id}`)
let cfxkmesaj = await db.fetch(`cfxkmesaj${message.guild.id}`)
let cfxkmesajlogat = message.guild.channels.find('id', cfxkmesaj);

  
if(cfxk == 'Kapalı') return;
if(message.channel.id !== cfxkmesaj) return;
  
if(cfxk == 'Açık') {
if (message.content === `${prefix}emojirolbaşlat`) {
      if(message.author.bot) return; 
      message.channel.bulkDelete(1)
cfxkmesajlogat.send(`Bu Bir Emoji Rol Alma Mesajıdır! Bu Mesajı Kendinize Göre Değiştirebilirsiniz \n **CodeFENIX KOD PAYLASIM**`).then(async function(sentEmbed) { // BU MESAJI DEĞİŞTİREBİLİRSİNİZ

        const emojideistir = ["✅"];
        const filter = (reaction) =>

          emojideistir.includes(reaction.emoji.name)
        await sentEmbed.react(emojideistir[0]).catch(function() {});
              var reactions = sentEmbed.createReactionCollector(filter, {
        });

client.on("messageReactionAdd", async (reaction,user)=>{
    var cfxeorol = await db.fetch(`cfxemojirol${message.guild.id}`)
    let cfxeorol2 = reaction.message.guild.roles.find('id', cfxeorol)
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;

  if(reaction.emoji.name == "✅"){         
    reaction.message.guild.member(user).addRole(cfxeorol2).catch(console.error);
  }
});
})
}
}
})
