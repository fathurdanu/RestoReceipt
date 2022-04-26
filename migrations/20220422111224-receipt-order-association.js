'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Orders',{
      fields: ['ReceiptId'],
      type: 'foreign key',
      name: 'receipt-order-association',
      references: {
        table: 'Receipts',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Orders',{
      fields: ['ReceiptId'],
      type: 'foreign key',
      name: 'receipt-order-association',
      references: {
        table: 'Receipts',
        field: 'id'
      }
    });
  }
};
