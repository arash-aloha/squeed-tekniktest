import { memo } from "react";
import ErrorPage from "../error/ErrorPage";
import IsLoading from "../../components/loading/IsLoading";

import "./users.css";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import { PageTitle, User, UsersInterface } from "../../models/types";
import styled from "styled-components";
import { useGetAllUsers, generateUsersArray } from "../../utils/helpers";

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

function Users({ title }: PageTitle) {
  const { data, error, isLoading } = useGetAllUsers();

  if (isLoading) return <IsLoading />;
  if (error) return <ErrorPage />;

  const users: User[] = generateUsersArray(data);

  return (
    <main className="main-wrapper">
      <TopSection>
        <h1>{title}</h1>
        <SearchBar />
      </TopSection>
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
