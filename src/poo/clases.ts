class Rectangulo {
  // Campos de clase
  private alto: number;
  private ancho: number;
  // varible para el set
  private _nombre: string = '';

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }

  // atributos virtuales getters y setters
  get area() {
    return this.ancho * this.alto;
  }

  get perimetro() {
    return this.ancho * 2 + this.alto * 2;
  }

  get nombre() {
    console.log('Obtengo el nombre');
    return this._nombre;
  }

  set nombre(value: string) {
    console.log('Seteo el nombre');
    this._nombre = value;
  }
}

let r1 = new Rectangulo(10, 20);

r1.nombre = 'A';
console.log(
  `El rectangulo ${r1.nombre}, tiene un area de ${r1.area} y un perimetro de ${r1.perimetro}`
);
