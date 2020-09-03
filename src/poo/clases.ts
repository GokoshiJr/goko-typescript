class Vehiculo {
  private fabricante: string;
  constructor(fabricante: string) {
    this.fabricante = fabricante;
  }
  moverse() {
    console.log(
      `El vehiculo marca ${this.fabricante} se ha movido magicamente`
    );
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
}

let vehiculo = new VehiculoTerrestre('Yamaha', 'Moto');
vehiculo.moverse();
