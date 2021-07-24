const { validationResult } = require('express-validator');

function validate(validations) {
  return async function(req, res, next) {
    for(const validation of validations) {
      await validation.run(req);
    }

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json(result.errors);
    }
    next();
  };
}

module.exports = validate;