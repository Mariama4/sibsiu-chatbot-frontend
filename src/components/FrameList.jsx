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
        ID: "EXAMPLE ID - id для связи с другими frame`ми",
        DATA: {
          MESSAGE: {
            TYPE: "TEXT",
            PARSE_MODE: "HTML",
            TEXT: "start!",
            PHOTO: "photo url...",
            PHOTO_CAPTION: "photo caption",
            MEDIA_GROUP: ["url 1", "url 2", "url 3"],
            MEDIA_CAPTION: "media caption",
            VIDEO_NOTE: "video note url",
            VIDEO_NOTE_CAPTION: "note caption",
            VENUE_LATITUDE: "venue latitude",
            VENUE_LONGITUDE: "venue longitude",
            VENUE_TITLE: "venue title",
            VENUE_ADDRESS: "venue address",
            VENUE_CAPTION: "venue caption..",
            CONTACT_PHONE_NUMBER: "contact phone number..",
            CONTACT_FIRST_NAME: "contact first name",
            CONTACT_LAST_NAME: "contact last name",
            CONTACT_CAPTION: "contact caption..",
          },
          BUTTONS: [
            {
              TEXT: "text btn 1",
              REDIRECT_ON_ID_FRAME: "frame 1",
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
