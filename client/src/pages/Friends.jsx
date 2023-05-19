import React, { useState, useEffect } from "react";
import Love from "../components/Love";
import { useAuth0 } from "@auth0/auth0-react";

const Friends = () => {
  const { user } = useAuth0();
  // this is my original state with an array of loves
  const [friends, setFriends] = useState([]);

  console.log(friends);
  //This is the state that will store all the avatar final details.

  const loadFriends = () => {
    // A function to fetch the list of loves that will be load anytime that list change
    fetch(`/api/friends?user_sub=${user.sub}`)
      .then((response) => response.json())
      .then((friends) => {
        setFriends(friends);
        console.log(friends);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(friends);
  useEffect(() => {
    loadFriends();
  }, []);

  return (
    <div>
      <h2 className="title">My Friends </h2>
      <div className="gridcontainer">
        {friends.map((friend) => {
          return (
            <div key={friend.love_id} className="griditem">
              <Love love={friend} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
