class Libro {
  constructor(titulo, autor, anioPublicacion, disponible = true, sinopsis = "", imagen = "") {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.disponible = disponible;
    this.sinopsis = sinopsis;
    this.imagen = imagen;
  }
}

module.exports=Libro