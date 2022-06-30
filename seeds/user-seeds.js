const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "John",
    email: "john@email.com",
    password: "john",
  },
  {
    username: "Kirti",
    email: "kirti@email.com",
    password: "kirti",
  },
  {
    username: "Kyle",
    email: "kyle@email.com",
    password: "kyle",
  },
  {
    username: "Matthew",
    email: "matthew@email.com",
    password: "matthew",
  },
  {
    username: "Trevor",
    email: "trevor@email.com",
    password: "trevor",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
