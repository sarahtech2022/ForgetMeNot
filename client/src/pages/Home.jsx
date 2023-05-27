import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ListLoves from "../components/ListLoves";
import Rahma from "../assets/Rahma.jpg";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <ListLoves />
      <img src={Rahma} width="200px"></img>
    </div>
  );
};

export default Home;
