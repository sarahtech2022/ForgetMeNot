const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
app.get("/api/loves", async (req, res) => {
  try {
    const { rows: loves } = await db.query("SELECT * FROM loves");
    res.send(loves);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post("/api/loves", async (req, res) => {
  try {
    const newLove = {
      love_name: req.body.love_name,
      is_family: req.body.is_family,
      love_met: req.body.love_met,
      love_birthday: req.body.love_birthday,
      love_flower: req.body.love_flower,
      love_color: req.body.love_color,
      love_cake: req.body.love_cake,
    };
    //console.log([newLove.love_name, newLove.is_family, newLove.love_met]);
    const result = await db.query(
      "INSERT INTO loves(love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        newLove.love_name,
        newLove.is_family,
        newLove.love_met,
        newLove.love_birthday,
        newLove.love_flower,
        newLove.love_color,
        newLove.love_cake,
      ]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// delete request for loves
app.delete("/api/loves/:love_id", async (req, res) => {
  try {
    const love_id = req.params.love_id;
    await db.query("DELETE FROM students WHERE id=$1", [love_id]);
    console.log("From the delete request-url", love_id);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//A put request - Update a love
app.put("/api/loves/:love_id", async (req, res) => {
  //console.log(req.params);
  //This will be the id that I want to find in the DB - the love to be updated
  const love_id = req.params.love_id;
  const updatedLove = {
    love_id: req.body.love_id,
    love_name: req.body.love_name,
    is_family: req.body.is_family,
    love_met: req.body.love_met,
    love_birthday: req.body.love_birthday,
    love_flower: req.body.love_flower,
    love_color: req.body.love_color,
    love_cake: req.body.love_cake,
    user_id: req.body.user_id, //do I need this????????????****
  };
  console.log("In the server from the url - the student id", love_id);
  console.log(
    "In the server, from the react - the student to be edited",
    updatedStudent
  );
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${love_id} RETURNING *`;
  const values = [
    updatedStudent.firstname,
    updatedStudent.lastname,
    updatedStudent.iscurrent,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
