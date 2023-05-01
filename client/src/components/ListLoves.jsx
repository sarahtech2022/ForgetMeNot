import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Love from "./Love";

const ListLoves = () => {
  // this is my original state with an array of loves
  const [loves, setLoves] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingLove, setEditingLove] = useState(null);

  const loadLoves = () => {
    // A function to fetch the list of loves that will be load anytime that list change
    fetch("http://localhost:8080/api/loves")
      .then((response) => response.json())
      .then((loves) => {
        setLoves(loves);
      });
  };

  useEffect(() => {
    loadLoves();
  }, []); //leave empty

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
    return fetch(`http://localhost:8080/api/loves/${love.love_id}`, {
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
        <h2>My Loves </h2>
        <ul>
          {loves.map((love) => {
            return (
              <li key={love.love_id}>
                {" "}
                <Love
                  love={love}
                  toDelete={onDelete}
                  toUpdate={onUpdate}
                  // formSubmissionData={love}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <MyForm
        key={editingLove ? editingLove.love_id : null}
        onSaveLove={onSaveLove}
        editingLove={editingLove}
        onUpdateLove={updateLove}
      />
    </div>
  );
};

export default ListLoves;
