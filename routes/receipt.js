const {ReceiptController} = require('../controllers');
const ReceiptRoute = require('express').Router();

ReceiptRoute.get('/', ReceiptController.getReceipts);
ReceiptRoute.post('/create', ReceiptController.create);
ReceiptRoute.post('/update/:id', ReceiptController.update);
ReceiptRoute.get('/count/:id',ReceiptController.count)
ReceiptRoute.get('/delete/:id', ReceiptController.delete);
ReceiptRoute.get('/:id',ReceiptController.details);
ReceiptRoute.get('/details/:id',ReceiptController.detailPage);

module.exports = ReceiptRoute;