const AuthorizationError = require('./AuthorizationError');

class PermissionError extends AuthorizationError {
  constructor(msg) {
    super(msg);
    this.name = 'PermissionError';
  }
}

module.exports = PermissionError;
