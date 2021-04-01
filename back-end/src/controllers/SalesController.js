const { Router } = require('express');

const SalesRouter = Router();

// services imports
const CreateSalesService = require('../services/CreateSalesService');

// middleware imports

const CreateSale = async (req, res) => {
  const { status, message } = await CreateSalesService(req.body);

  return res.status(status).json(message);
};

SalesRouter.post('/', CreateSale);

module.exports = SalesRouter;
