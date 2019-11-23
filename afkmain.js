client.on("message", async message => {
  const ms = require('parse-ms');

  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
    let cfxtime = await db.fetch(`afk_süre_${message.author.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
      const codefenixkodpaylasim = new Discord.RichEmbed()
    .addField(`\`${message.author.username}\` -->  **AFK modundan çıktın.**`,  `\`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniye**  süredir,  AFK modundaydın`)
    .setColor("#00ff88")
    .setFooter(`CodeFENIX| AFK Sistemi. `,client.user.avatarURL)
      message.channel.send(codefenixkodpaylasim);
  }
  
  var cfxu = message.mentions.users.first();
  if(!cfxu) return;
  var REASON = await db.fetch(`afk_${cfxu.id}`);
  
  if(REASON) {
    let cfxtime = await db.fetch(`afk_süre_${cfxu.id}`);
    let cfxs = ms(Date.now() - cfxtime);
    const codefenixkodpaylasim2 = new Discord.RichEmbed()
    .addField(`\`${cfxu.username}\` adlı kullanıcı \`${REASON}\` sebebiyle;`,` \`${cfxs.hours}\` **saat**  \`${cfxs.minutes}\` **dakika** \`${cfxs.seconds}\` **saniye** den beri **AFK**`)
    .setColor("#00ff88")
    .setFooter(`CodeFENIX| AFK Sistemi.`, client.user.avatarURL)
    message.reply(codefenixkodpaylasim2)
  }
});
