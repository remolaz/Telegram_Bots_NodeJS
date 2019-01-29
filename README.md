# Telegram Bots NodeJS in Raspberry Pi 3B+
Telegram Bots Examples written in NodeJS  

Update Raspberry pi:  
~~~~
sudo apt-get updates
sudo apt-get upgrade
~~~~
Check versions:  
~~~~
node -v
npm -v
curl -V
~~~~

How to install node on Raspberry Pi  
(Reference: https://github.com/nodesource/distributions)
~~~~
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

npm install

npm install --save node-telegram-bot-api // Per Telegram

npm install --save request // Per le richieste meteo

npm install --save random-int // Per i numeri random

npm install --save sleep // Per le pause

npm install --save node-schedule // Per programmare l’invio dei messaggi

~~~~
To execute a file .js. 
~~~~
node FileName.js
~~~~
Example: to launch the Bot  
~~~~
node /home/pi/Documents/TelegramBot/Bot.js
~~~~
