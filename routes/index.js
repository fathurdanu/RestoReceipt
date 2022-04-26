const route = require('express').Router();
const menuRoutes = require('./menu');
const receiptRoutes = require('./receipt');
const orderRoutes = require('./order');
const promoRoutes = require('./promo');


route.use('/', menuRoutes);
route.use('/receipts', receiptRoutes);
route.use('/orders', orderRoutes);
route.use('/promos', promoRoutes);

module.exports = route;