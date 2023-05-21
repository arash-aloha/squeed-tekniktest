import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/api";
import IsLoading from "../../components/loading/IsLoading";
import { memo } from "react";

function UserProfile() {
  const { id } = useParams();

  console.log("ID", id);
  const { data, error, isLoading } = useQuery(["user-by-id", id], () =>
    fetchUserById(id)
  );
  console.log("FETCHING USER", data);

  if (isLoading) return <IsLoading />;

  return (
    <>
      {id}
      <div> Testing </div>{" "}
    </>
  );
}

export default memo(UserProfile);
