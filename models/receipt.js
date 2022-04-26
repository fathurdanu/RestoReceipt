'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Receipt.belongsToMany(models.Menu, { through: models.Order });
      Receipt.belongsTo(models.Promo);
    }
  }
  Receipt.init({
    subTotalPrice: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    PromoId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Receipt',
  });

  // Receipt.addHook('beforeValidate', 'initTotalPriceValue',receipt=>{
  //   receipt.subTotalPrice = 0;
  //   receipt.totalPrice = 0;
  // });

  // Receipt.addHook('afterValidate', 'initTotalPriceValue');

  return Receipt;
};