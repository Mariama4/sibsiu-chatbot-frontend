import { observer } from "mobx-react-lite";
import React from "react";
import { deleteFrame } from "../http/frameApi";
import { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { addFrame, getFrames } from "../http/frameApi";
import FrameItem from "./FrameItem";

const FrameList = observer((props) => {
  const addNewFrame = async () => {
    (async () => {
      return await addFrame();
    }).then(async (e) => {
      const response = await getFrames();
      props.list.setFrames(response["frames"]);
    });
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
