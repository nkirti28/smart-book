const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    book_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
        type:DataTypes.INTEGER,
        references: {
            model: "category",
            key: "id"
        }
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isDecimal: true
        },
      },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;