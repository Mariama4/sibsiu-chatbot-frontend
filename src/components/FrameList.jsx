import { observer } from "mobx-react-lite";
import React from "react";
import { deleteFrame } from "../http/frameApi";
import { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { addFrame, getFrames } from "../http/frameApi";
import FrameItem from "./FrameItem";

const FrameList = observer((props) => {
  const addNewFrame = async () => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        ID: "",
        DATA: {
          MESSAGE: {
            TYPE: "",
            PARSE_MODE: "HTML",
            TEXT: "",
            PHOTO: {
              PHOTO_URL: "",
            },
            PHOTO_CAPTION: "",
            MEDIA_GROUP: [
              {
                MEDIA_URL: "",
              },
            ],
            MEDIA_CAPTION: "",
            VIDEO_NOTE: {
              VIDEO_NOTE_URL: "",
            },
            VIDEO_NOTE_CAPTION: "",
            VENUE_LATITUDE: "",
            VENUE_LONGITUDE: "",
            VENUE_TITLE: "",
            VENUE_ADDRESS: "",
            VENUE_CAPTION: "",
            CONTACT_PHONE_NUMBER: "",
            CONTACT_FIRST_NAME: "",
            CONTACT_LAST_NAME: "",
            CONTACT_CAPTION: "",
          },
          BUTTONS: [
            {
              TEXT: "",
              REDIRECT_ON_ID_FRAME: "",
            },
          ],
        },
      })
    );
    await addFrame(formData);
    const response = await getFrames();
    props.list.setFrames(response["frames"]);
  };

  const delFrame = async (id) => {
    await deleteFrame(id);
    const response = await getFrames();
    props.list.setFrames(response["frames"]);
  };
  return (
    <Container>
      <Container className="d-flex justify-content-between align-items-center">
        {" "}
        <h1>Frames list:</h1>
        <Button onClick={addNewFrame}>+ Добавить frame</Button>
      </Container>

      <ListGroup as="ol" numbered>
        {props.list.frames.map((element, index) => {
          // wtf react
          return (
            <FrameItem
              key={element["id"]}
              item={JSON.stringify(element)}
              onDelete={delFrame}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
});

export default FrameList;
