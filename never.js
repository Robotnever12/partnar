const Discord = require("discord.js");
const gardi = new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment");
const fs = require("fs");
var prefix = "g+";

gardi.on("ready", () => {
  console.log(`Logged in as ${gardi.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${gardi.user.username} " ]`);
  console.log("");
  console.log("information:");
  console.log("");
  console.log(`servers! [ " ${gardi.guilds.size} " ]`);
  console.log(`Users! [ " ${gardi.users.size} " ]`);
  console.log(`channels! [ " ${gardi.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});



gardi.on("ready", () => {
  gardi.user.setActivity("partnar Blood", {
    type: "PLAYING" 
  }); 
  gardi.user.setStatus("ONLINE");
});

gardi.on("message", message => {
if (message.content.includes("discord.gg"))
{ 
if (message.channel.type === "dm")
  
gardi.channels.get("761207728936583169").send(
`<@${message.author.id}>`+`${message.content}`
)
}})

 gardi.login("NzYxOTA5MzEyOTcxOTk3MjM0.X3hdVw.3yXd3fkafsbWtG7H9kmqz2JqJdc") 



//////
gardi.on("message", message => {
if (message.content.includes("discord.gg"))
{
const embed = new Discord.RichEmbed().setColor("#F30700")
.setDescription(`**بەسەرکەوتوی ڕیکلامەکەت کرا
**

**__لینکی سێرڤەرەکامان __**





https://discord.gg/T2r8fZf

**`);
message.author.sendEmbed(embed);
}
});

gardi.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "partnar") {
if (!(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {
message.reply("**هاتم ..**!");
})
.catch(console.log);
} else {
message.reply("**- لە هیچ ڤۆیسێک نیت**");
}
}
});
