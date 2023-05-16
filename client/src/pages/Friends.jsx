import React, { useState, useEffect } from "react";
import Love from "../components/Love";

const Friends = () => {
  // this is my original state with an array of loves
  const [friends, setFriends] = useState([]);

  console.log(friends);
  //This is the state that will store all the avatar final details.

  const loadFriends = () => {
    // A function to fetch the list of loves that will be load anytime that list change
    fetch("/api/friends")
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
      <h2>My Friends </h2>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.love_id}>
              <Love love={friend} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Friends;
