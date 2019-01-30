process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'jBrSJ0hZp_bkHMoN45iwG3ww6NCppNw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//TEMPO
var rispTempo = "La temperatura e' di ";
var urlo='http://api.openweathermap.org/data/2.5/weather?q=Rennes,fr&appid=62776c924bce63657da8eed2&units=metric&lang=it';
var request = require('request');
request({url: urlo, json: true}, function(err, res, data) {
  if (err) {
    throw err;
  }    
	rispTempo = rispTempo + data.main.temp.toFixed();
	rispTempo = rispTempo + " gradi, ";
	rispTempo = rispTempo + data.weather[0].description;
	//console.log(rispTempo);
});

// We wait to receive a message
bot.on('message', (msg) => {

//If the message contains the word "giorno", we replay with "Buongiorno!"
var giorno = "buongiorno";
if (msg.text.toString().toLowerCase().includes(giorno)) { sleep.sleep(sec);
    bot.sendMessage(msg.chat.id, "Buongiorno!");
}

//If the message contains the word "tempo", we replay with the weather conditions in the Rennes (France) city.
var tempo = "tempo";
if (msg.text.toString().toLowerCase().includes(tempo)) { sleep.sleep(sec);
    bot.sendMessage(msg.chat.id, rispTempo);
}

});



