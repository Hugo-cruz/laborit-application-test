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
});

