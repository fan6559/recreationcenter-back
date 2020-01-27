const Joi = require("@hapi/joi");

module.exports.adherentPost = Joi.object({
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  dateNaissance: Joi.date().required(),
  rue: Joi.text().required(),
  codePostal: Joi.integer(),
  ville: Joy.string().required()
});
module.exports.seancePost = Joi.object({
  cout: Joi.float().required(),
  prix: Joi.float().required(),
  date: Joi.date().required()
});
module.exports.activitePost = Joi.object({
  label: Joi.float().required()
});
