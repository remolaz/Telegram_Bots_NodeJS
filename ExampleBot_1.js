process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'jBrSJ0hZp_bkHMoN45iwG3ww6NCppNw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var sleep = require('sleep'); 
var randomInt = require('random-int');
var request = require('request');
let date = require('date-and-time');
var scheduler = require('node-schedule');

//TEMPO
var rispTempo = "La temperatura e' di ";
var urlo='http://api.openweathermap.org/data/2.5/weather?q=Rennes,fr&appid=62776c924bce63657da8eed2&units=metric&lang=it';
request({url: urlo, json: true}, function(err, res, data) {
  if (err) {
    throw err;
  }    
  rispTempo = rispTempo + data.main.temp.toFixed();
  rispTempo = rispTempo + " gradi, ";
  rispTempo = rispTempo + data.weather[0].description;
  //console.log(rispTempo);
});

const chatID = 487516; // Only for a specific chat

var montlyJob = scheduler.scheduleJob('1 30 7 * * *', function(){

  console.log('Buongiorno Remo!');

  bot.sendMessage(chatID, 'Buongiorno Remo!');

});


//START MESSAGE
bot.on('message', (msg) => {

// const chatId = msg.chat.id;
const chatId = 487516647; // Only for a specific chat
// console.log(chatId);

bot.sendMessage(chatId, '--Message Received--');

let now = new Date();
let x_minutes_later = date.addMinutes(now, 0); 
bot.sendMessage(chatId, date.format(x_minutes_later, 'HH:mm'));

//RISPONDO SOLO A MAMMA
// if (msg.from.first_name === "Vitina"){
    
//WAITING TIME
// sec = randomInt(1, 10);
// console.log(sec);

//SALUTE
var salute = "come stai";
var salute2 = "stai bene";
if (msg.text.toString().toLowerCase().includes(salute) || msg.text.toString().toLowerCase().includes(salute2)) { 
    // sleep.sleep(sec);
    bot.sendMessage(chatId, "Sto bene, tutto apposto e tu?");
}

var ciao = "ciao";
if (msg.text.toString().toLowerCase().includes(ciao)) { 
    // sleep.sleep(sec);
    bot.sendMessage(chatId, "ciao");
}

//TEMPO
var tempo = "tempo";
if (msg.text.toString().toLowerCase().includes(tempo)) { 
    // sleep.sleep(sec);
    bot.sendMessage(chatId, rispTempo);
}


//}//RISPONDO SOLO A MAMMA

});
