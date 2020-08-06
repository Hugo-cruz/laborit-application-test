const express = require('express');
const server = express();

server.listen(3000);

// ######## CRUD ###########
//------ gets -----------------------
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
