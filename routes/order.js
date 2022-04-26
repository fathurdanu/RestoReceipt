const { OrderController } = require('../controllers');
const OrderRoute = require('express').Router();

OrderRoute.get('/', OrderController.getOrders);
OrderRoute.get('/create', OrderController.createPage);
OrderRoute.post('/create', OrderController.create);
OrderRoute.get('/delete/:id', OrderController.delete);
OrderRoute.post('/update/:id', OrderController.update);
OrderRoute.get('/update/:id', OrderController.updatePage);
OrderRoute.get('/:id', OrderController.details);

module.exports = OrderRoute;