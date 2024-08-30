require('dotenv').config();
const express = require('express');
const nodescadule = require('node-schedule');
const Mensagens = require('./job/mensagens');
const venom = require('venom-bot');

app = express();

console.log('App rodando...');

var clientVenomBot;

const cronSendCodeActive = process.env.SEND_CODE_ACTIVE;
const cronSendCode = process.env.SEND_CODE;

//Inicia Venom

const fs = require('fs');


venom
  .create(
    'sessionName',
    (base64Qr, asciiQR) => {
      console.log(asciiQR); // Opcional to log the QR in the terminal
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], 'base64');

      var imageBuffer = response;
      require('fs').writeFile(
        'out.png',
        imageBuffer['data'],
        'binary',
        function (err) {
          if (err != null) {
            console.log(err);
          }
        }
      );
    },
    undefined,
    { logQR: false }
  )
  .then((client) => {
    clientVenomBot = client;
   // start(client);
  })
  .catch((erro) => {
    console.log(erro);
  });

if(cronSendCodeActive == 'true'){
    nodescadule.scheduleJob(cronSendCode, () =>{
        const mensagens = new Mensagens();
        mensagens.sendMessageNewUser(clientVenomBot);
    })
}

app.listen(21000);