var db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/developers', function (req, res) {
    db.Businesses.findAll({}).then(function (data) {
      var hbsObject = {
        Businesses: data
      };
      console.log(data[0].dataValues.name);
      res.render("developers", hbsObject);
    });
  });

  app.get('/employers', function (req, res) {
    db.Devs.findAll({}).then(function (data) {
      var hbsObject = {
        Devs: data
      };
      console.log(data[0].dataValues.name);
      res.render("employers", hbsObject);
    });
  });

  app.get('/about', function (req, res) {
    res.render('about');
  });

  // Render 404 page for any unmatched routes
  app.get('*', function (req, res) {
    res.render('404');
  });
};
