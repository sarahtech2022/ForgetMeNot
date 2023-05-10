import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ListLoves from "../components/ListLoves";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      "Home"
      <ListLoves />
    </div>
  );
};

export default Home;
