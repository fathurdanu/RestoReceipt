const { Menu, Receipt, Order, Promo } = require('../models');
class ReceiptController {

    static async getReceipts(req, res) {
        try {
            let receipts = await Receipt.findAll();
            let orders = await Order.findAll({
                include: [Menu]
            });
            receipts.forEach(receipt => {
                orders = orders.filter(order => order.ReceiptId === receipt.id);
                receipt.dataValues.orders = orders;
            })
            res.render('receipt/receiptPage.ejs', { receipts: receipts });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async create(req, res) {
        try {
            let params = req.body;
            let receipt = await Receipt.create({
                subTotalPrice: 0,
                totalPrice: 0,
                PromoId: params.PromoId
            });
            delete params['PromoId'];
            for (let key in params) {
                let MenuId = +key;
                if (params[key]) await Order.create({
                    MenuId: MenuId,
                    ReceiptId: receipt.id,
                    quantity: +params[key]
                })
            }
            res.redirect(`/receipts/count/${receipt.id}`);
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Receipt.destroy({
                where: { id }
            });
            result === 1 ? res.json({ message: `ID ${id} has been deleted` }) : res.json({ message: `failed to delete` });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { totalPrice, PromoId } = req.body;
            let result = await Receipt.update({
                totalPrice,
                PromoId
            }, {
                where: { id }
            });
            result[0] === 1 ? res.json({ message: `ID ${id} has been updated` }) : res.json({ message: `failed to update` });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async count(req, res) {
        try {
            const id = +req.params.id;
            let receipt = await Receipt.findOne({
                where: { id },
                include: Promo
            });
            let orders = await Order.findAll({
                where: { ReceiptId: id },
                include: [Menu]
            });
            let subTotal = 0;
            orders.forEach(order => {
                subTotal += order.dataValues.quantity * order.dataValues.Menu.price
            })
            let totalPrice = subTotal - (subTotal * receipt.Promo.discount / 100);
            let result = await Receipt.update({
                subTotalPrice: subTotal,
                totalPrice: totalPrice,
                PromoId: receipt.PromoId
            }, {
                where: { id }
            });
            result[0] === 1 ? res.redirect(`/receipts/details/${id}`) : res.json({ message: `failed to update` });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async details(req, res) {
        try {
            const id = +req.params.id;
            let receipt = await Receipt.findOne({
                where: { id }
            });
            let orders = await Order.findAll({
                where: { ReceiptId: id },
                include: [Menu]
            });
            receipt.dataValues.orders = orders;
            result ? res.json(receipt) : res.json({ message: `not found` });

        } catch (error) {
            res.json({ message: error });
        }
    }

    static async detailPage(req, res) {
        try {
            const id = +req.params.id;
            let receipt = await Receipt.findOne({
                where: { id },
                include: [Promo]
            });
            let orders = await Order.findAll({
                where: { ReceiptId: id },
                include: [Menu]
            });
            receipt.dataValues.orders = orders;
            // res.json(receipt);
            receipt ? res.render('receipt/detailPage.ejs', { receipt: receipt }) : res.json({ message: `not found` });

        } catch (error) {
            res.json({ message: error });
        }
    }

}

module.exports = ReceiptController;