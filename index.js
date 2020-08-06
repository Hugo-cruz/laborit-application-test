const express = require('express');
const server = express();

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: true })); 
server.use(bodyParser.json()) // for parsing application/json

server.listen(3000);

// ######## CRUD ###########
//------ Read -----------------------
//Brands
server.get('/api/brands/:id', function(req,res) {
    console.log("Gets para marcas");
    console.log(req.params.id);
});

server.get('/api/brands', function(req,res) {
    console.log("Get para todas as marcas");
});

//Models
server.get('/api/models/:id', function(req,res) {
    console.log("Gets para models");
    console.log(req.params.id);
});

server.get('/api/models', function(req,res) {
    console.log("Gets para todos os models");
});

//Vehicles
server.get('/api/vehicles/:id', function(req,res) {
    console.log("Gets para Vehicles");
    console.log(req.params.id);
});

server.get('/api/vehicles', function(req,res) {
    console.log("Gets para todos os Vehicles");
    console.log(req.params.id);
});

//------ Create -----------------------
//Brands
server.post('/api/brands', function(req,res) {
    console.log("Create para marcas");
    const { name } = req.body;
    console.log(name);
});

//Models
server.post('/api/models', function(req,res) {
    console.log("Create para models");
    const { name } = req.body;
    console.log(name);
});

//Vehicles
server.post('/api/vehicles', function(req,res) {
    console.log("Create para Vehicles");
    const { name } = req.body;
    console.log(name);
});

