import React from "react";
import * as adventurer from "@dicebear/adventurer";
import { createAvatar } from "@dicebear/core";
import { useState } from "react";

{
  /* //onchange, several states (could do it as a single state too)
//could use a reducer too */
}

const AvatarPreview = () => {
  const [hair, setHair] = useState("long1884");

  const [eyes, setEyes] = useState("variant26");

  const [mouth, setMouth] = useState("variant02");

  const [skin, setSkinColor] = useState("");

  const updateAvatarPreview = (update) => {
    return (event) => {
      update(event.currentTarget.value); //update coming in as argument from line 20
      //returning an arrow function, that arrow function
      //current Target is what dom element has triggered this event
      //and our event is the onchange!
      //update is which state function u want to call.
      //this will have onchange event
    };
  };

  return (
    <div>
      <label>
        Hair:
        <select onChange={updateAvatarPreview(setHair)} name="" id="">
          {adventurer.schema.properties.hair.items.enum.map((variant) => (
            <option>{variant}</option>
          ))}
          {/* {schema.properties.eyes.items.enum} */}
        </select>
      </label>

      <label> Eyes: </label>
      <select onChange={updateAvatarPreview(setEyes)} name="" id="">
        {adventurer.schema.properties.eyes.items.enum.map((variant) => (
          <option>{variant}</option>
        ))}
      </select>

      <label>Mouth:</label>
      <select onChange={updateAvatarPreview(setMouth)} name="" id="">
        {adventurer.schema.properties.mouth.items.enum.map((variant) => (
          <option>{variant}</option>
        ))}
      </select>

      {/* The skin colors dont exist on adventurer API */}
      <label>Skin:</label>
      <select onChange={updateAvatarPreview(setSkinColor)} name="" id="">
        {[
          "BF9169",
          "ecad80",
          "503335",
          "9e5622",
          "FFE0BD",
          "763900",
          "321B0F",
          "592f2a",
          "c58c85",
          "ecbcb4",
          "eebb99",
          "f2d3b1",
          "9F7967",
          "D7B6A5",
          "70361C",
          "714937",
          "492816",
          "FFCD94",
          "EAC086",
          "FFE39F",
          "8C644D",
          "593123",
        ].map((variant) => (
          <option>{variant}</option>
        ))}
      </select>

      <img
        src={createAvatar(adventurer, {
          size: 128,
          hair: [hair],
          mouth: [mouth],
          eyes: [eyes],
          skinColor: [skin],
        }).toDataUriSync()}
      />
    </div>
  );
};

export default AvatarPreview;
