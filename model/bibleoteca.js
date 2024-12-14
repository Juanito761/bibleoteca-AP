

class Biblioteca {
    constructor() {
      this.libros = [];
    }
    agregarLibro(libro) {
      this.libros.push(libro);
    }
    listarLibros() {
      return this.libros.map(libro => libro);
    }
    listarAutores() {
      return this.libros.map(libro => libro.autor);

    }
    buscarPorTitulo(titulo) {
      return this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    }
    buscarPorAutor(nombreAutor) {
      return this.libros.filter(libro => libro.autor.nombre.toLowerCase() === nombreAutor.toLowerCase());
    }
    librosDisponibles() {
      return this.libros.filter(libro => libro.disponible).map(libro => libro);
    }
    librosNoDisponibles() {
      return this.libros.filter(libro => !libro.disponible).map(libro => libro);
    }

  }

  module.exports=new Biblioteca()
  