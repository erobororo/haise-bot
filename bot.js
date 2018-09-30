const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
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
        case 6: return "Ah...";
        case 7: return "M-me?";
        case 8: return "...Let's talk about that later.";
        case 9: return "Are you sure...?";
        case 10: return "...Come again?";
        case 11: return "Haa.........";
        case 12: return "I......ah...";
    }
}


function randomImage(){
    var randomNumber = Math.round(Math.random()*12);
    switch(randomNumber){
        case 0: return "https://cdn.discordapp.com/attachments/495806477995343882/495877482155606035/Screen_Shot_2018-09-28_at_7.41.57_PM.png";
        case 1: return "https://cdn.discordapp.com/attachments/495806477995343882/495888079937077249/Screen_Shot_2017-11-06_at_11.25.14_PM.png";
        case 2: return "https://cdn.discordapp.com/attachments/495806477995343882/495888085557706754/Screen_Shot_2018-04-14_at_11.44.24_AM.png";
        case 3: return "https://cdn.discordapp.com/attachments/495806477995343882/495888089441370123/Screen_Shot_2018-03-15_at_10.58.04_PM.png";
        case 4: return "https://cdn.discordapp.com/attachments/495806477995343882/495888079823962112/p_001.png";
        case 5: return "https://cdn.discordapp.com/attachments/495806477995343882/495888076099551234/p_001.jpg";
        case 6: return "https://cdn.discordapp.com/attachments/495806477995343882/495888072525742080/unknown-2.png";
        case 7: return "https://cdn.discordapp.com/attachments/495806477995343882/495891097390940170/tumblr_o6n4lfHmjP1ujrkg6o1_1280.jpg";
        case 8: return "https://cdn.discordapp.com/attachments/495806477995343882/495891202294415370/tumblr_obutvxXR3P1trjqzto1_1280.jpg";
        case 9: return "https://cdn.discordapp.com/attachments/495806477995343882/495891208908963841/tumblr_nz4fl9GUiX1tz1ui0o1_500.jpg";
        case 10: return "https://cdn.discordapp.com/attachments/495806477995343882/495891404304678915/Screen_Shot_2016-02-05_at_9.19.57_PM.png";
        case 11: return "https://cdn.discordapp.com/attachments/495806477995343882/495891720861515776/Screen_Shot_2016-01-02_at_10.06.29_PM.png";
        case 12: return "https://cdn.discordapp.com/attachments/495806477995343882/495897042111954944/socold.gif";
    }
}

let prefix = "s!";


client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;


  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Hello, I’m Sasaki Haise, your new assistant. The best way to reach me is by typing s! and another word, but feel free to keep chatting like normal. I look forward to working with you!");
  } else


  if (message.content.startsWith(prefix + "selfie")) {
    message.channel.send(randomImage());
  }

});


client.on("message", (message) => {

  if (message.content.includes("hhaise....aahahah...")) {
    message.channel.send("......*cough* Anyway...");
  } 

});



client.on("message", (message)=>{ 

  if (message.author.bot) return;


  if (message.content.includes("i love haise")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I love haise")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("i love Haise")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I love Haise")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("i love sas")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I love sas")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("i love Sas")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I love Sas")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I Love Sas")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else

  if (message.content.includes("I love Haise")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888066511241226/tumblr_pb2p2wFXfr1tlsxtjo2_1280.jpg");
  } else




  if (message.content.includes("fuck")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("Fuck")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("bitch")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("Bitch")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("suck my")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("Suck my")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else

  if (message.content.includes("Suck My")) {
    message.channel.send("https://cdn.discordapp.com/attachments/495806477995343882/495888725037940747/sigh.gif  Language...");
  } else







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
  } 







});




client.login("NDk1MzkzNjA4ODYyNzkzNzMw.DpIFuA.0ZD-V0dZdDLlqR1sTgqq5jMsNLI");





