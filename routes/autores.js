const express = require('express')
const { biblioteca } = require('../datos');

const ruta = express.Router()
ruta.get('/', (req, res) => {
    res.json(biblioteca.listarAutores());
  });
module.exports=ruta

