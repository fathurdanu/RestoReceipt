const { Menu, Promo } = require('../models');

class MenuController {
    
    static async getMenus(req, res) {
        try{
            let result = await Menu.findAll();
            (result)? res.render('menu/menuPage.ejs',{menus:result}): res.json({message: 'failed to request data'})
        }catch(error){
            res.json({message: error});
        }
    }

    static async createPage(req, res) {
        res.render('menu/createPage.ejs');
    }

    static async create(req, res) {
        try {
            const { name, price, type, image } = req.body;
            let result = await Menu.create({
                name,
                price,
                type,
                image,
            });
            (result)? res.redirect('/menus') : res.json({ message: "failed to create" });
        } catch (error) {
            res.json({ message: error });
        }
    }
    
    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Menu.destroy({
                where: {id}
            });
            (result === 1)? res.redirect('/menus') : res.json({ message: "failed to delete" });
        } catch (error) {
            res.json({ message: error });
        }
    }
    
    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, price, type, image } = req.body;
            let result = await Menu.update({
                name,
                price,
                type,
                image,
            },
            {
                where: {id}
            });
            (result[0] === 1)? res.redirect('/menus') : res.json({ message: "failed to update" });
        } catch (error) {
            res.json({ message: error });
        }
    }
    
    static async details(req, res) {
        try {
            const id = +req.params.id;
            let result = await Menu.findOne({
                where: {id}
            });
            (result)? res.json(result) : res.json({ message: "not found" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async homePage(req,res){
        try{
            let result = await Menu.findAll();
            let promos = await Promo.findAll();
            (result)? res.render('home.ejs',{menus:result,promos:promos}): res.json({message: 'failed to request data'})
        }catch(error){

        }
    }


    

    static async updatePage(req, res) {
        const id = +req.params.id;
            let result = await Menu.findOne({
                where: {id}
            });
        res.render('menu/updatePage.ejs',{menu:result})
    }

}

module.exports = MenuController;