
const express = require('express');
const { biblioteca } = require('../datos');
const {Autor}=require('../model/autores')
const {Libro}=require('../model/libros')
const {Biblioteca}=require('../model/bibleoteca')
const app = express();
const autoresRuta=require("../routes/autores")
const librosRuta=require("../routes/libros")
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a mi biblioteca, manito!</h1>
    <p>Explora la colección de libros de mangas famosos:</p>
    <ul>
    <li><strong>/api/autores</strong>: Lista todos los autores de los libros.</li>
    <li><strong>/api/libros/disponibles</strong>: Lista todos los libros disponibles.</li>
     <li><strong>/api/libros/nodisponibles</strong>: Lista todos los libros no disponibles.</li>
      <li><strong>/api/libros</strong>: todos los libros .</li>
      <li><strong>/api/libros/titulo/:titulo</strong>: Busca un libro por su título exacto(remplaza :titulo por el titulo de libro).</li>
      <li><strong>/api/libros/autor/:autor </strong>: Encuentra libros por autor específico (remplaza el :autor por el nombre del autor) </li>
    </ul>
  `);
});

app.post('/api/libros', (req, res) => {
  const { titulo, autor, anioPublicacion, nacionalidad } = req.body;
  const nuevoAutor = new Autor(autor, nacionalidad);
  const nuevoLibro = new Libro(titulo, nuevoAutor, anioPublicacion);
  biblioteca.agregarLibro(nuevoLibro);
  res.status(201).json({ message: 'Libro agregado correctamente.' });
});

app.use("/api/autores",autoresRuta)
app.use("/api/libros",librosRuta)

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
module.exports=app