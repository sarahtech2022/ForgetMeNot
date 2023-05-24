import MyForm from "../components/MyForm";
import Love from "../components/Love";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const [profile, setProfile] = useState([]);

  const loadProfile = () => {
    fetch(`/api/profile?user_sub=${user.sub}`)
      .then((response) => response.json())
      .then((profile) => {
        setProfile(profile);
        console.log(profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(profile);
  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <div>
      {" "}
      <MyForm editingProfile={true} /> <Love love={profile} />{" "}
    </div>
  );
};

export default Profile;
