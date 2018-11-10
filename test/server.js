const request = require('supertest');
// const should = require('should');
describe("接口测试", function () {
    it("获取单选题目", function (done) {
        request('http://localhost:3000')
            .get('/api/test')
            .query({
                qtype:"single_choice"
            })
            .expect(200)
            .end(function (err, res) {
                // should.not.exist(err);
                // res.body.status.should.equal('0');
                done(err);
            })
    })
    it("获取多选题目", function (done) {
        request('http://localhost:3000')
            .get('/api/test')
            .query({
                qtype:"multiple_choice"
            })
            .expect(200)
            .end(function (err, res) {
                // should.not.exist(err);
                // res.body.status.should.equal('0');
                done(err);
            })
    })
})