const express = require('express')
const rotas = express()

rotas.get('/', (req, res) => {
  res.json({ mensagem: 'Olá, mundo!' })
})

module.exports = rotas
