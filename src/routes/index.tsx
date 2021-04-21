import React from "react";
import { Switch, Route, Redirect, RouterProps } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

import { Auth } from "../types/User";

type RoutesProps = {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth | undefined>>;
};

// requires authentication
const PrivateRoute: React.ComponentType<any> = ({
  path,
  auth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect
            to={{
            pathname: "/login",
            state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

// unauthenticated routes (redirect to home when authenticated)
const CommonRoute: React.ComponentType<any> = ({
  path,
  auth,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
            pathname: "/",
            state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
const Routes = (props: RoutesProps) => {
  const { auth, setAuth } = props;
  return (
    <Switch>
      <CommonRoute
        path="/login"
        component={LoginPage}
        auth={auth}
        setAuth={setAuth}
      />
      <PrivateRoute path="/" component={HomePage} auth={auth} />
    </Switch>
  );
};

export default Routes;