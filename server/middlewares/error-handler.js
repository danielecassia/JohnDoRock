const { UniqueConstraintError } = require('sequelize');
const AuthorizationError = require('../errors/AuthorizationError');
const QueryError = require('../errors/QueryError');

function errorHandler(error, req, res, next) {
  let message = error.message;
  let status = 500;

  if (error instanceof AuthorizationError) {
    status = 403;
  }

  if (error instanceof QueryError) {
    status = 406;
  }
  if (error instanceof UniqueConstraintError) {
    status = 406;
    const field = error.errors[0].path.split('.')[1];
    message = `Já existe um registro no sistema com esse ${field}`;
  }

  console.log(error);
  res.status(status).json(message);
}

module.exports = errorHandler;
