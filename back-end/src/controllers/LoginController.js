const { Router } = require('express');

const LoginRouter = Router();

// services imports
const LoginService = require('../services/LoginService');

// middleware imports
const { validateLogin, loginValidationRules } = require('../middlewares/validateLogin');

const LoginUsers = async (req, res) => {
  const { email, password } = req.body;
  const { status, message } = await LoginService(email, password);

  return res.status(status).json(message);
};

LoginRouter.post('/', loginValidationRules(), validateLogin, LoginUsers);

module.exports = LoginRouter;
