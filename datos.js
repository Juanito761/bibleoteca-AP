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
    { nombre: "Yoshihiro Togashi", nacionalidad: "Japonesa" }
  ],
  libros: [
    {
      titulo: "Attack on Titan",
      autor: "Hajime Isayama",
      anioPublicacion: 2009,
      disponible: true,
      sinopsis: "La humanidad lucha por sobrevivir detrás de muros gigantes para protegerse de los titanes.",
      imagen: "https://i.postimg.cc/4dyFC7y7/attack-of-titan.jpg"
    },
    {
      titulo: "Dragon Ball",
      autor: "Akira Toriyama",
      anioPublicacion: 1984,
      disponible: true,
      sinopsis: "La historia de Goku, un guerrero Saiyajin en busca de aventuras y las Esferas del Dragón.",
      imagen: "https://i.postimg.cc/8sQyrZHM/dragon-ball.jpg"
    },
    {
      titulo: "One Piece",
      autor: "Eiichiro Oda",
      anioPublicacion: 1997,
      disponible: true,
      sinopsis: "Un joven pirata llamado Luffy busca el legendario tesoro de One Piece.",
      imagen: "https://drive.google.com/file/d/1300nI9E2WnTLvjnglLLmCDFrihmzTKsj/view?usp=sharing"
    },
    {
      titulo: "Death Note",
      autor: "Tsugumi Ohba",
      anioPublicacion: 2003,
      disponible: true,
      sinopsis: "Un estudiante encuentra un cuaderno con el poder de matar a cualquier persona escribiendo su nombre.",
      imagen: "https://drive.google.com/file/d/1khpra58yjOB30r6Py4HoKyGTovxfHiK_/view?usp=sharing"
    },
    {
      titulo: "Parasyte",
      autor: "Hitoshi Iwaaki",
      anioPublicacion: 1988,
      disponible: false,
      sinopsis: "Un parásito extraterrestre se fusiona con un estudiante, lo que lleva a una lucha por la supervivencia.",
      imagen: "https://drive.google.com/file/d/1wGXNZhdqx-w6aOMqjmdQDOnDuYSoB2Ov/view?usp=sharing"
    },
    {
      titulo: "Hunter x Hunter",
      autor: "Yoshihiro Togashi",
      anioPublicacion: 1998,
      disponible: false,
      sinopsis: "Un joven llamado Gon busca convertirse en un cazador y encontrar a su padre desaparecido.",
      imagen: "https://drive.google.com/file/d/1r2nsJHKTeglA1SBZzSavvP_q2_8-N8JU/view?usp=sharing"
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
