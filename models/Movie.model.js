//TODO 1. Require modeler
const mongoose = require("mongoose");

//TODO 2. Create Schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  stars: {
    type: [ String ],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: {
    type: [ String ],
  },
});

//TODO 3. Create Model
const Movie = mongoose.model("Movie", movieSchema);

//TODO 4. Export module
module.exports = Movie;