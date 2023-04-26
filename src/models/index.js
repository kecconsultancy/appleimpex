/* eslint-disable */
const Sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../database.sqlite",
});
