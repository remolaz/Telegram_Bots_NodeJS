process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'jBrSJ0hZp_bkHMoN45iwG3ww6NCppNw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const chatId = 487516;

bot.sendMessage(chatId, 'Hello World!');