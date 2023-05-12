const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");

const app = express();
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "dist");
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  //   res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
  res.sendFile(path.join(REACT_BUILD_DIR, "index.html"));
});

// create the get request for loves and avatars*** in the endpoint '/api/loves'
app.get("/api/loves", async (req, res) => {
  try {
    const loves = await db.query(
      "SELECT * FROM loves INNER JOIN avatars ON avatars.avatar_id=loves.avatar_id"
    );
    res.send(loves);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// %%%%%%%%%*****Create a transcation for the post request for the loves and the avatars at once! (we use transcations since its two or more tables we need to insert into)
app.post("/api/loves", async (req, res) => {
  db.connect().then((dbclient) =>
    dbclient
      .task(async (t) => {
        // creating a sequence of transaction queries:
        //t.none means no return value to be expected, if something is returned then something went wrong!
        //t.one is what were expecting to return soemthing, we probably wanna return one value
        //first query to create avatar in avatar table
        const newAvatar = {
          hair: req.body.hair,
          eyes: req.body.eyes,
          mouth: req.body.mouth,
          skin: req.body.skin,
          hair_color: req.hair_color,
        };
        //avatar variable is inserting into the table so that vairable has the avatar_id stored in it
        const avatar = await t.one(
          "INSERT INTO avatars(hair, eyes, mouth, skin, hair_color) VALUES($1, $2, $3, $4, $5) RETURNING *",
          [
            newAvatar.hair,
            newAvatar.eyes,
            newAvatar.mouth,
            newAvatar.skin,
            newAvatar.hair_color,
          ]
        );
        const newLove = {
          love_name: req.body.love_name,
          is_family: req.body.is_family,
          love_met: req.body.love_met,
          love_birthday: req.body.love_birthday,
          love_flower: req.body.love_flower,
          love_color: req.body.love_color,
          love_cake: req.body.love_cake,
        };

        const love = await t.one(
          "INSERT INTO loves(love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake, avatar_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [
            newLove.love_name,
            newLove.is_family,
            newLove.love_met,
            newLove.love_birthday,
            newLove.love_flower,
            newLove.love_color,
            newLove.love_cake,
            avatar.avatar_id,
          ]
        );
        return { avatar, love };
      })
      .then((data) => {
        res.json({ ...data.avatar, ...data.love }); //putting all into one object!
        // success, COMMIT was executed
      })
      .catch((error) => {
        console.log(error);
        // failure, ROLLBACK was executed
      })
  );
});

/////////////////

//********** */
// `insert into games(post_id, game_name, title, console, rating, recommendation, username, post, image_url) values(nextval('id_seq'), $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,

// create the POST request for love details in loves table
// app.post("/api/loves", async (req, res) => {
//   console.log(req.body);
//   try {
//     const newLove = {
//       love_name: req.body.love_name,
//       is_family: req.body.is_family,
//       love_met: req.body.love_met,
//       love_birthday: req.body.love_birthday,
//       love_flower: req.body.love_flower,
//       love_color: req.body.love_color,
//       love_cake: req.body.love_cake,
//     };
//     //console.log([newLove.love_name, newLove.is_family, newLove.love_met]);
//     const result = await db.query(
//       "INSERT INTO loves(love_name, is_family, love_met, love_birthday, love_flower, love_color, love_cake) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
//       [
//         newLove.love_name,
//         newLove.is_family,
//         newLove.love_met,
//         newLove.love_birthday,
//         newLove.love_flower,
//         newLove.love_color,
//         newLove.love_cake,
//       ]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// });

//**************** */

// // create the get request for avatars in the endpoint '/api/avatars'
// app.get("/api/avatars", async (req, res) => {
//   try {
//     const { rows: avatars } = await db.query("SELECT * FROM avatars");
//     res.send(avatars);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// //**************** */

//********************************************************************** */

// create the POST request for avatar details in avatar table
// app.post("/api/avatars", async (req, res) => {
//   console.log(req.body);
//   try {
//     const newAvatar = {
//       hair: req.body.hair,
//       eyes: req.body.eyes,
//       mouth: req.body.mouth,
//       skin: req.body.skin,
//     };
//     //console.log([newAvatar.hair,newAvatar.eyes, newAvatar.mouth, newAvatar.skin]);
//     const result = await db.query(
//       "INSERT INTO avatars(hair, eyes, mouth, skin) VALUES($1, $2, $3, $4) RETURNING *",
//       [newAvatar.hair, newAvatar.eyes, newAvatar.mouth, newAvatar.skin]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   } catch (e) {
//     console.log(e);
//     return res.status(400).json({ e });
//   }
// });

//********************************************************************** */

// delete request for loves
app.delete("/api/loves/:love_id", async (req, res) => {
  try {
    const love_id = req.params.love_id;
    await db.query("DELETE FROM loves WHERE love_id=$1", [love_id]);
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
  console.log("In the server from the url - the loves id", love_id);
  console.log(
    "In the server, from the react - the love to be edited",
    updatedLove
  );
  // UPDATE loves SET lastname = "something" WHERE id="16";
  const query = `UPDATE loves SET love_name=$1, is_family=$2, love_met=$3, love_birthday=$4, love_flower=$5, love_color=$6, love_cake=$7 WHERE id=${love_id} RETURNING *`;
  const values = [
    updatedLove.love_name,
    updatedLove.is_family,
    updatedLove.love_met,
    updatedLove.love_birthday,
    updatedLove.love_flower,
    updatedLove.love_color,
    updatedLove.love_cake,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated[0]);
    res.send(updated[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
