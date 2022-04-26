'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Receipts',{
      fields: ['PromoId'],
      type: 'foreign key',
      name: 'promo-receipt-association',
      references: {
        table: 'Promos',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Receipts',{
      fields: ['PromoId'],
      type: 'foreign key',
      name: 'promo-receipt-association',
      references: {
        table: 'Promos',
        field: 'id'
      }
    });
  }
};
