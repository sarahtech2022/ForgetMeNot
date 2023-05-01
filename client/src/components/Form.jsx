import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveLove, editingLove, onUpdateLove }) => {
  // This is the original State with not initial student
  const [love, setLove] = useState(
    editingLove || {
      love_name: "",
      is_family: false,
      love_met: "",
      love_birthday: "",
      love_flower: "",
      love_color: "",
      love_cake: "",
    }
  );

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const love_name = event.target.value;
    setLove((love) => ({ ...love, love_name }));
  };

  const handleCheckChange = (event) => {
    const is_family = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, is_family }));
  };

  const handleMetChange = (event) => {
    const love_met = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, love_met }));
  };

  const handleBirthdayChange = (event) => {
    const love_birthday = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, love_birthday }));
  };

  const handleFlowerChange = (event) => {
    const love_flower = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, love_flower }));
  };

  const handleColorChange = (event) => {
    const love_color = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, love_color }));
  };

  const handleCakeChange = (event) => {
    const love_cake = event.target.value;
    //console.log(is_family)
    setLove((love) => ({ ...love, love_cake }));
  };

  const clearForm = () => {
    setLove({
      love_name: "",
      is_family: false,
      love_met: "",
      love_birthday: "",
      love_flower: "",
      love_color: "",
      love_cake: "",
    });
  };

  //A function to handle the post request
  const postLove = (newLove) => {
    return fetch("http://localhost:8080/api/loves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLove),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the post ", data);
        //I'm sending data to the List of Loves (the parent) for updating the list
        onSaveLove(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the post request
  const putLove = (toEditLove) => {
    return fetch(`http://localhost:8080/api/loves/${toEditLove.love_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditLove),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onUpdateLove(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (love.love_id) {
      putLove(love);
    } else {
      postLove(love);
    }
  };

  return (
    <Form className="form-students" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Love Name</Form.Label>
        <input
          type="text"
          id="add-love-name"
          placeholder="Love Name"
          required
          value={love.love_name}
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Check
        type={"checkbox"}
        id={`add-is_family`}
        checked={love.is_family}
        onChange={handleCheckChange}
        label={`Are they family?`}
      />

      <Form.Group>
        <Form.Label>Year Met</Form.Label>
        <input
          type="text"
          id="add-love-met"
          placeholder="Met"
          required
          value={love.love_met}
          onChange={handleMetChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday</Form.Label>
        <input
          type="date"
          id="add-love-birthday"
          placeholder="Birthday"
          required
          value={love.love_birthday}
          onChange={handleBirthdayChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Flower</Form.Label>
        <input
          type="text"
          id="add-love-flower"
          placeholder="Flower"
          required
          value={love.love_flower}
          onChange={handleFlowerChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Color</Form.Label>
        <input
          type="text"
          id="add-love-color"
          placeholder="Color"
          required
          value={love.love_color}
          onChange={handleColorChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Cake</Form.Label>
        <input
          type="text"
          id="add-love-cake"
          placeholder="Cake"
          required
          value={love.love_cake}
          onChange={handleCakeChange}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit" variant="outline-success">
          {love.love_id ? "Edit Love" : "Add Love"}
        </Button>
        {love.love_id ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;
