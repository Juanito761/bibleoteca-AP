const express = require('express')
const { biblioteca } = require('../datos');

const ruta = express.Router()

ruta.get('/', (req, res) => {
    res.json(biblioteca.listarLibros());
  });

  ruta.get('/nodisponibles', (req, res) => {
    const libro = biblioteca.librosNoDisponibles();
      res.json(libro);
  });

  ruta.get('/disponibles', (req, res) => {
    const libro = biblioteca.librosDisponibles();
      res.json(libro);
  });
  
ruta.get('/titulo/:titulo', (req, res) => {
    const { titulo } = req.params;
    const libro = biblioteca.buscarPorTitulo(titulo);
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ message: 'Libro no encontrado.' });
    }
  });

ruta.get('/autor/:nombreAutor', (req, res) => {
    const { nombreAutor } = req.params;
    const libros = biblioteca.buscarPorAutor(nombreAutor);
    if (libros.length > 0) {
      res.json(libros.map(libro => libro));
    } else {
      res.status(404).json({ message: 'No se encontraron libros de este autor.' });
    }
  });

module.exports=ruta






 