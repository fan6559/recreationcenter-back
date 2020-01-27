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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  seance
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
  seance
    .update()
    .then(seance => {
      res.status(200).json(seance);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { cout, prix, date, activiteUuid } = req.body;
  seance
    .create({
      cout: cout,
      prix: prix,
      date: date,
      activiteUuid: activiteUuid
    })
    .then(seance => res.status(201).json(seance))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  seance
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(seance => {
      res.status(200).json(seance);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
