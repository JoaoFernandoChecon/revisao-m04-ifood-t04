const Joi = require('joi')

const usuario = Joi.object({
  nome: Joi.string().required().messages({
    'any.required': 'O campo nome é obrigatório',
    'string.base': 'O campo nome deve ser um texto',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'O campo email é obrigatório',
    'string.base': 'E-mail inválido',
    'string.email': 'E-mail inválido',
  }),
  senha: Joi.string().min(5).max(15).required().messages({
    'any.required': 'O campo senha é obrigatório',
    'string.base': 'A senha deve conter caracteres válidos',
    'string.min': 'A senha deve conter no mínimo 5 caracteres',
    'string.max': 'A senha deve conter no máximo 15 caracteres',
  }),
})

module.exports = usuario
