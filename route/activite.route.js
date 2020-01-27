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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  activite
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(adherent => res.status(200).json(adherent))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  activite
    .update()
    .then(activite => {
      res.status(200).json(activite);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { Label, Image } = req.body;
  activite
    .create({
      Label: Label,
      Image: Image
    })
    .then(activite => res.status(201).json(activite))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  activite
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(activite => {
      res.status(200).json(activite);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
