import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/LOGO2.jpeg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div>
        <img width="400" src={Logo}></img>
      </div>
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
