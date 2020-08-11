const express = require('express');
const server = express();
const mysql = require('mysql');

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true })); 
server.use(bodyParser.json()) // for parsing application/json


server.listen(3000);

module.exports = server


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'mysql669.umbler.com',
        port     : 41890,
        user     : 'db-laborit',
        password : 'laborit123',
        database : 'processoseletivo'
      });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}

// ######## CRUD ###########
//------ Read -----------------------
//Brands
server.get('/api/brands/:id', function(req,res) {
    console.log("Gets para marcas");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('SELECT * FROM Brands WHERE ID='+id, res);
});

server.get('/api/brands', function(req,res) {
    console.log("Get para todas as marcas");
    execSQLQuery('SELECT * FROM Brands ORDER BY name ASC', res);
});

//Models
server.get('/api/models/:id', function(req,res) {
    console.log("Gets para models");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('SELECT * FROM Models WHERE ID='+id, res);
});

server.get('/api/models', function(req,res) {
    console.log("Gets para todos os models");
    execSQLQuery('SELECT * FROM Models  ORDER BY name ASC', res);
});

//Vehicles
server.get('/api/vehicles/:id', function(req,res) {
    console.log("Gets para Vehicles");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('SELECT * FROM Vehicles WHERE ID='+id, res);
});

server.get('/api/vehicles', function(req,res) {
    console.log("Gets para todos os Vehicles");
    console.log(req.params.id);
    execSQLQuery('SELECT * FROM Vehicles  ORDER BY name ASC', res);
});

