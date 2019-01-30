# import requests

# raccolgo nella variabile `testo` ciò che gli utenti scriveranno in chat al bot
# testo=Hook['params']['message']['text']

# raccolgo la chat ID
# chatID=Hook['params']['message']['chat']['id']

# imposto l'URL per inviare i messaggi indietro al bot
# URL='https://api.telegram.org/bot' + Hook['env']['remolaz1bot'] + '/sendMessage'

# invio indietro alla chat ID il messaggio ricevuto
# richiesta=requests.get(URL,verify=False,data={'chat_id':chatID,'text':testo})

import requests
import json

import pprint
import logging
import microcule


def app(environ, start_response):
	bottoken = Hook['env']['remolaz1bot']
	baseURL = 'https://api.telegram.org/bot'
    
	data = json.loads(json.dumps(Hook['params']))    
	chat_id = data['message']['chat']['id']
	message = data['message']['text']
	data = { "chat_id" : chat_id, "text" : message }
	sendURL = baseURL + bottoken + "/sendMessage"	
	headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
	requests.post(sendURL, data=json.dumps(data), headers=headers, verify=False)
    
	start_response('200 OK', [('content-type', 'text/plain')])
	return '\n'

if __name__ == '__main__':
    microcule.wsgi(Hook).run(app)