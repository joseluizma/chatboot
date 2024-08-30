const { getNewUsers } = require("../repository/usuario");

class Mensagens {
    constructor() {}


    async sendMessageNewUser(clientVenomBot) {
        let usuarios = await getNewUsers();

        usuarios.forEach( usuario => {
            if(usuario.telefone != '') {

                    // Send basic text
                    // clientVenomBot
                    // .sendText(`${usuario.telefone}@c.us`, '👋 Hello from venom!')
                    // .then((result) => {
                    //     console.log('Result: ', result); //return object success
                    // })
                    // .catch((erro) => {
                    //     console.error('Error when sending: ', erro); //return object error
                    // });

                clientVenomBot.sendText(`${usuario.telefone}@c.us`, `Olá, segue seu código de confirmação ${usuario.codigoAtivacao}`).then((result) => {
                    console.log('Result: ', result); //return object success
                  })
                  .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                  });
               
            }  
        });
    }
}

module.exports = Mensagens;