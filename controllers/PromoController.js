const { Promo } = require('../models')
class PromoController {

    static async getPromos(req, res) {
        try {
            let result = await Promo.findAll();
            (result) ? res.render('promo/promoPage.ejs',{promos: result}) : res.json({ message: 'failed to request data' })
        } catch (error) {
            res.json({ message: error });
        }
    }

    static createPage(req, res) {
        res.render('promo/createPage.ejs');
    }

    static async create(req, res) {
        try {
            const { name, discount } = req.body;
            console.log(req.body);
            let result = await Promo.create({
                name,
                discount
            });
            (result) ? res.redirect('/promos') : res.json({ message: "failed to create" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Promo.destroy({
                where: { id }
            });
            (result === 1) ? res.redirect('/promos') : res.json({ message: "failed to delete" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, discount } = req.body;
            let result = await Promo.update({
                name,
                discount
            },
                {
                    where: { id }
                });
            console.log(result);
            (result[0] === 1) ? res.redirect('/promos') : res.json({ message: "failed to update" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async updatePage(req, res) {
        const id = +req.params.id;
            let result = await Promo.findOne({
                where: { id }
            });
        res.render('promo/updatePage.ejs',{promo:result});
    }

    static async details(req, res) {
        try {
            const id = +req.params.id;
            let result = await Promo.findOne({
                where: { id }
            });
            (result) ? res.json({ message: result }) : res.json({ message: "not found" });
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = PromoController;