// IMOPRT DE DEPENDENCIAS //
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var moment = require('moment');
//var formidable = require('express-formidable');


//Aqui se importa todos los archivos de la carpeta rutas
var customerRoute = require('./routes/customer');
var petRoute = require('./routes/pet');
var appointmentRoute = require('./routes/appointment');

var app = express();

mongoose.connect('mongodb://localhost/petstore', {useMongoClient: true});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));


//Base route
//Crea una ruta base para todas las rutas que corresponden a la api
app.use('/api', customerRoute);
app.use('/api', petRoute);
app.use('/api', appointmentRoute);


//Front End
app.all("*", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});


// insertar datos de citas para pruebas, mantener comentado si los datos ya fueron insertados una vez //
require('./insertdata/appointment');

module.exports = app;
