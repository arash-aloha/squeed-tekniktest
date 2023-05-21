import axios from "axios";
import { UsersInterface, User } from "../pages/users/Users";

const BASE_URL = `https://dummyjson.com/users`;

export const fetchAllUsers = async (): Promise<UsersInterface> => {
  const QUERY_LIMIT = "?limit=50";

  try {
    const response = await axios.get(`${BASE_URL}${QUERY_LIMIT}`);
    const data: UsersInterface | undefined = response.data;
    if (!data) {
      throw new Error("Invalid data received");
    }
    return data;
  } catch (error) {
    console.log("Something went wrong fetching all users: ", error);
    throw new Error(`${error}`);
  }
};

export const fetchUserById = async (
  id: string | string[] | undefined
): Promise<User | undefined> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    const data: User = response.data;
    if (!data) {
      throw new Error("Invalid data received");
    }
    return data;
  } catch (error) {
    console.log("Something went wrong fetching user: ", error);
    throw new Error(`${error}`);
  }
};
