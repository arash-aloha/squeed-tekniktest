export interface UsersInterface {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

export interface User {
  address: Address;
  age: number;
  birthDate: string;
  bloodGroup: string;
  email: string;
  eyeColor: string;
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  phone: string;
  height: number;
  weight: number;
}

export interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

export interface PageTitle {
  title: string;
}
