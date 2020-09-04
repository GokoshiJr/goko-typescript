// Intersecciones de tipos

type Coordenada = [x: number, y: number];
type Vector = [x: number, y: number];

type Posicionable = {
  posicion: Coordenada;
};

type Movible = {
  velocidad: Vector;
  aceleracion: Vector;
};

type MovibleYPosicionable = Posicionable & Movible;

let objeto: MovibleYPosicionable = {
  posicion: [5, 5],
  velocidad: [4, 4],
  aceleracion: [1, 1],
};
