const express = require('express')
const validarCorpo = require('./intermediarios/validarCorpo')
const { cadastrarUsuario } = require('./controladores/usuarios')
const usuario = require('./esquemas/usuario')
const rotas = express()

rotas.get('/', (req, res) => res.send('Olá, mundo'))
rotas.post('/usuarios', validarCorpo(usuario), cadastrarUsuario)

module.exports = rotas
