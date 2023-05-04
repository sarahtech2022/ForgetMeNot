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

      <img
        src={createAvatar(adventurer, {
          size: 128,
          hair: [hair],
          mouth: [mouth],
          eyes: [eyes],
        }).toDataUriSync()}
      />
    </div>
  );
};

export default AvatarPreview;
