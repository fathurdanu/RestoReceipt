const {MenuController} = require('../controllers');
const menuRoute = require('express').Router();

menuRoute.get('/menus', MenuController.getMenus)
menuRoute.get('/menus/create', MenuController.createPage);
menuRoute.post('/menus/create', MenuController.create);
menuRoute.get('/menus/delete/:id', MenuController.delete);
menuRoute.get('/menus/update/:id',MenuController.updatePage);
menuRoute.post('/menus/update/:id', MenuController.update);
menuRoute.get('/menus/:id',MenuController.details);
menuRoute.get('/', MenuController.homePage)

module.exports = menuRoute;