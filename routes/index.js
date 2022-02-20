const express = require("express");
const async = require("hbs/lib/async");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

// home page
router.get("/", (req, res, next) => res.render("index.hbs"));

// movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((response) => {
      res.render("movies-list.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});

//movies detail page
router.get("/movie-detail/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((response) => {
      res.render("movie-detail.hbs", { response });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
