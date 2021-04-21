import * as React from "react";
import { Link, useHistory } from "react-router-dom";

export interface NavbarProps {
  setAuth: any;
}

const Navbar: React.FC<NavbarProps> = ({ setAuth }) => {
  const history = useHistory();

  function logout() {
    localStorage.removeItem("vct-14");
    setAuth(null);
    history.replace("/login");
  }

  return (
    <nav className="flex items-center justify-between bg-white pa2 shadow-1">
      <Link className="link dim pointer" to="/">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="EGANY logo"
          title="Home"
        />
      </Link>
      <button
        className="button-reset bn bg-transparent black-50 hover-red pointer"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
