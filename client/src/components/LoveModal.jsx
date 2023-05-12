import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import * as adventurer from "@dicebear/adventurer";
import { createAvatar } from "@dicebear/core";

function LoveModal({ loveinfo }) {
  const [show, setShow] = useState(false);
  //   const [dataAPI, setdataAPI] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    // handleSubmit(e);
    console.log(loveinfo, "here is my love info modal");
    setShow(true);
  };

  console.log(loveinfo, "here is my love info");

  //A function to do the get request and set the state from openweather api
  //   async function loadLove(love) {
  //     // pass love name as a param
  //     const params = new URLSearchParams({ loveName: love });
  //     // fetch the data from the backend
  //     await fetch(`http://localhost:8080/weather?${params}`)
  //       .then((response) => response.json())
  //       .then((result) => {
  //         // console.log("this is the data: ", result)
  //         setdataAPI(result);
  //       });
  //   }

  //loadcity is an asych operation and cant do it inside a component because its synchronous!!!

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click for Love Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info about your love:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{loveinfo.is_family}</p>

          <p>
            {" "}
            <img
              src={createAvatar(adventurer, {
                size: 128,
                hair: [loveinfo.hair],
                mouth: [loveinfo.mouth],
                eyes: [loveinfo.eyes],
                skinColor: [loveinfo.skin],
                hairColor: [loveinfo.hair_color],
              }).toDataUriSync()}
            />
          </p>
          <p></p>

          <p>
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/7228/7228079.png"
            ></img>
            {loveinfo.love_birthday?.slice(0, 10)}
          </p>
          <p>
            {" "}
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/4642/4642381.png"
            ></img>{" "}
            {loveinfo.love_flower}
          </p>
          <p>
            {" "}
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/2071/2071524.png"
            ></img>
            {loveinfo.love_color}
          </p>
          <p>
            <img
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/2454/2454297.png"
            ></img>
            {loveinfo.love_cake}
          </p>
          <p></p>

          {/* {show ? dataAPI && <Love data={dataAPI} /> : null} */}
          {/* <Love /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoveModal;
