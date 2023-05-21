import { UseQueryResult, useQuery } from "react-query";
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

export const GetAllUsers = (): UseQueryResult<UsersInterface, unknown> => {
  return useQuery(["all-users"], fetchAllUsers);
};

export function generateUsersArray(data?: UsersInterface): User[] {
  const users: User[] = data ? data.users : [];
  return users;
}

export const firstNameMatch = (user: any, targetValue: any) => {
  console.log("function", user, targetValue);
  return user.firstName.includes(targetValue);
};
export const lastNameMatch = (user: any, targetValue: any) => {
  return user.lastName.includes(targetValue);
};
export const ageMatch = (user: any, targetValue: any) => {
  return user.age.toString().includes(targetValue);
};
