type A = {
  uno: boolean;
  dos: boolean;
};

type B = {
  tres: boolean;
};

let value: A | B = {uno: true, dos: true};
let value1: A | B = {tres: false};

function convertir(valor: string | number) {
  if (typeof valor === 'string') {
    valor.toLocaleLowerCase();
  } else if (typeof valor === 'number') {
    console.log(valor);
  }
}

convertir('asdf');
convertir(5);
// convertir(true);
