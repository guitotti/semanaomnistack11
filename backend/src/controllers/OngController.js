const crypto = require('crypto');
const connection = require('../database/connection'); //importando a conexão com banco de dados, criada no arquivo connection.js

//module.exports exporta os métodos e objetos que estão dentro das chaves dentro das chavaes
module.exports = {

    //método que faz listagem:
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    //método que cria:
    async create(request, response){

        const {name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        //await serve para aguardar finalizar o código abaixo, para então retornar "return response.json"
        await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id}); // retorna o id pq é ele que a ong vai utilizar para se conectar na aplicação

    }
}