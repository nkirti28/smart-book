const sequelize = require("../config/connection");
const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Fantasy",
  },
  {
    category_name: "Science Fiction",
  },
  {
    category_name: "Mystery",
  },
  {
    category_name: "Adventure",
  },
  {
    category_name: "Self Help",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
