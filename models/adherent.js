const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const adherent = sequelize.define(
  "adherent",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false
    },

    dateNaissance: {
      type: Sequelize.DATE,
      allowNull: false
    },
    rue: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    codePostal: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    ville: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {}
);

module.exports = adherent;
