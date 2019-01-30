process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'jBrSJ0hZp_bkHMoN45iwG3ww6NCppNw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// WAITING TIME
// from terminal write [sudo npm install --save sleep] to install the function
var sleep = require('sleep'); 
// from terminal write [sudo npm install --save random-int] to install the function
var randomInt = require('random-int');

//START MESSAGE
bot.on('message', (msg) => {

//RISPONDO SOLO A MAMMA
if (msg.from.first_name === "Mamma"){ // I answer only to the user called "Mamma"
    
//WAITING TIME
sec = randomInt(1, 10);
//console.log(sec);

var ciao = "ciao";
if (msg.text.toString().toLowerCase().includes(ciao)) { 
  sleep.sleep(sec);
  bot.sendMessage(msg.chat.id, "ciao mamma");
}

}// Answer only to "Mamma"

});



