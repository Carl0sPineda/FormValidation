export interface Register {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface User extends Register {
  id: number;
}
