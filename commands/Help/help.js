const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

    if (message.content === '?help') {
        message.react('✅');
    } 

let embed = new Discord.MessageEmbed()

   .setTitle(`Ticket`)
   .setDescription(`Hey @${message.author.tag} Mamnoon Az In Az Bot Ma Estefade Kardid`)
   .setColor(`#A025E2`)
   .addField("```$setlogs```", "Az In Command Baraye Set Kardan Log Dar Channel Khod Estefade Konid ```?setlogs #channel```", false)
   .addField("```?ticket```", "Az Command Baraye Sakhtane Ticket Estefade Konid ```?ticket```", false)
   .addField("```?close```", "Az In Command Baraye Delete Kardan Ya Bastane Har Ticket Anjam Bedid ```?close```", false)
   .setFooter("Coded By † 011 ᵏᵃʳᵇᵃᶻⁱ#1919", `https://media.discordapp.net/attachments/940658645694296075/941455692559179776/IMG_20220208_164334.jpg`)
   return message.channel.send(embed);

}
exports.help = {
    name: "help",
}