const assert = require('chai').assert;
const request = require('supertest'),
    should = require('should');

describe("Something", function () {
    var app = request('https://reqres.in');

    it('Validate Customer #1', function (done) {
        app
            .get('/api/users?page=1')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                res.body.should.have.property('page').and.be.equal(1);
                res.body.should.have.property('page').and.be.equal(1);
                console.log(res.body.data[1].first_name);
                done();
            })
    });
});

