const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/doggydog');

const restarauntSchema = mongoose.Schema({
  name: String,
  rating: Number,
  url: String,
  date_created: Number
})

const Restaraunt = mongoose.model('Restaraunts', restarauntSchema);

module.exports = Restaraunt;
