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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  adherent
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
  adherent
    .update()
    .then(adherent => {
      res.status(200).json(adherent);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const {
    nom,
    prenom,
    dateNaissance,
    rue,
    codePostal,
    ville,
    Avatar
  } = req.body;
  adherent
    .create({
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance,
      rue: rue,
      codePostal: codePostal,
      ville: ville,
      Avatar: Avatar
    })
    .then(adherent => res.status(201).json(adherent))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  adherent
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(adherent => {
      res.status(200).json(adherent);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
