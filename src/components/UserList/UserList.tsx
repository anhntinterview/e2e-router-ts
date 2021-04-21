import * as React from "react";
import Grid from "../Grid";
import User from "../User";
import { UserType, UserResDataType, UserError } from "../../types/User";

export const constant = {
  LOADING_TEXT: "LOADING ...",
};

export interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const [users, setUsers] = React.useState<UserType[]>();
  const [error, setError] = React.useState<UserError>();

  React.useEffect(() => {
    async function fetchUser() {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const users: UserResDataType = await response.json();

      if (response.ok) {
        return users.data;
      }
      throw new Error("Failed to fetch awesome users");
    }

    fetchUser().then(setUsers).catch(setError);
  }, []);

  if (error) return <p>{error.message}</p>;

  if (!users) return <p>{constant.LOADING_TEXT}</p>;

  return (
    <Grid col={3}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Grid>
  );
};

export default UserList;
