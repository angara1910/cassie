client.on("guildMemberAdd", async member => {
let cfxt = await db.fetch(`cfxget${member.guild.id}`)
let cfxkanal = member.guild.channels.find('id', cfxt)


const ca = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(900, 450)
var cfx = canvas.getContext('2d');
loadImage(cassieload.cg).then(cg => {
loadImage(ca).then(caa => {
cfx.drawImage(cg, 0, 0, 900, 450);
cfx.drawImage(caa, 22,80, 264, 262  );
cfx.beginPath()
cfx.beginPath()
cfx.fillStyle = `#03fcfc`;
cfx.font = '36px sans-serif';
cfx.textAlign = "left";
cfx.fillText(`${member.user.tag}`, 320, 100)
  
cfxkanal.send(new Discord.Attachment(canvas.toBuffer(), "codefenixgiris.png"))
})}) 
})



client.on("guildMemberRemove", async member => {
  
let cfxt = await db.fetch(`cfxget${member.guild.id}`)

let cfxkanal = member.guild.channels.find('id', cfxt)



const ca = member.user.displayAvatarURL
var { createCanvas, loadImage } = require('canvas')
var canvas = createCanvas(900, 450)
var cfx = canvas.getContext('2d');
loadImage(cassieload.cc).then(cc => {
loadImage(ca).then(caa => {
cfx.drawImage(cc, 0, 0, 900, 450);
cfx.drawImage(caa, 22,80, 264, 262  );
cfx.beginPath()
cfx.fillStyle = `#03fcfc`;
cfx.font = '36px sans-serif';
cfx.textAlign = "left";
cfx.fillText(`${member.user.tag}`, 320, 100)
  
cfxkanal.send(new Discord.Attachment(canvas.toBuffer(), "codefenixcikis.png"))
})}) 
})


var cassieload = {
  "cc": "https://cdn.discordapp.com/attachments/636646818372911153/642077975516545034/Logopit_1573153684581.png",
  "cg": "https://cdn.discordapp.com/attachments/636646818372911153/642077976225251328/Logopit_1573153649460.png",
}
