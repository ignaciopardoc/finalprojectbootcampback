var mysql = require('mysql');


const connection = mysql.createConnection({
    //indicamos que el host que vamos a utilizar es localhost
    //tambien podria indicarle 127.0.0.1 ya que es lo mismo
    host: 'localhost',
    //indicamos el usuario de nuestro modulo de workbech que vamos a utilizar
    user: 'root',
    //su contraseña
    password: 'root',
    //y por ultimo indicamos la base de datos a la cual nos vamos a conectar
    database: 'doggiesintown'

});

module.exports = connection;