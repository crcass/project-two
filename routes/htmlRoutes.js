var db = require('../models');

module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/developers', function(req, res) {
    res.render('developers');
  });

  app.get('/employers', function(req, res) {
    res.render('employers');
  });

  app.get('/about', function(req, res) {
    res.render('about');
  });

  // Render 404 page for any unmatched routes
  app.get('*', function(req, res) {
    res.render('404');
  });
};
