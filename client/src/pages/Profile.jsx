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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <div>
      <h2 className="title">My Profile </h2>{" "}
      <div className="gridcontainer">
        <MyForm editingProfile={true} editingLove={profile} />{" "}
        <div className="griditem">
          <Love love={profile} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Profile;
