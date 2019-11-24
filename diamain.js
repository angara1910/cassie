client.on("message", async msg => {  
const diauyetekst = new Discord.RichEmbed()
.setDescription(`** :gem: Diamond Üyemiz Aramıza Katıldı!**`)
.setColor("#c987ff")
let zamanasimi = 300000
let dialar = await db.fetch(`cfxz${msg.author.id}`)
let diadb = await db.fetch(`diasure${msg.author.id}`);
if (dialar == 'diamond') {  
if (diadb !== null && zamanasimi - (Date.now() - diadb) > 0) {
let time = ms(zamanasimi - (Date.now() - diadb)); } else {
if(msg.author.bot) return;   
if (msg.content.length > 1) {
db.set(`diasure${msg.author.id}`, Date.now());
msg.channel.send(diauyetekst).then(msg => { msg.delete(10000) })}}}})
