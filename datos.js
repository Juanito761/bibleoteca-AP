const Autor = require('./model/autores');
const Libro = require('./model/libros');
const biblioteca = require('./model/bibleoteca');

// Datos JSON definidos directamente en el código
const datos = {
  autores: [
    { nombre: "Hajime Isayama", nacionalidad: "Japonesa" },
    { nombre: "Akira Toriyama", nacionalidad: "Japonesa" },
    { nombre: "Eiichiro Oda", nacionalidad: "Japonesa" },
    { nombre: "Tsugumi Ohba", nacionalidad: "Japonesa" },
    { nombre: "Hitoshi Iwaaki", nacionalidad: "Japonesa" },
    { nombre: "Yoshihiro Togashi", nacionalidad: "Japonesa" },
    { nombre: "Hiromu Arakawa", nacionalidad: "Japonesa" }
  ],
  libros: [
    {
      titulo: "Attack on Titan",
      autor: "Hajime Isayama",
      anioPublicacion: 2009,
      disponible: true,
      sinopsis: "La humanidad lucha por sobrevivir detrás de muros gigantes para protegerse de los titanes.",
      imagen: "https://i.postimg.cc/qRB47LvL/ata.jpg"
    },
    {
      titulo: "Dragon Ball",
      autor: "Akira Toriyama",
      anioPublicacion: 1984,
      disponible: true,
      sinopsis: "La historia de Goku, un guerrero Saiyajin en busca de aventuras y las Esferas del Dragón.",
      imagen: "https://i.postimg.cc/YSZZ5zLJ/db.jpg"
    },
    {
      titulo: "One Piece",
      autor: "Eiichiro Oda",
      anioPublicacion: 1997,
      disponible: true,
      sinopsis: "Un joven pirata llamado Luffy busca el legendario tesoro de One Piece.",
      imagen: "https://i.postimg.cc/cJg5Btkh/op.jpg"
    },
    {
      titulo: "Death Note",
      autor: "Tsugumi Ohba",
      anioPublicacion: 2003,
      disponible: true,
      sinopsis: "Un estudiante encuentra un cuaderno con el poder de matar a cualquier persona escribiendo su nombre.",
      imagen: "https://i.postimg.cc/s2hwhdvj/dn.jpg"
    },
    {
      titulo: "Parasyte",
      autor: "Hitoshi Iwaaki",
      anioPublicacion: 1988,
      disponible: false,
      sinopsis: "Un parásito extraterrestre se fusiona con un estudiante, lo que lleva a una lucha por la supervivencia.",
      imagen: "https://i.postimg.cc/CLx74fz6/ps.jpg"
    },
    {
      titulo: "Fullmetal Alchemist",
      autor: "Hiromu Arakawa",
      anioPublicacion: 2001,
      disponible: false,
      sinopsis: "los hermanos Edward y Alphonse Elric, quienes buscan la Piedra Filosofal para recuperar sus cuerpos tras un experimento de alquimia fallido.",
      imagen: "https://i.postimg.cc/9QqGxPVw/fa.jpg"
    },
    {
      titulo: "Hunter x Hunter",
      autor: "Yoshihiro Togashi",
      anioPublicacion: 1998,
      disponible: false,
      sinopsis: "Un joven llamado Gon busca convertirse en un cazador y encontrar a su padre desaparecido.",
      imagen: "https://i.postimg.cc/6Qf4SYPC/hxh.jpg"
    }
  ]
};

// Crear instancias de autores
const autores = datos.autores.map(({ nombre, nacionalidad }) => new Autor(nombre, nacionalidad));

// Crear instancias de libros y agregarlos a la biblioteca
datos.libros.forEach(({ titulo, autor, anioPublicacion, disponible, sinopsis, imagen }) => {
  // Buscar el autor correspondiente
  const autorEncontrado = autores.find(a => a.nombre === autor);
  if (autorEncontrado) {
    const libro = new Libro(titulo, autorEncontrado, anioPublicacion, disponible, sinopsis, imagen);
    biblioteca.agregarLibro(libro);
  } else {
    console.warn(`Autor no encontrado para el libro: ${titulo}`);
  }
});

console.log('Datos cargados exitosamente en la biblioteca.');

module.exports = { biblioteca };
