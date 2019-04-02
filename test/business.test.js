var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var db = require('../models');
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe('GET /api/businesses', function() {
  // Before each test begins, create a new request server for testing
  // & delete all businesses from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all businesses', function(done) {
    // Add some businesses to the db to test with
    db.Businesses.bulkCreate([
      { name: 'First Example', address: 'First Address' },
      { name: 'Second Example', address: 'Second Address' },
    ]).then(function() {
      // Request the route that returns all businesses
      request.get('/api/businesses').end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({
            name: 'First Example',
            address: 'First Address',
          });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({
            name: 'Second Example',
            address: 'Second Address',
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
