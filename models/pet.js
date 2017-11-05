'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const PetSchema = Schema({
//   chipNumber: {type: String, required: 'Chip obligatorio'},
//   name: {type: String, required: 'Nombre obligatorio'},
//   species: {type: String, required: 'Especie obligatoria'},
//   sex: {type: String, required: true},
//   picUrl: {type: String, required: false},
//   owner: {type: String, required: true},
//   race: {type: String, required: 'Raza obligatoria'},
//   birthDate: {type: Date, required: true},
//   description: {type: String, required: false, maxlength: [255, 'Maximo 255 caracteres']},
// })

const PetSchema = Schema({
    chipNumber: {type: String},
    name: {type: String},
    species: {type: String},
    sex: {type: String},
    picUrl: {type: String},
    owner: {type: String},
    race: {type: String},
    birthDate: {type: Date},
    description: {type: String},
});

module.exports = mongoose.model('Pet', PetSchema)