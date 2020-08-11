
var request = require('supertest');
var app = require('/home/olodum/processos-seletivos/laborit/laborit-application-test/index');
var chai = require('chai');
var mysql = require('mysql');
require('should');

/*var assert = require('assert');
describe('Basic Mocha String Test', function () {
  it('should return number of characters is 5', function () {
    assert.equal("Hello".length, 5);
  });
});*/


const connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'db-laborit',
  password : 'laborit123',
  database : 'processoseletivo'
});

describe('Teste da API', function() {
  this.timeout(20000);
  before(function(done) {
    connection.connect(function(err){
      if(err) return console.log(err);
      console.log('Finalizou com sucesso com sucesso');
      done();
    });
  });

  after(function(done) {
    connection.end(function(err){
      if(err) return console.log(err);
      console.log('Finalizou com sucesso com sucesso');
      done();
    });
  });


  //Testing the Gets requests
  describe('/GET vehicle', function () {
    it('it should Get all vehicles', (done) => {
        request(app)
        .get('/api/vehicles')
        .end((err, res) => {
            res.should.have.property('status', 200);
            done();
        });
    });
  });
  describe('/GET Brands', function () {
    it('it should Get all brands', (done) => {
        request(app)
        .get('/api/brands')
        .end((err, res) => {
            res.should.have.property('status', 200);
            done();
        });
    });
  });
  describe('/GET Models', function () {
    it('it should Get all models', (done) => {
        request(app)
        .get('/api/models')
        .end((err, res) => {
            res.should.have.property('status', 200);
            done();
        });
    });
  });
  describe('/GET vehicle', function () {
    it('for a non-existing ID, it should return an empty body', (done) => {
        request(app)
        .get('/api/vehicles/9999999999999')
        .end((err, res) => {
            res.body.length.should.be.equal(0);
            done();
        });
    });
  });
  describe('/GET brands', function () {
    it('for a non-existing ID, it should return an empty body', (done) => {
        request(app)
        .get('/api/brands/9999999999999')
        .end((err, res) => {
            res.body.length.should.be.equal(0);
            done();
        });
    });
  });
  describe('/GET models', function () {
    it('for a non-existing ID, it should return an empty body', (done) => {
        request(app)
        .get('/api/models/9999999999999')
        .end((err, res) => {
            res.body.length.should.be.equal(0);
            done();
        });
    });
  });

  //Testing POST requests
  describe('POST /brands', () => {
    it('If the post request is successfull, it should return a 200 status code', (done) => {
    request(app)
      .post('/api/brands/')
      .send({name: 'name_test'})
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.property('status', 200);
        done();
      });
    });
  });
  describe('POST /modelds', () => {
    it('If the post request is successfull, it should return a 200 status code', (done) => {
    request(app)
      .post('/api/models/')
      .send({name: 'name_test'})
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.property('status', 200);
        done();
      });
    });
  });
  describe('POST /vehicles', () => {
    it('If the post request is successfull, it should return a 200 status code', (done) => {
      let vehicle = {
        id: 1254,
        value: "R$ 10.254,00",
        brand: "Acura",
        model: "Integra GS 1.8",
        yearModel: 1992,
        fuel: "Gasolina"
      }
    request(app)
      .post('/api/vehicles/')
      .send(vehicle)
      .end((err, res) => {
        if (err) return done(err);
        res.should.have.property('status', 200);
        done();
      });
    });
  });
  //inadequate post requests
  describe('POST /brands', () => {
    it('We expect an inadequate post request to return an empty body', (done) => {
    request(app)
      .post('/api/brands/')
      .send({brand: 'name_test'})
      .end((err, res) => {
        if (err) return done(err);
        res.body.length.should.be.equal(0);
        done();
      });
    });
  });
  describe('POST /models', () => {
    it('We expect an inadequate post request to return an empty body', (done) => {
    request(app)
      .post('/api/model/')
      .send({model: 'name_test'})
      .end((err, res) => {
        if (err) return done(err);
        res.body.length.should.be.equal(0);
        done();
      });
    });
  });
  describe('POST /vehicle', () => {
    it('We expect an inadequate post request to return an empty body', (done) => {
    request(app)
      .post('/api/vehicle/')
      .send({vehicle: 'name_test'})
      .end((err, res) => {
        if (err) return done(err);
        res.body.length.should.be.equal(0);
        done();
      });
    });
  });



});