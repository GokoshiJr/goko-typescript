// sumar

function sumar(a: number, b: number): number {
  let suma = a + b;
  console.log(`${a} + ${b} = ${suma}`);
  return suma;
}

// sumar(10, 5);

// let num: number = sumar(10, 10);

let restar = function (a: number, b: number): number {
  let resta = a - b;
  console.log(`${a} - ${b} = ${resta}`);
  return resta;
};

// restar(5, 4);

let multiplicar: (a: number, b: number) => number;

multiplicar = (a, b) => a * b;

// console.log(multiplicar(5, 5));

// haciendo la funcion con un callback

let multiplicar2: (
  a: number,
  b: number,
  callback: (result: number) => void
) => void;

multiplicar2 = (a, b, callback) => callback(a * b);

multiplicar2(4, 5, function (result) {
  console.log(`Resultado: ${result}`);
});
