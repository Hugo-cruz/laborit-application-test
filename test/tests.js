
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
  beforeEach(function(done) {
    connection.connect(function(err){
      if(err) return console.log(err);
      console.log('Finalizou com sucesso com sucesso');
      done();
    });
  });

  afterEach(function(done) {
    connection.end(function(err){
      if(err) return console.log(err);
      console.log('Finalizou com sucesso com sucesso');
      done();
    });
  });

  describe('/GET vehicle', function () {
    it('it should Get all vehicles', (done) => {
        request(app)
        .get('/api/models')
        .end((err, res) => {
            console.log("res: "+res.status);
            console.log("err: "+err);
            res.should.have.property('status', 200);
            done();
        });
    });
  });


});