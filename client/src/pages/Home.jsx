import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AvatarPreview from "../components/AvatarPreview";
import ListLoves from "../components/ListLoves";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      "Home"
      <ListLoves />
      <AvatarPreview />
    </div>
  );
};

export default Home;
