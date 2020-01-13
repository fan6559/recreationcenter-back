const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const seance = require("../models/seance");

router.get("/", (req, res) => {
  seance
    .findAll()
    .then(seance => res.status(200).json(seance))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
