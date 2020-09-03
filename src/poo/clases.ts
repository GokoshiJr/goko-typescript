abstract class Vehiculo {
  // campos de clases
  protected fabricante: string;

  constructor(fabricante: string) {
    this.fabricante = fabricante;
  }

  moverse() {
    console.log(
      `El vehiculo marca ${this.fabricante} se ha movido magicamente`
    );
  }

  protected llevarAlTaller() {
    console.log('Al taller que va');
  }
}

class VehiculoTerrestre extends Vehiculo {
  private tipo: string;
  constructor(fabricante: string, tipo: string) {
    super(fabricante);
    this.tipo = tipo;
  }
  moverse() {
    console.log(`bruum bruum hace mi ${this.tipo}`);
    super.moverse();
  }
  reparar() {
    console.log(
      `Un momento que me leo el manual de instrucciones de ${this.fabricante}`
    );
  }
}

class VehiculoAereo extends Vehiculo {
  moverse() {
    console.log('niauuuuun');
    super.moverse();
  }
}

class VehiculoMaritimo extends Vehiculo {
  moverse() {
    console.log('el sonido del mar');
    super.moverse();
  }
  reparar() {
    this.llevarAlTaller();
  }
}

let vehiculo: Vehiculo = new VehiculoAereo('Yamaha');
vehiculo.moverse();
