import React, { useState, useEffect } from "react";
import Love from "../components/Love";

const Family = () => {
  // this is my original state with an array of loves
  const [family, setFamily] = useState([]);

  console.log(family);
  //This is the state that will store all the avatar final details.

  const loadFamily = () => {
    // A function to fetch the list of loves that will be load anytime that list change
    fetch("/api/family")
      .then((response) => response.json())
      .then((family) => {
        setFamily(family);
        console.log(family);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(family);
  useEffect(() => {
    loadFamily();
  }, []);

  return (
    <div>
      <h2 className="title">My Family </h2>
      <div className="gridcontainer">
        {family.map((family) => {
          return (
            <div key={family.love_id} className="griditem">
              <Love love={family} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Family;
