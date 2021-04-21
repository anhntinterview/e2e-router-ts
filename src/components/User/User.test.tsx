import * as React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import User, { UserProps } from "./User";

const props: UserProps = {
  user: {
    id: 1,
    first_name: "Robert",
    last_name: "Nguyen",
    email: "robertgame.vn@gmail.com",
    avatar:
      "https://pethealth.vn/wp-content/uploads/2018/04/cho-corgi-696x365.jpg",
  },
};

it("User renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<User {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render with valid user", () => {
  const userFullName = `${props.user.first_name} ${props.user.last_name}`;
  const { getByText, getByAltText } = render(<User {...props} />);
  const avatar = getByAltText(userFullName);
  const fullName = getByText(userFullName);
  const email = getByText(props.user.email);

  expect(avatar).toBeInTheDocument();
  expect(fullName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
