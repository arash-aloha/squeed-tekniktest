import { memo, useState } from "react";

import styled from "styled-components";
import {
  useGetAllUsers,
  ageMatch,
  firstNameMatch,
  generateUsersArray,
  lastNameMatch,
  useGetFilteredUsers,
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
  const [filters, setFilters] = useState({});
  const { data, error, isLoading } = useGetFilteredUsers(filters);

  console.log("COMPONENT", data);
  console.log("FILTERS ", filters);
  // const users: User[] = generateUsersArray(data);

  const handleOnChange = (e: any) => {
    const targetValue = e.target.value.toLowerCase();
    // if (!targetValue) return data;
    console.log(targetValue);
    setFilters(targetValue);
    // const searchResults = users.filter(
    //   (user) =>
    //     user.firstName.includes(targetValue) ||
    //     user.lastName.includes(targetValue) ||
    //     user.age.toString().includes(targetValue)
    // );
    // console.log(searchResults);
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
