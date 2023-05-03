import React from "react";
import * as adventurer from "@dicebear/adventurer";
import { createAvatar } from "@dicebear/core";

const AvatarPreview = () => {
  return (
    <div>
      <label>
        Hair:
        <select name="" id="">
          {adventurer.schema.properties.hair.items.enum.map((variant) => (
            <option>{variant}</option>
          ))}
          {/* {schema.properties.eyes.items.enum} */}
        </select>
      </label>

      <label> Eyes: </label>
      <select name="" id="">
        {adventurer.schema.properties.eyes.items.enum.map((variant) => (
          <option>{variant}</option>
        ))}
      </select>

      <label>Mouth:</label>
      <select name="" id="">
        {adventurer.schema.properties.mouth.items.enum.map((variant) => (
          <option>{variant}</option>
        ))}
      </select>

      <img
        src={createAvatar(adventurer, {
          size: 128,
          hair: "short16",
        }).toDataUriSync()}
      />
    </div>
  );
};

export default AvatarPreview;
