
const Autor=require('./model/autores')
const Libro=require('./model/libros')
const biblioteca=require('./model/bibleoteca')

const autores = [
  new Autor("Hajime Isayama", "Japonesa"),
  new Autor("Akira Toriyama", "Japonesa"),
  new Autor("Eiichiro Oda", "Japonesa"),
  new Autor("Tsugumi Ohba", "Japonesa"),
  new Autor("Hitoshi Iwaaki", "Japonesa"),
  new Autor("Yoshihiro Togashi", "Japonesa"),
];

const libros = [
  new Libro("Attack on Titan", autores[0], 2009),
  new Libro("Dragon Ball", autores[1], 1984),
  new Libro("One Piece", autores[2], 1997),
  new Libro("Death Note", autores[3], 2003),
  new Libro("Parasyte", autores[4], 1988,false),
  new Libro("Hunter x Hunter", autores[5], 1998,false),
];

libros.forEach(libro => biblioteca.agregarLibro(libro));

module.exports = { biblioteca };
