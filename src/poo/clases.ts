class Rectangulo {
  // Campos de clase - modificador private como en java
  private alto: number;
  private ancho: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
    this.getSaludo();
  }

  getArea() {
    return this.ancho * this.alto;
  }

  getPerimetro() {
    return this.ancho * 2 + this.alto * 2;
  }

  // metodo privado
  private getSaludo() {
    console.log('Hola Julio');
  }
}

let r1 = new Rectangulo(10, 4);
let r2 = new Rectangulo(5, 8);

console.log(r1.getArea());
