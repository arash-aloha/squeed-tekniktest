import { Dispatch, SetStateAction, memo, useEffect, useState } from "react";

import styled from "styled-components";
import { filterUsersOnSearch } from "../../utils/helpers";
import { User } from "../../models/types";

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-family: "Quicksand", sans-serif;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0.1rem;
  border-width: 0.2rem;
  border-color: purple;
`;

interface SearchBarProps {
  setFilteredUsers: Dispatch<SetStateAction<User[] | undefined>>;
  users: User[];
}

function SearchBar({ setFilteredUsers, users }: SearchBarProps) {
  const handleOnChange = (e: any) => {
    const targetValue = e.target.value.toLowerCase();

    if (!targetValue) {
      return setFilteredUsers(undefined);
    } else {
      const filterUsers = filterUsersOnSearch(users, targetValue);
      return setFilteredUsers(filterUsers);
    }
  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="search for a user"
          onChange={handleOnChange}
        />
      </Form>
    </>
  );
}

export default memo(SearchBar);
