class AuthorizationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'AuthError';
  }
}

module.exports = AuthorizationError;
