'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Orders',{
      fields: ['MenuId'],
      type: 'foreign key',
      name: 'menu-order-association',
      references: {
        table: 'Menus',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Orders',{
      fields: ['MenuId'],
      type: 'foreign key',
      name: 'menu-order-association',
      references: {
        table: 'Menus',
        field: 'id'
      }
    });
  }
};
