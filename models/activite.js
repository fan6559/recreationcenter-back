const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const activite = sequelize.define(
  "activite",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    Label: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  },
  {}
);

module.exports = activite;
