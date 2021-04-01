const { body, validationResult } = require('express-validator');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { unauthorized } = status;
const { dadosInvalidos } = messages;

const loginValidationRules = () => [
  body('email')
    .exists(),
  body('email')
    .isEmail()
    .withMessage({
      dadosInvalidos,
    }),
  body('password')
    .exists()
    .isLength({ min: 6 }),
];

const validateLogin = (req, res, next) => {
  const errors = validationResult(req);
  const errorMsg = dadosInvalidos;

  if (errors.isEmpty()) return next();

  return res.status(unauthorized).json(errorMsg);
};

module.exports = { loginValidationRules, validateLogin };
