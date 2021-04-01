const { body, validationResult } = require('express-validator');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { unauthorized } = status;
const { dadosInvalidos } = messages;

const registrationValidationRules = () => [
  body('email')
    .exists()
    .isEmail(),
  body('password')
    .exists()
    .isLength({ min: 6 }),
  body('name')
    .exists()
    .matches(/^[a-zA-Z ]{12,30}$/)
    .isLength({ min: 12 }),
];

const validateRegistration = (req, res, next) => {
  const errors = validationResult(req);
  const errorMsg = { message: dadosInvalidos };

  if (errors.isEmpty()) return next();

  return res.status(unauthorized).json(errorMsg);
};

module.exports = { registrationValidationRules, validateRegistration };
