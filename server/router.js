const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router
  .get('/restaurants', (req, res) => {
    controller.getAll(req, res);
  })
  .post('/restaurants', (req, res) => {
    controller.addRestaraunt(req, res);
  })
  .delete('/restaraunts', (req, res) => {
    controller.removeRestaraunts(req,res);
  });

module.exports = router;
