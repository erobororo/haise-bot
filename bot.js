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
    var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
    switch(randomNumber){
        case 0: return "Hello!";
        case 1: return "Bye!";
        case 2: return "Random";
    }
}

client.on("message", (message)=>{ 

  if (message.content.toLowerCase().includes("I love you, Haise")) { 
    message.channel.send(randomMessage());
    }
});


// client.on("message", (message) => {

//  if (message.author.bot) return;


 // if (message.content.toLowerCase().includes("I love you, Haise")) { 
   // const replies = [".........Oh.", "W-what!?", "Eh?", "U-um...!", "Oh....um, thank you...", "That’s very kind of you...", "Ah....", "P-please, not at work...!", "Um?!", "Eh???", "M-me?", "I.......love you too.", "...let’s talk about that later.", "Are you sure...?", "Ha............", "Mh..??", "......Come again?"] 
    // message.replytext = Math.floor((Math.random() * replies.length) + 0); 
    // message.channel.send(replies[message.replytext]); 

// }





   
// });






client.login("NDk1MzkzNjA4ODYyNzkzNzMw.DpIFuA.0ZD-V0dZdDLlqR1sTgqq5jMsNLI");


