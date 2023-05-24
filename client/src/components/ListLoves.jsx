import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./MyForm";
import Love from "./Love";
import { useAuth0 } from "@auth0/auth0-react";

const ListLoves = () => {
  const { user } = useAuth0();
  // this is my original state with an array of loves
  const [loves, setLoves] = useState([]);

  //This is the state that will store all the avatar final details.

  //this is the state needed for the UpdateRequest
  const [editingLove, setEditingLove] = useState(null);

  const loadLoves = () => {
    // A function to fetch the list of loves that will be load anytime that list change
    fetch(`/api/loves?user_sub=${user.sub}`)
      .then((response) => response.json())
      .then((loves) => {
        setLoves(loves);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadLoves();
  }, []); //leave empty
  // run that function, can also take an array of things (only reruns when there is an array of things)
  //only runs once by default
  //We dont want to keep calling this function every time, we just want it once

  const onSaveLove = (newLove) => {
    console.log(newLove, "From the parent - List of Loves");
    setLoves((loves) => [...loves, newLove]);
  };

  //A function to control the update in the parent (love component)
  const updateLove = (savedLove) => {
    // console.log("Line 29 savedLove", savedLove);
    // This function should update the whole list of loves -
    loadLoves();
  };

  //A function to handle the Delete funtionality
  const onDelete = (love) => {
    //console.log(love, "delete method")
    return fetch(`/api/loves/${love.love_id}?user_sub=${user.sub}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadLoves();
      }
    });
  };

  //A function to handle the Update functionality
  const onUpdate = (toUpdateLove) => {
    //console.log(toUpdateLove);
    setEditingLove(toUpdateLove);
  };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2 className="title">My Loves </h2>
        <div className="gridcontainer">
          {loves.map((love) => {
            return (
              <div key={love.love_id} className="griditem">
                {" "}
                <Love
                  love={love}
                  toDelete={onDelete}
                  toUpdate={onUpdate}
                  // formSubmissionData={love}
                />
              </div>
            );
          })}
        </div>
      </div>
      <MyForm
        editingProfile={false}
        key={editingLove ? editingLove.love_id : null}
        onSaveLove={onSaveLove}
        editingLove={editingLove}
        onUpdateLove={updateLove}
      />
    </div>
  );
};

export default ListLoves;
