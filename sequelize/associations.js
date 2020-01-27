const Adherent = require("../models/adherent");
const Seance = require("../models/seance");
const Activite = require("../models/activite");
const Participation = require("../models/participation");

Activite.hasMany(Seance, {foreignKey:{allowNull: false}});
Seance.belongsTo(Activite, {foreignKey:{allowNull: false}});

Adherent.belongsToMany(Seance, { through: Participation });
Seance.belongsToMany(Adherent, { through: Participation });
