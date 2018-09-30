const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});


let prefix = "s!";


client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;


  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Peh!		(Approach with caution.)");
  } 

});



client.on("message", (message) => {

  if (message.author.bot) return;


  if (message.content.includes("i love you muka")) {
    message.channel.send("..................peh//....");
  } else

  if (message.content.includes("I love you muka")) {
    message.channel.send(".....Peh?!///..............");
  } else

  if (message.content.includes("i love you Muka")) {
    message.channel.send("............ah");
  } else

  if (message.content.includes("I love you Muka")) {
    message.channel.send("..........ah.....");
  } else

  if (message.content.includes("muka i love you")) {
    message.channel.send("..................peh//....");
  } else

  if (message.content.includes("muka I love you")) {
    message.channel.send(".....Peh?!///..............");
  } else

  if (message.content.includes("Muka i love you")) {
    message.channel.send("............ah");
  } else

  if (message.content.includes("Muka I love you")) {
    message.channel.send("..........ah.....");
  } else


  if (message.content.includes("mukade i love you")) {
    message.channel.send("..................peh//....");
  } else

  if (message.content.includes("mukade-chan I love you")) {
    message.channel.send(".....Peh?!///..............");
  } else

  if (message.content.includes("Muka-chan i love you")) {
    message.channel.send("............ah");
  } else

  if (message.content.includes("Mukade-chan I love you")) {
    message.channel.send("..........ah.....");
  } else

  if (message.content.includes("muka-chan i love you")) {
    message.channel.send("..................peh//....");
  } else

  if (message.content.includes("Mukade I love you")) {
    message.channel.send("..........ah.....");
  } else



 if (message.content.includes("mukade-chan")) {
    message.channel.send("......cha...?");
  } else

 if (message.content.includes("Mukade-chan")) {
    message.channel.send(".........cha...?");
  } else

   if (message.content.includes("muka-chan")) {
    message.channel.send("......cha...n..?");
  } else

 if (message.content.includes("Muka-chan")) {
    message.channel.send(".........cha......");
  } else


 if (message.content.includes("mukadechan")) {
    message.channel.send("......cha...?");
  } else

 if (message.content.includes("Mukadechan")) {
    message.channel.send(".........cha...?");
  } else

   if (message.content.includes("mukachan")) {
    message.channel.send("......cha...n..?");
  } else

 if (message.content.includes("Mukachan")) {
    message.channel.send(".........cha......");
  } else


  if (message.content.includes("peh")) {
    message.channel.send("peh!");
  } else

  if (message.content.includes("Peh")) {
    message.channel.send("Peh!");
  } else

  if (message.content.includes("fuck")) {
    message.channel.send("...");
  } else

  if (message.content.includes("Fuck")) {
    message.channel.send("......");
  } else


  if (message.content.includes("Arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } else

  if (message.content.includes("arima")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } 


  if (message.content.includes("Kishou")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } else

  if (message.content.includes("kishou")) {
    message.channel.send("Ｄ゛Ａ゛Ｒ゛Ｉ゛Ｍ゛Ａ゛　Ｋ゛Ｉ゛Ｊ゛Ｏ゛Ｕ゛");
  } 

   
});








client.login("NDk1MzkzNjA4ODYyNzkzNzMw.DpIFuA.0ZD-V0dZdDLlqR1sTgqq5jMsNLI");
