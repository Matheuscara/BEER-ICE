const { body, validationResult } = require('express-validator');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { unauthorized } = status;
const { nomeInvalido } = messages;

const updateValidationRules = () => [
  body('name')
    .exists()
    .matches(/^[a-zA-Z ]{12,30}$/)
    .isLength({ min: 12 }),
];

const validateUpdate = (req, res, next) => {
  const errors = validationResult(req);
  const errorMsg = { message: nomeInvalido };

  if (errors.isEmpty()) return next();

  return res.status(unauthorized).json(errorMsg);
};

module.exports = { updateValidationRules, validateUpdate };
