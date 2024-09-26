# CHAT BOT GEMINI
O chat bot é um bot para whatsapp desenvolvido com a biblioteca Venom-bot para a interação com o whatsapp e o SDK gemini para acesso a IA do google Gemini.

ATENÇÃO! o projeto venom não é a API oficial do whasApp, logo utilize com cuidado, evite spans de mensagens!
documentação oficial do venom-bot: https://github.com/orkestral/venom

## Como utilizar.

1 - Instale as depedencias do projeto.
```
npm i
```

2 - Gere uma Chave de acesso para a API do gemini:<br/>

2.1 - Crie uma conta no console da google: [Click aqui](https://ai.google.dev/)<br/>

2.2 - Crie a chave de API para o acesso: [Click aqui](https://aistudio.google.com/app/apikey?_gl=1*185f8bu*_ga*MzcwMTA1NDE0LjE3MjczNzkzMTE.*_ga_P1DBVKWT6V*MTcyNzM3OTMxMS4xLjEuMTcyNzM4MjE1Mi4yMS4wLjE2MzEyNjM0MTg.)

2.3 - Crie um arquivo .env na raiz do projeto e complete a variavel de ambiente GEMINI_API_KEY, com sua chave da API.

3 - Start o projeto:
```
npm start
```

4 - Escaneie o QR code com o whatsApp.
