import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthService } from "../../services";
import { Auth } from "../../types/User";

export interface LoginPageProps {
  setAuth: React.Dispatch<React.SetStateAction<Auth | undefined>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const inputBaseClasses = "input-reset db w-100 ba b--black-10 pa2 mv2";
  const labelBaseClasses = "b";

  function login() {
    return async (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setError("");

      try {
        const authResult = await AuthService.login(username, password);
        setIsLoading(false);
        setAuth(authResult);
        localStorage.setItem("vct-14", JSON.stringify(authResult));
        history.push("/");
      } catch (error) {
        setIsLoading(false);
        setError(
          error.message || "Something went wrong. Please try again later"
        );
      }
    };
  }

  return (
    <div className="vw-100 vh-100 bg-dark-green flex items-center justify-center">
      <form className="w-third pa4 bg-white" onSubmit={login}>
        <h2>Vọc cùng Thành #14</h2>
        <label className={labelBaseClasses} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className={inputBaseClasses}
          placeholder="Your username (could be anything)"
          disabled={isLoading}
          value={username}
          onChange={(ev) => setUsername(ev.currentTarget.value)}
        />

        <label className={labelBaseClasses} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={inputBaseClasses}
          placeholder="bananhthanh"
          disabled={isLoading}
          value={password}
          onChange={(ev) => setPassword(ev.currentTarget.value)}
        />
        {error && <p className="red">{error}</p>}
        <button
          className="pointer button-reset bn bg-dark-green white db w-100 mt3 pa2 tc ttu dim"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
