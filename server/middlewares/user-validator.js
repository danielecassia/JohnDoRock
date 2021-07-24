const { body } = require('express-validator');
const validate = require('./validate');

function getValidations(method) {
  switch (method) {
  case 'login': {
    return [
      body('email').exists()
        .withMessage('O campo de email deve estar preenchido.')
        .isEmail()
        .withMessage('O email inserido não é válido.'),
      body('senha').exists()
        .withMessage('Você deve digitar uma senha')
        .notEmpty()
        .withMessage('Sua senha deve estar preenchida'),
    ];
  };
  case 'createUser': {
    return [
      body('name').exists()
        .withMessage('Você deve colocar um nome.')
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('Seu nome só pode conter letras.'),
        body('email').exists()
        .withMessage('O campo de email deve estar preenchido.')
        .isEmail()
        .withMessage('O email inserido não é válido.'),
      body('senha').exists()
        .withMessage('Você deve digitar uma senha')
        .isStrongPassword()
        .withMessage('Sua senha não é forte'),
      // body('image').exists()
      //   .withMessage('O campo de imagem deve estar preenchido')
      //   .isURL()
      //   .withMessage('A imagem deve ser uma URL.'),
    ];
  };
  case 'updateUser': {
    return [
      body('name')
        .optional()
        .isAlpha('pt-BR', {ignore: ' '})
        .withMessage('Seu nome só pode conter letras.'),
      body('email')
        .optional()
        .isEmail()
        .withMessage('O email inserido não é válido.'),
    ];
  };
  }
}

function userValidate(method) {
  const validations = getValidations(method);
  return validate(validations);
}

module.exports = userValidate;
