const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const seance = sequelize.define(
  "seance",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    cout: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    prix: {
      type: Sequelize.FLOAT,
      allowNull: false
    },

    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {}
);

module.exports = seance;
