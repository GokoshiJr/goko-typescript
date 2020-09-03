// permiten encapsular informacion

type Numero = number;

let n: Numero = 5;

type LoginCredentials = {
  username: string;
  password: string;
  remember?: boolean; // ? de opcional
};

function login(data: LoginCredentials) {
  data.password;
}

login({
  username: 'Admin',
  password: 'Admin',
});
