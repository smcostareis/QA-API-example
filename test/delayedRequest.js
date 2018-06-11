const request = require('supertest');
const should = require('should');

var util = require('./utils');
var app = request('https://reqres.in');

describe("Validate Delayed Response Requests", function () {

    it('List Users Request with deplayed response', function (done) {
        this.timeout(5000);
        app.get('/api/users?delay=3')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyListResource(res, 1, 3, 12, 4);
                done();
            })
    });
});
