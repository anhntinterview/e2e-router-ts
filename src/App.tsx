import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Routes from "./routes";
import { Auth } from "./types/User";

const fakeAuth = {
  user: {
    displayName: "anhnttest"
  },
  token: "12345",
}

function App() {
  const [auth, setAuth] = useState<Auth>();

  useEffect(() => {
    const _auth = localStorage.getItem("vct-14");

    if (_auth) {
      try {
        const auth = JSON.parse(_auth);
        setAuth(auth);
      } catch (error) {
        console.log(error);
        setAuth(undefined);
      }
    } else {
      setAuth(undefined);
    }
  }, []);

  if (typeof auth === "undefined") return <h1>Auth was not found in localStorage</h1>;

  return (
    <BrowserRouter>
      {auth && <NavBar setAuth={setAuth} />}
      <Routes auth={auth} setAuth={setAuth} />
    </BrowserRouter>
  );
}

export default App;
