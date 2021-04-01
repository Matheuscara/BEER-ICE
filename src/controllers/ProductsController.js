const { Router } = require('express');

const ProductsRouter = Router();

// services imports
const getAllProductsService = require('../services/getAllProductsService');

// middleware imports

const GetAllProducts = async (_req, res) => {
  const { status, message } = await getAllProductsService();

  return res.status(status).json(message);
};

ProductsRouter.get('/', GetAllProducts);

module.exports = ProductsRouter;
