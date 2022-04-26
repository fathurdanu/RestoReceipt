const {PromoController} = require('../controllers');
const PromoRoute = require('express').Router();

PromoRoute.get('/', PromoController.getPromos);
PromoRoute.get('/create', PromoController.createPage);
PromoRoute.post('/create', PromoController.create);
PromoRoute.get('/delete/:id', PromoController.delete);
PromoRoute.post('/update/:id', PromoController.update);
PromoRoute.get('/update/:id',PromoController.updatePage);
PromoRoute.get('/:id',PromoController.details);

module.exports = PromoRoute;