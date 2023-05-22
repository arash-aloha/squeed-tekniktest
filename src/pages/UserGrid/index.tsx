import { memo, useState } from "react";
import ErrorPage from "../ErrorPage";
import IsLoading from "../../components/Loading";

import "./users.css";
import SearchBar from "../../components/SearchBar";
import { PageTitle, User } from "../../models/types";
import styled from "styled-components";
import { useGetAllUsers, generateUsersArray } from "../../utils/helpers";
import SearchResults from "../../components/SearchResults";
import UserCard from "../../components/UserCard";

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

function UserGrid({ title }: PageTitle) {
  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>();
  const { data, error, isLoading } = useGetAllUsers();

  if (isLoading) return <IsLoading />;
  if (error) return <ErrorPage />;

  const users = generateUsersArray(data);

  return (
    <main className="main-wrapper">
      <TopSection>
        <h1>{title}</h1>
        <SearchBar setFilteredUsers={setFilteredUsers} users={users} />
      </TopSection>
      <section className="users-wrapper">
        <div className="users-container">
          {filteredUsers ? (
            <SearchResults searchResults={filteredUsers} />
          ) : (
            <UserCard users={users} />
          )}
        </div>
      </section>
    </main>
  );
}

export default memo(UserGrid);
