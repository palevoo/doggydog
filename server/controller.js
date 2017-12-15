const model = require('./model.js');

 //model > db > mongo db + schema

exports.getAll = (req, res) => {
  model.getAll(req, res);
}

exports.addRestaraunt = (req, res) => {
  // console.log(req.body.name);
  model.addRestaraunt(req.body.name, req.body.rating, req.body.url, res);
}

exports.removeRestaraunts = (req, res) => {
  model.removeRestaraunts(req, res);
}
