var db = require('../models');

module.exports = function(app) {
  app.post('/api/businesses', (req, res) => {
    db.Businesses.create(req.body).then(data => {
      return res.json(data);
    });
  });

  app.post('/api/devs', (req, res) => {
    db.Devs.create(req.body).then(data => {
      return res.json(data);
    });
  });

  app.get('/api/businesses', (req, res) => {
    db.Businesses.findAll({}).then(data => {
      return res.json(data);
    });
  });
};
