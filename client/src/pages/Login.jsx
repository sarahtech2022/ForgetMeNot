import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/ForgetMeNot logo.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      "Login Page"
      <img src={Logo}></img>
      <button className="login" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
};

export default Login;
