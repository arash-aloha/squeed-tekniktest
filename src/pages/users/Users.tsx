import { memo } from "react";
import { useQuery } from "react-query";
import { fetchAllUsers } from "../../api/api";
import ErrorPage from "../error/ErrorPage";
import IsLoading from "../../components/loading/IsLoading";

import "./users.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import { PageTitle, User, UsersInterface } from "../../models/types";

function Users({ title }: PageTitle) {
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
      <section>
        <h1>{title}</h1>
        <SearchBar />
      </section>
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
