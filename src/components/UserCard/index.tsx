import { memo } from "react";
import { User } from "../../models/types";
import { Link } from "react-router-dom";

interface UserCardProps {
  users: User[] | undefined;
}

function UserCard({ users }: UserCardProps) {
  return (
    <>
      {users && users.length > 0
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
        : null}
    </>
  );
}
export default memo(UserCard);
