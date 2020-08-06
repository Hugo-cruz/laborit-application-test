const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql669.umbler.com',
  port     : 41890,
  user     : 'db-laborit',
  password : 'laborit123',
  database : 'processoseletivo'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Conectou com sucesso');
  createTableBrands(connection);
  createTableModels(connection);
  createTableVehicles(connection);
  console.log("Tabelas criadas com sucesso")
});

function createTableBrands(conn){
 
      const sql = "CREATE TABLE IF NOT EXISTS Brands (\n"+
                  "ID int NOT NULL AUTO_INCREMENT,\n"+
                  "name varchar(150) NOT NULL,\n"+
                  "PRIMARY KEY (ID)\n"+
                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('Tabela criada com sucesso!');
      });
}

function createTableBrands(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Brands (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "name varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Tabela criada com sucesso!');
    });
}

function createTableBrands(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Brands (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "name varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Tabela criada com sucesso!');
    });
}

function createTableModels(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Models (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "name varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Tabela criada com sucesso!');
    });
}

function createTableVehicles(conn){
 
    const sql = "CREATE TABLE IF NOT EXISTS Vehicles (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "name varchar(150) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('Tabela criada com sucesso!');
    });
}