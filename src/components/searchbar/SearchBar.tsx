import { memo } from "react";

import styled from "styled-components";
import {
  GetAllUsers,
  ageMatch,
  firstNameMatch,
  generateUsersArray,
  lastNameMatch,
} from "../../utils/helpers";
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

function SearchBar() {
  const { data, error, isLoading } = GetAllUsers();

  console.log("COMPONENT", data);

  const users: User[] = generateUsersArray(data);

  const handleOnChange = (e: any) => {
    const targetValue = e.target.value.toLowerCase();
    if (!targetValue) return users;

    const searchResults = users.filter(
      (user) =>
        user.firstName.includes(targetValue) ||
        user.lastName.includes(targetValue) ||
        user.age.toString().includes(targetValue)
    );
    console.log(searchResults);
    return (
      <>
        {searchResults.length >= 1
          ? searchResults.map((result) => (
              <div key={result.id}> {result.firstName} </div>
            ))
          : null}
      </>
    );
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
