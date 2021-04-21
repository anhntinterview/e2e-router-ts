import * as React from "react";
import "./User.test";
import { UserType } from "../../types/User";

export interface UserProps {
  user: UserType;
}

const User: React.FC<UserProps> = ({ user }) => {
  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <div>
      <img src={user.avatar} alt={fullName} title={fullName} />
      <h3>{fullName}</h3>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
