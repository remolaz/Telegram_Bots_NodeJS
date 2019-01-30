process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'jBrSJ0hZp_bkHMoN45iwG3ww6NCppNw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var randomInt = require('random-int');
let date = require('date-and-time');
var scheduler = require('node-schedule');


var data = new Date;
  data = date.addMinutes(data,1);
  console.log('Data prima dello scheduler: ' + date.format(data,'HH:mm') );

const chatId = 487516;

// var j = schedule.scheduleJob('1 * * * * *', function(){ // Every Minute
var j = scheduler.scheduleJob(data, function(){

  bot.sendMessage(chatId, 'Buongiorno Remo!');
  console.log('This job ran at ' + date.format(new Date(),'HH:mm') );
  
  data.setMinutes(randomInt(0, 59));
  data.setHours(randomInt(7, 8));
  data = date.addDays(data, 1);

  console.log('Data aggirnata nello scheduler: ' + date.format(data,'HH:mm') );

  j.reschedule(data);

});

