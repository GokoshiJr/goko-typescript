// introduccion
interface UserData {
  userName: string;
  createdDate: Date;
  superUser: boolean;
}

function loginUser(): UserData {
  return {
    userName: 'admin',
    createdDate: new Date(),
    superUser: true,
  };
}

let data: UserData = loginUser();
