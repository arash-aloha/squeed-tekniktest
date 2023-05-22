import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { fetchAllUsers } from "../api/api";
import { User, UsersInterface } from "../models/types";

export const navigateBackClickHandler = (
  url: string,
  config: NavigateOptions | undefined,
  navigate: ReturnType<typeof useNavigate>
): void => {
  navigate(url, config);
};

const ALL_USERS = "all-users";

export const useGetAllUsers = (): UseQueryResult<
  UsersInterface,
  ErrorConstructor
> => {
  return useQuery([ALL_USERS], fetchAllUsers);
};

export function generateUsersArray(data?: UsersInterface): User[] {
  const users: User[] = data ? data.users : [];
  return users;
}

export const filterUsersOnSearch = (
  users: User[],
  searchString: string
): User[] => {
  const filteredUsers: User[] = users.filter(
    (user) =>
      firstNameMatch(user, searchString) ||
      lastNameMatch(user, searchString) ||
      ageMatch(user, searchString) ||
      maidenNameMatch(user, searchString)
  );
  return filteredUsers;
};

export const firstNameMatch = (user: any, searchString: any) => {
  const firstName = user.firstName.toLowerCase();
  return firstName.includes(searchString);
};
export const maidenNameMatch = (user: User, searchString: any) => {
  const maidenName = user.maidenName.toLowerCase();
  return maidenName.includes(searchString);
};
export const lastNameMatch = (user: any, searchString: any) => {
  const lastName = user.lastName.toLowerCase();
  return lastName.includes(searchString);
};
export const ageMatch = (user: any, searchString: any) => {
  const age = user.age.toString();
  return age.includes(searchString);
};
