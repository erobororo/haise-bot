const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
});


let prefix = "s!";


client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;


  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Hello! I’m Sasaki Haise, your new assistant. The best way to reach me is by typing s! and another word, but feel free to keep chatting like normal. I look forward to working with you!");
  } 

});


function randomMessage(){
    var randomNumber = Math.round(Math.random()*12);
    switch(randomNumber){
        case 0: return ".........Oh.";
        case 1: return "W-what!?";
        case 2: return "Eh?";
        case 3: return "U-um...!";
        case 4: return "Oh....um, thank you...";
        case 5: return "That's very kind of you...";
        case 6: return "Ah..."
        case 7: return "M-me?"
        case 8: return "...Let's talk about that later."
        case 9: return "Are you sure...?"
        case 10: return "...Come again?"
        case 11: return "Haa........."
        case 12: return "I......ah..."
    }
}

client.on("message", (message)=>{ 

  if (message.author.bot) return;


  if (message.content.includes("i love you haise")) {
    message.channel.send(randomMessage());
  } else

    if (message.content.includes("I love you haise")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you Haise")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("i love you, haise")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you, haise")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("i love you Haise")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you, Haise")) {
    message.channel.send(randomMessage());
  } else




  if (message.content.includes("i love you sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you Sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("i love you, sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you, sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("i love you Sas")) {
    message.channel.send(randomMessage());
  } else

  if (message.content.includes("I love you, Sas")) {
    message.channel.send(randomMessage());
  } else







  if (message.content.includes("what do you look like")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495877482155606035/Screen_Shot_2018-09-28_at_7.41.57_PM.png");
  } 

});




client.login("NDk1MzkzNjA4ODYyNzkzNzMw.DpIFuA.0ZD-V0dZdDLlqR1sTgqq5jMsNLI");





