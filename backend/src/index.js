
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);

/*const express = require ('express');
const cors = require('cors');
const routes = require ('./routes'); // usando o "./" pq é um caminho, ou seja, a mesma pasta do arquivo index
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);*/

/*
ROTA
RECURSO (geralmente associado a alguma tabela do banco de dados
*/

/*
métodos HTTP

    GET: buscar/listar uma informação do back end
    POST: criar uma informação no backend
    PUT: alterar uma informação no backend
    DELETE: deletar uma informação no banckend
*/

/*
tipos de parâmetros:

query params: parâmetros nomeados enviados na rota após o símbolo de "?" (filtros, paginação)
route params: parâmetros utilizados para indentificar recursos 
request body: corpo da requisição, utilizado para criar ou alterar recursos (usuários, por exemplos)
*/

/*bancos de dados:
 
    SQL: MySQL, SQLite, Oracle, Microsoft SQl Server, PstgreSQL
    NoSQL: MongoDB, CouchDB, etc
*/

/*
Driver: SELECT * FROM users

Query Builder: table('users').select('*').where()

*/