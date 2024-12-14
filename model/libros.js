
class Libro {
    constructor(titulo, autor, anioPublicacion,disponible=true) {
      this.titulo = titulo;
      this.autor = autor;
      this.anioPublicacion = anioPublicacion;
      this.disponible = disponible
    }
    informacion() {
      return `Titulo: ${this.titulo}, Autor: ${this.autor.nombre}, Año: ${this.anioPublicacion}`;
     
    }
  
  }
module.exports=Libro