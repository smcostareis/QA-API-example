const request = require('supertest');
const should = require('should');

var app = request('https://reqres.in');

describe("Validate Login Requests", function () {

    it('LOGIN SUCCESSFUL', function (done) {
        var params = { email: 'peter@klaven', password: 'cityslicka' };
        app.post('/api/login')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                res.body.token.should.be.instanceOf(String);
                res.body.should.have.property('token').and.be.equal('QpwL5tke4Pnpja7X');
                done();
            });
    });
    it('LOGIN UNSUCCESSFUL', function (done) {
        var params = { email: 'peter@klaven'};
        app.post('/api/login')
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
