const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var rotas = require('./rotas');
const sequelize = require('./connection');

sequelize.authenticate().then(()=>{console.log("Conectado com sucesso")}).catch((erro)=>{console.log(erro)})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/', rotas);

app.listen(3000, () => {
    console.log('API Rodando!')
})
