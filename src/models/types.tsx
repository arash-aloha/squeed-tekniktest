export interface UsersInterface {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

export interface User {
  id: number;
  address: Address;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
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
