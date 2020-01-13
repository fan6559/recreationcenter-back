const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const activite = require("../models/activite");

router.get("/", (req, res) => {
  activite
    .findAll()
    .then(activite => res.status(200).json(activite))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
