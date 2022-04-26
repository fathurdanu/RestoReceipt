'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Promo.hasMany(models.Receipt);
    }
  }
  Promo.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING},
    discount: {
      allowNull: false,
      type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Promo',
  });
  return Promo;
};