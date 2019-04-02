var db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/developers', function(req, res) {
    db.Businesses.findAll({}).then(function(data) {
      var hbsObject = {
        Businesses: data,
      };
      res.render('developers', hbsObject);
    });
  });

  app.get('/developers/:id', function(req, res) {
    db.Devs.findOne({
      attributes: [
        'name',
        'photo',
        'yearsExp',
        'github',
        'linkedin',
        'portfolio',
        'bio',
        'skillOne',
        'skillTwo',
        'skillThree',
      ],
      where: { id: req.params.id },
    }).then(function(devs) {
      res.render('developers', {
        developers: devs,
      });
    });
  });

  app.get('/employers', function(req, res) {
    db.Devs.findAll({}).then(function(data) {
      var hbsObject = {
        Devs: data,
      };
      res.render('employers', hbsObject);
    });
  });

  app.get('/employers/:id', function(req, res) {
    db.Businesses.findOne({
      attributes: [
        'name',
        'skillOne',
        'skillTwo',
        'skillThree',
        'website',
        'photo',
        'address',
        'bio',
        'jobDescription',
      ],
      where: { id: req.params.id },
    }).then(function(businesses) {
      res.render('employers', {
        businesses: businesses,
      });
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
