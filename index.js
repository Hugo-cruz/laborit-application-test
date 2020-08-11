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
    execSQLQuery('SELECT * FROM Brands', res);
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
    execSQLQuery('SELECT * FROM Models', res);
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
    execSQLQuery('SELECT * FROM Vehicles', res);
    //res.send("ok");
});

//------ Create -----------------------
//Brands
server.post('/api/brands/:id', function(req,res) {
    console.log("Post para marcas");
    const {name} = req.body;
    execSQLQuery('INSERT INTO Brands(name) VALUES (\''+name+'\')', res);
});
//Models
server.post('/api/models', function(req,res) {
    console.log("Post para Modelos");
    const {name} = req.body;
    execSQLQuery('INSERT INTO Models(name) VALUES (\''+name+'\')', res);
});
//Vehicles
server.post('/api/vehicles', function(req,res) {
    console.log("Post para marcas");
    const {value} = req.body;
    const {brand} = req.body;
    const {model} = req.body;
    const {yearModel} = req.body;
    const {fuel} = req.body;
    execSQLQuery('INSERT INTO Vehicles(value,brand,model,yearModel,fuel) VALUES'+
    '('+value+',\''+brand+'\',\''+model+'\','+yearModel+',\''+fuel+'\')', res);
});

//------ Update -----------------------
//Brands
server.put('/api/brands/:id', function(req,res) {
    console.log("Update para marcas");
    const {name} = req.body;
    const id = req.params.id;
    execSQLQuery('UPDATE Brands SET name=\''+name+'\' WHERE ID='+id, res);
});


//Models
server.put('/api/models/:id', function(req,res) {
    console.log("Update para modelos");
    const {name} = req.body;
    console.log(name);
    const id = req.params.id;
    execSQLQuery('UPDATE Models SET name=\''+name+'\' WHERE ID='+id, res);
});

//Vehicles
server.put('/api/vehicles/:id', function(req,res) {
    console.log("Update para Veículos");
    const {name} = req.body;
    const id = req.params.id;
    execSQLQuery('UPDATE Vehicles SET name=\''+name+'\' WHERE ID='+id, res);
});

//------ Delete -----------------------
//Brands
server.delete('/api/brands/:id', function(req,res) {
    console.log("Delete para marcas");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('DELETE FROM Brands WHERE ID='+id, res);
});
//Models
server.delete('/api/models/:id', function(req,res) {
    console.log("Gets para models");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('DELETE FROM Models WHERE ID='+id, res);
});
//Vehicles
server.delete('/api/vehicles/:id', function(req,res) {
    console.log("Gets para Vehicles");
    console.log(req.params.id);
    const id = req.params.id;
    execSQLQuery('DELETE FROM Vehicles WHERE ID='+id, res);
});

