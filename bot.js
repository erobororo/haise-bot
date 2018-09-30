const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


let prefix = "s!";


client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;


  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Hi! I’m Sasaki Haise, your new assistant. I respond best when you use s! followed by another word, so try it out sometime! I look forward to working with you.");
  } 

});



client.on("message", (message) => {

  if (message.author.bot) return;


  if (message.content.includes("i love you haise")) {
    message.channel.send("..................ah//....");
  } 

   
});








client.login("NDk1MzkzNjA4ODYyNzkzNzMw.DpIFuA.0ZD-V0dZdDLlqR1sTgqq5jMsNLI");


