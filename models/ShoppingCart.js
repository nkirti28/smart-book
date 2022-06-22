const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shoppingCart',
  }
);

module.exports = ShoppingCart;