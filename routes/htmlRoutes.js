var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

<<<<<<< Updated upstream
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
=======
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
    res.render('employers');
  });

  app.get('/businesses/:id', function(req, res) {
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
        'job_description',
      ],
      where: { id: req.params.id },
    }).then(function(businesses) {
      res.render('businesses', {
        businesses: businesses,
      });
    });
  });

  app.get('/businesses', function(req, res) {
    res.render('businesses');
  });

  app.get('/about', function(req, res) {
    res.render('about');
>>>>>>> Stashed changes
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
