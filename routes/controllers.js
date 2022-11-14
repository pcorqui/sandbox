//solo para routear las peticiones a cada endpoint

const { application } = require('express');
const saldoRouter = require('./saldo.router');
const usuariosRouter = require('./users.router')


function routerApi(app){
    app.use('/saldo', saldoRouter)
    app.use('/usuarios', usuariosRouter)
}

module.exports = routerApi;

