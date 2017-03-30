'use strict'

// imports mysql package
var mysql = require('mysql');

// Sets up the connection for the server
var connectInfo = {
    host: 'localhost',
    user:'root',
    // Fill in your own MySQL password here
    password:'',
    database: 'burgers_db'
};

// This uses JAWSDB for heroku 
if (process.env.JAWSDB_URL) {
    connectInfo = process.env.JAWSDB_URL;
}

// Creats the mysql connection
var connection = mysql.createConnection(connectInfo);

// Connnects to the database
connection.connect();

// expot the connection
module.exports = connection;


