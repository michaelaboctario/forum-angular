export interface User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    roleId: number
  };

/*
  export class User {

    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public username: string,
        public email: string,
        public password: string,
        public roleId: number  
    ) {  }
  
  }

  */