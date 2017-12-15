const Restaraunt = require('./db.js');

exports.addRestaraunt = (name, rating, url, res) => {
  Restaraunt({
    name: name,
    rating: rating,
    url: url,
    date_created: Date.now()
  }).save()
  .then((newRestaurant) => {
    res.status(201).send(newRestaurant);
  });
}

exports.getAll = async (req, res) => {
  let restaraunts = await Restaraunt.find()
    .then((results) => {
      res.status(200).send(results);
    });
}

exports.removeRestaraunts = (req, res) => {
  Restaraunt.remove()
    .then((removed) => {
      res.status(200).send(removed);
    });
}
