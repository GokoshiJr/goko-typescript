// modificadores y funciones

interface UserData {
  readonly userName: string;
  createdDate: Date | undefined;
  superUser?: boolean; // superuser puede estar o no con el ?
  readonly personal: {
    firstName: string;
    email: string;
  };
  logOut(): void;
  rename: (userName: String) => void;
}

function loginUser(): UserData {
  return {
    userName: 'admin',
    createdDate: new Date(),
    // superUser: true,
    logOut() {
      console.log('Adios');
    },
    rename(userName) {
      console.log('Todo: Rename account');
    },
    personal: {
      firstName: 'Admin',
      email: 'email@gmail.com',
    },
  };
}

let data: UserData = loginUser();

/* 
if (data.createdDate) {
  data.createdDate.toISOString();
} 
*/

// forma segura, si es undefined no lo ejecuta ?.
data.createdDate?.toISOString();

// lo usamos si estamos seguros de que va a existir !.
data.createdDate!.getDate();
