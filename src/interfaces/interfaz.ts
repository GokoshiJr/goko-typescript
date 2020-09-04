// Usando interfaces con clases

interface Figura {
  readonly lados: number;
  area(): number;
  perimetro(): number;
}

class Rectangle implements Figura {
  // campos de clase
  readonly ancho: number;
  readonly alto: number;
  lados = 4;
  constructor(ancho: number, alto: number) {
    this.alto = alto;
    this.ancho = ancho;
  }

  area(): number {
    return this.alto * this.ancho;
  }
  perimetro(): number {
    return this.ancho * 2 + this.alto * 2;
  }
}

let rectangle1 = new Rectangle(5, 5);

function proceso(figura: Figura) {
  figura.area();
  figura.lados;
}

proceso(rectangle1);
