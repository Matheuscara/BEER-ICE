const { Router } = require('express');

const OrdersRouter = Router();

// services imports
const ListAllOrdersService = require('../services/ListAllOrdersService');
const GetByIdDetailsService = require('../services/GetByIdDetailsService');
const ListAllOrdersAdminService = require('../services/ListAllOrdersAdminService');
const GetByIdOrderService = require('../services/GetByIdOrderService');
const UpdateStatusProductService = require('../services/UpdateStatusProductService');

// middleware imports

const ListAllOrders = async (req, res) => {
  const { email } = req.headers;

  const { status, message } = await ListAllOrdersService(email);

  return res.status(status).json(message);
};

const GetByIdDetails = async (req, res) => {
  const { id } = req.params;

  const { status, message } = await GetByIdDetailsService(id);

  return res.status(status).json(message);
};

const listAllOrdersAdmin = async (req, res) => {
  const { status, message } = await ListAllOrdersAdminService();

  return res.status(status).json(message);
};

const getByIdOrder = async (req, res) => {
  const { id } = req.params;

  const { status, message } = await GetByIdOrderService(id);
  return res.status(status).json(message);
};

const updateStatusProduct = async (req, res) => {
  const { id } = req.params;

  const { status, message } = await UpdateStatusProductService(id);
  return res.status(status).json(message);
};

OrdersRouter.get('/admin', listAllOrdersAdmin);
OrdersRouter.get('/', ListAllOrders);
OrdersRouter.put('/admin/:id', updateStatusProduct);
OrdersRouter.get('/admin/:id', getByIdOrder);
OrdersRouter.get('/:id', GetByIdDetails);

module.exports = OrdersRouter;
