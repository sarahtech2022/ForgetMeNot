import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/LOGO2.jpeg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div className="homepagetitle">
        <img width="400" src={Logo}></img>
      </div>
      <p className="description">
        {" "}
        Never forget important details about loved ones with Forget Me Not.
        Access and update information about family and friends, staying
        organized and thoughtful. Cherish every moment with those who matter
        most.
      </p>
      <button
        textalign="center"
        className="login"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
