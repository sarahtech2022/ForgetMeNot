import MyForm from "../components/Form";
import Love from "../components/Love";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const loadProfile = () => {
    fetch("/api/profile")
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
