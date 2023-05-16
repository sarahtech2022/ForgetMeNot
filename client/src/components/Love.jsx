import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as ioicons from "react-icons/io5";
import LoveModal from "./LoveModal";
import * as adventurer from "@dicebear/adventurer";
import { createAvatar } from "@dicebear/core";

const Love = ({ love, toUpdate, toDelete }) => {
  const onUpdate = (toUpdateLove) => {
    toUpdate(toUpdateLove);
  };

  const onDelete = (toDeleteLove) => {
    toDelete(toDeleteLove);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <p>{love.love_name}</p>{" "}
          <p>
            {" "}
            <img
              src={createAvatar(adventurer, {
                size: 128,
                hair: [love.hair],
                mouth: [love.mouth],
                eyes: [love.eyes],
                skinColor: [love.skin],
                hairColor: [love.hair_color],
              }).toDataUriSync()}
            />
          </p>
        </Card.Title>
        {typeof toUpdate === "undefined" ? null : (
          <>
            {" "}
            <Button
              variant="outline-danger"
              onClick={() => {
                onDelete(love);
              }}
              style={{ padding: "0.6em", marginRight: "0.9em" }}
            >
              <ioicons.IoTrash />
            </Button>
            <Button
              variant="outline-info"
              onClick={() => {
                onUpdate(love);
              }}
              style={{ padding: "0.6em" }}
            >
              {" "}
              <ioicons.IoSync />
            </Button>
          </>
        )}
        <LoveModal loveinfo={love} />

        {/* <Button> Click for More Info</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Love;
