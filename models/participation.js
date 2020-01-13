const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const participation = sequelize.define("participation", {
  note: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = participation;
