const Joi = require("@hapi/joi");

module.exports.joiValidate = schema => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (!error) {
    next();
  } else {
    res.status(422).json(error.details);
  }
};
