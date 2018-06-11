const request = require('supertest'),
    should = require('should');

function Utils() {
}
Utils.prototype.VerifyUser = function (res, first, last, id) {
    //console.log(res.body);
    res.body.data.should.have.property('first_name').and.be.equal(first);
    res.body.data.first_name.should.be.instanceOf(String);
    res.body.data.should.have.property('last_name').and.be.equal(last);
    res.body.data.last_name.should.be.instanceOf(String);
    res.body.data.should.have.property('id').and.be.equal(id);
    res.body.data.id.should.be.instanceOf(Number);
    res.body.data.should.have.property('avatar');
    res.body.data.avatar.should.be.instanceOf(String);
}
Utils.prototype.VerifyUserCreatedSuccessful = function (res, first, last) {
    //console.log(res.body);
    res.body.should.have.property('firstname').and.be.equal(first);
    res.body.firstname.should.be.instanceOf(String);
    res.body.should.have.property('lastname').and.be.equal(last);
    res.body.lastname.should.be.instanceOf(String);
    res.body.should.have.property('id');
    res.body.id.should.be.instanceOf(String);
    res.body.should.have.property('createdAt');
    res.body.createdAt.should.be.instanceOf(String);
}
Utils.prototype.VerifyUserUpdatedSuccessful = function (res, name, job) {
    //console.log(res.body);
    res.body.should.have.property('name').and.be.equal(name);
    res.body.name.should.be.instanceOf(String);
    res.body.should.have.property('job').and.be.equal(job);
    res.body.job.should.be.instanceOf(String);
    res.body.should.have.property('updatedAt');
    res.body.updatedAt.should.be.instanceOf(String);
}
Utils.prototype.VerifyListResource = function (res, page, per_page, total, total_pages) {
    //console.log(res.body.);
    res.body.should.have.property('page').and.be.equal(page);
    res.body.page.should.be.instanceOf(Number);
    res.body.should.have.property('per_page').and.be.equal(per_page);
    res.body.per_page.should.be.instanceOf(Number);
    res.body.should.have.property('total').and.be.equal(total);
    res.body.total.should.be.instanceOf(Number);
    res.body.should.have.property('total_pages').and.be.equal(total_pages);
    res.body.total_pages.should.be.instanceOf(Number);
    res.body.should.have.property('data');
    res.body.data.should.be.instanceOf(Array).and.have.lengthOf(3);
}
Utils.prototype.VerifyResource = function (res, id, name, year, color, pantone_value) {
    //console.log(res.body);
    res.body.data.should.have.property('name').and.be.equal(name);
    res.body.data.name.should.be.instanceOf(String);
    res.body.data.should.have.property('year').and.be.equal(year);
    res.body.data.year.should.be.instanceOf(Number);
    res.body.data.should.have.property('id').and.be.equal(id);
    res.body.data.id.should.be.instanceOf(Number);
    res.body.data.should.have.property('color').and.be.equal(color);
    res.body.data.color.should.be.instanceOf(String);
    res.body.data.should.have.property('pantone_value');
    res.body.data.pantone_value.should.be.instanceOf(String).and.be.equal(pantone_value);
}
module.exports = new Utils();
