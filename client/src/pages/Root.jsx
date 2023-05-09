import React from "react";
import { Outlet } from "react-router-dom";
import MyNavBar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

import Login from "./Login";

const Root = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return "Loading";
  }
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <MyNavBar />
          <Outlet />
        </>
      ) : (
        <Login />
      )}

      {/* outlet is a placeholder for all those children */}
    </div>
  );
};

export default Root;