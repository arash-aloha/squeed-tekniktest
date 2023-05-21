import { useQuery } from "react-query";
import { memo } from "react";
import { NavigateOptions, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { fetchUserById } from "../../api/api";
import { User } from "../users/Users";
import IsLoading from "../../components/loading/IsLoading";
import ErrorPage from "../error/ErrorPage";
import { navigateBackClickHandler } from "../../utils/helpers";

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileDetails = styled.section`
  margin-left: 2rem;
`;
const Button = styled.button`
  display: inline-block;
  width: 6rem;
  padding: 0.5rem;
  margin-top: 1rem;
  font-family: "Quicksand", sans-serif;
  font-weight: bolder;
  background-color: #fff;
  color: #ff6550;
  border: 3px solid;
  cursor: pointer;
`;

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery<
    User | undefined,
    ErrorConstructor
  >(["user-by-id", id], () => fetchUserById(id));

  if (isLoading) return <IsLoading />;
  if (error) return <ErrorPage />;

  const handleClick = () => {
    const url: string = "/users";
    const config: NavigateOptions = { replace: false };

    navigateBackClickHandler(url, config, navigate);
  };

  return (
    <>
      <h4> Profile page </h4>
      <UserProfileContainer className="userProfile" key={data?.id}>
        <div className="img-container">
          <img src={data?.image} />
        </div>
        <ProfileDetails>
          <p>
            <span>Full name: </span>
            <strong>
              {data?.firstName} {data?.maidenName} {data?.lastName}
            </strong>
          </p>
          <p>
            <span>Address: </span>
            <strong>
              {data?.address.city} {data?.address.postalCode}
              {data?.address.state}
            </strong>
          </p>
          <p>
            <span> Birth date: </span> <strong> {data?.birthDate} </strong>
            <span>Age: </span>
            <strong>{data?.age}</strong>
          </p>
          <p>
            <span>Height: </span>
            <strong>{data?.height} cm</strong>
            <span> Weight: </span>
            <strong>{data?.weight} kg</strong>
          </p>
          <p>
            <span>Eye color: </span>
            <strong>{data?.eyeColor}</strong>
          </p>
          <p>
            <span>Phone: </span>
            <strong>{data?.phone}</strong>
            <span> Email: </span>
            <strong>{data?.email}</strong>
          </p>
        </ProfileDetails>
      </UserProfileContainer>
      <Button onClick={handleClick}> back </Button>
    </>
  );
}

export default memo(UserProfile);
