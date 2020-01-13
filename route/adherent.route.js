const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const adherent = require("../models/adherent");

router.get("/", (req, res) => {
  adherent
    .findAll()
    .then(adherent => res.status(200).json(adherent))
    .catch(err => res.status(400).json(err));
});

router.post("/", (req, res) => {
  
})

module.exports = router;
