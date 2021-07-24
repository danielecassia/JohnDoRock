class QueryError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'QueryError';
  }
}

module.exports = QueryError;
