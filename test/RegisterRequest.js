const request = require('supertest');
const should = require('should');

var app = request('https://reqres.in');

describe("Validate Register Requests", function () {

    it('REGISTER SUCCESSFUL', function (done) {
        var params = { email: 'sydney@fife', password: 'pistol' };
        app.post('/api/register')
            .send(params)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                res.body.token.should.be.instanceOf(String);
                res.body.should.have.property('token').and.be.equal('QpwL5tke4Pnpja7X');
                done();
            });
    });
    it('REGISTER UNSUCCESSFUL', function (done) {
        var params = { email: 'sydney@fife'};
        app.post('/api/register')
            .send(params)
            .set('Accept', 'application/json')
            .expect(400)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                res.body.error.should.be.instanceOf(String);
                res.body.should.have.property('error').and.be.equal('Missing password');
                done();
            });
    });
});
