const { Order, Menu, Receipt } = require('../models');

class OrderController {
    static async getOrders(req, res) {
        try {
            let orders = await Order.findAll({
                attributes: {
                    include: ['id']
                }
            });
            (orders) ?
                res.json(orders)
                : res.json({ message: 'failed to request data' })
        } catch (error) {
            res.json({ message: error });
        }
    }

    static createPage(req, res) {

    }

    static async create(req, res) {
        try {
            const { MenuId, ReceiptId, quantity } = req.body;
            let result = await Order.create({
                MenuId,
                ReceiptId,
                quantity
            });
            (result) ? res.json(result ) : res.json({ message: "failed to create" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Order.destroy({
                where: { id }
            });
            (result === 1) ? res.json({ message: `ID ${id} has been deleted` }) : res.json({ message: "failed to delete" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { MenuId, ReceiptId, quantity } = req.body;
            let result = await Order.update({
                MenuId,
                ReceiptId,
                quantity
            },
                {
                    where: { id }
                });
            (result[0] === 1) ? res.json({ message: `ID ${id} has been updated` }) : res.json({ message: "failed to update" });
        } catch (error) {
            res.json({ message: error });
        }
    }

    static updatePage(req, res) {

    }

    static async details(req, res) {
        try {
            const id = +req.params.id;
            let result = await Order.findOne({
                where: { id },
                attributes: {
                    include: ['id']
                }
            });
            (result) ? res.json(result) : res.json({ message: "not found" });
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = OrderController;