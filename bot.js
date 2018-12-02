const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NTE4NDI4ODU0MTM0NTA1NDgy.DuQorw.v411K327SQNv7RJYUd9qfp3DDkY';

bot.on("guildMemberAdd", function(member)
{
    
    var bicon = member.user.displayAvatarURL;
    var welcome = new Discord.RichEmbed()
    .setDescription(` ** User Joined ** \n ${member} joined the server **Snipes Israel ** \n We are now ${member.guild.memberCount} Members in the server!`)
    .setColor('be90dd')
    .setThumbnail(bicon);
    
    const channel = member.guild.channels.find("name", 'welcome');
    channel.sendEmbed(welcome);
    member.send("ברוך הבא לשרת הסנייפים של ישראל!");
});
bot.on('message', function(message){

});

var memberCount 
bot.on('ready',function()
{
console.log("Ready")
bot.user.setActivity(`${memberCount} Members`);
});


bot.login(process.env.token);
