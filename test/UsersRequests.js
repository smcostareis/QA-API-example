const request = require('supertest');
const should = require('should');

var util = require('./utils');
var app = request('https://reqres.in');

describe("Validate User Requests", function () {

    it('Single User Request', function (done) {
        app.get('/api/users/1')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyUser(res, 'George', 'Bluth', 1);
                done();
            })
    });
    it('List Users Request', function (done) {
        app.get('/api/users?page=1')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyListUser(res, 1, 3, 12, 4);
                done();
            })
    });
    it('Create New User Request', function (done) {
        var params = { firstname: 'Sérgio', lastname: 'Reis' };
        app.post('/api/users')
            .send(params)
            .set('Accept', 'application/json')
            .expect(201)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyUserCreatedSuccessful(res, 'Sérgio', 'Reis');
                done();
            });
    });
    it('Update User Request (with PUT)', function (done) {
        var params = { name: 'Sérgio', job: 'QAE' };
        app.put('/api/users/2')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyUserUpdatedSuccessful(res, 'Sérgio', 'QAE');
                done();
            });
    });
    it('Update User Request (with PATCH)', function (done) {
        var params = { name: 'Sérgio', job: 'QAE' };
        app.patch('/api/users/2')
            .send(params)
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) return done(err);
                util.VerifyUserUpdatedSuccessful(res, 'Sérgio', 'QAE');
                done();
            });
    });
    it('Delete User Request', function (done) {
        app.delete('/api/users/2')
            .set('Accept', 'application/json')
            .expect(204)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });
    it('User Not Found Request', function (done) {
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
