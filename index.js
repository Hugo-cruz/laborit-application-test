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
        user     : 'laborit-db',
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
    const SQLQuery = 'SELECT M.name, M.id\n'+
        'FROM Models AS M INNER JOIN Brands AS B\n'+ 
        'on M.name = B.name\n'+
        'WHERE M.id = \n' + id +'\n'+
        'ORDER BY M.name ASC';

    execSQLQuery('SELECT * FROM Models WHERE ID='+id, res);
});

server.get('/api/models', function(req,res) {
    console.log("Gets para todos os models");
    execSQLQuery('SELECT * FROM Models  ORDER BY name ASC', res);
});

//Vehicles
server.get('/api/vehicles/:modelID', function(req,res) {
    console.log("Gets para Vehicles");
    console.log(req.params.id);
    const id = req.params.modelID;
    const SQLQuery = 'SELECT V.id,V.value,V.brand,V.model,V.yearModel,V.fuel\n'+
        'FROM Vehicles AS V INNER JOIN Model AS M\n'+ 
        'on V.brand = M.name\n'+
        'WHERE M.id = \n' + id +'\n'
        'ORDER BY V.name ASC'; 
    execSQLQuery(SQLQuery, res);
});

server.get('/api/vehicles', function(req,res) {
    console.log("Gets para todos os Vehicles");
    console.log(req.params.id);
    execSQLQuery('SELECT * FROM Vehicles  ORDER BY name ASC', res);
});

