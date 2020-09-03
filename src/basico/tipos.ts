function saludar(nombre: string): string {
  return `Hola, un gusto conocerte, ${nombre}`;
}

console.log(saludar('Julio'));

/* Tipos primitivos */

/* Booleanos */

let logico: boolean = false;
let verdadero: boolean = true;

/* Numbers */

let entero: number = 24;
let decimal: number = 10.5;
let binario: number = 0b1000;
let octal: number = 0o72;
let hexadecimal: number = 0xccbbaa;
let numExtremadamenteLargo: number = 74_123_456_789; // usar el _ como separador de miles

/* Strings */

let cadenas: string = 'Hola mundo';

/* Tipos propios de typescript */

/* any, representa cualquier cosa, no es recomensable usar, usar para ignorar una variable */

let cualquiera: any;
cualquiera = 'una cadena';
cualquiera = false;

/* null, es nada, usar cuando trabajemos con variables que queramos que sean opcionales */

let nada: null = null;

/* undefined */

let indefinido: undefined = undefined;

/* void, como en java, para funciones que no retornan algo */

/* function saludar2(): void {
  console.log('Hola');
} */

/* Arrays */

let numeros: number[] = [1, 2, 3, 4, 5];
let dias: string[] = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
];

/* tuplas, es una especializacion de los array solo estan en ts */

let bd = [
  ['Julio', 19, 'Pizza'],
  ['Andres', 12, 'Hot Dog'],
  ['Fernanda', 5, 'Torta'],
];

let db: [nombre: string, edad: number, pais: string, premium: boolean] = [
  'Julio',
  19,
  'Vzla',
  true,
];

/* Objetos */

let persona: {
  nombre: string;
  edad: number;
  pais: string;
  nacimiento: Date;
  mascota: boolean;
  laboral: {
    empresa: string;
    sector: string;
  };
} = {
  nombre: 'Julio Gonzalez',
  edad: 19,
  pais: 'Venezuela',
  nacimiento: new Date(2000, 12, 12),
  mascota: false,
  laboral: {
    empresa: 'Ujap',
    sector: 'Ing en Computacion',
  },
};
