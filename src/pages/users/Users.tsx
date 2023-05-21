import { memo } from "react";
import { useQuery } from "react-query";
import { fetchAllUsers } from "../../api/api";
import ErrorPage from "../error/ErrorPage";
import IsLoading from "../../components/loading/IsLoading";

import "./users.css";
import { Link } from "react-router-dom";

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

function Users() {
  const { data, error, isLoading } = useQuery<UsersInterface, ErrorConstructor>(
    ["all-users"],
    fetchAllUsers,
    { refetchOnMount: false }
  );

  if (isLoading) return <IsLoading />;
  if (error) return <ErrorPage />;

  const users: User[] = data ? data.users : [];

  return (
    <main className="main-wrapper">
      <h1>Users</h1>
      <section className="users-wrapper">
        <div className="users-container">{renderUsers(users)}</div>
      </section>
    </main>
  );
}

export default memo(Users);

export function renderUsers(users: User[]) {
  return users.length > 0
    ? users.map((user: User) => (
        <div className="user" key={user.id}>
          <Link to={`/users/${user.id}`}>
            <div className="img-container">
              <img src={user.image} />
            </div>
            <p>
              <span>Name: </span>
              <strong>
                {user.firstName} {user.maidenName} {user.lastName}
              </strong>
            </p>
            <p>
              <span>Age: </span>
              <strong>{user.age}</strong>
              <span> Birth date: </span> <strong> {user.birthDate} </strong>
            </p>
          </Link>
        </div>
      ))
    : null;
}
