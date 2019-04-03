const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = app => {
  app.get('/', (req, res) => res.render('index'));

  app.get('/developers/:id', (req, res) => {
    let hbsObject = {
      Businesses: null,
      developers: null,
      Contact: null,
    };
    db.Businesses.findAll({}).then(
      data => {
        hbsObject.Businesses = data;
      },
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
      }).then(
        devs => {
          hbsObject.developers = devs;
        },
        db.Contacts.findAll({
          where: {
            devId: req.params.id,
            message: {
              [Op.ne]: null,
            },
          },
        }).then(msg => {
          hbsObject.Contact = msg;
          res.render('developers', hbsObject);
        })
      )
    );
  });

  app.get('/employers/:id', (req, res) => {
    let hbsObject = {
      Devs: null,
      businesses: null,
      Contact: null,
    };
    db.Devs.findAll({}).then(
      data => {
        hbsObject.Devs = data;
      },
      db.Businesses.findOne({
        attributes: [
          'name',
          'skillOne',
          'skillTwo',
          'skillThree',
          'website',
          'photo',
          'bio',
          'jobDescription',
        ],
        where: { id: req.params.id },
      }).then(
        businesses => {
          hbsObject.businesses = businesses;
        },
        db.Contacts.findAll({
          include: [{ model: db.Devs }],
          where: {
            id: req.params.id,
            interested: 1,
          },
        }).then(msg => {
          hbsObject.Contact = msg;
          res.render('employers', hbsObject);
        })
      )
    );
  });

  app.get('/about', (req, res) => res.render('about'));

  app.get('*', (req, res) => res.render('404'));
};
