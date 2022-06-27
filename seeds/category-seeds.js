const sequelize = require("../config/connection");
const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Fantasy",
    category_image:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
  },
  {
    category_name: "Science Fiction",
    category_image:
      "https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg",
  },
  {
    category_name: "Mystery",
    category_image:
      "https://agathachristie.imgix.net/hcus-paperback/Jacket_AndThenThereWereNoneUS.jpg?auto=compress,format&fit=clip&q=65&w=400",
  },
  {
    category_name: "Adventure",
    category_image:
      "https://images-na.ssl-images-amazon.com/images/I/813YyI2mdmL.jpg",
  },
  {
    category_name: "Self Help",
    category_image:
      "https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL.jpg",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
