import React from "react";
import * as adventurer from "@dicebear/adventurer";
import { createAvatar } from "@dicebear/core";

const AvatarPreview = () => {
  return (
    <div>
      <select name="" id="">
        {adventurer.schema.properties.hair.items.enum.map((variant) => (
          <option>{variant}</option>
        ))}
        {/* {schema.properties.eyes.items.enum} */}
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
