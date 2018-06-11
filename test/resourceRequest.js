const request = require('supertest');
const should = require('should');

var util = require('./utils');
var app = request('https://reqres.in');

describe("Validate Resource Requests", function () {

    it('Single Resource Request', function (done) {
        app.get('/api/unknown/2')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyResource(res, 2, "fuchsia rose", 2001, "#C74375", "17-2031");
                done();
            })
    });
    it('List Resource Request', function (done) {
        app.get('/api/unknown')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyListResource(res, 1, 3, 12, 4);
                done();
            })
    });
    it('Resource Not Found Request', function (done) {
        app.get('/api/users/23')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            })
    });
});
