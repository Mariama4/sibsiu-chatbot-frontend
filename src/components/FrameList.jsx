import { observer } from "mobx-react-lite";
import React from "react";
import { deleteFrame } from "../http/frameApi";
import { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { addFrame, getFrames } from "../http/frameApi";
import FrameItem from "./FrameItem";
import SearchBar from "./SearchBar";

const FrameList = observer(({ list }) => {
  const addNewFrame = async () => {
    addFrame().then((data) => {
      console.log(data["result"]);
      console.log(list.frames);
    });
  };

  const delFrame = async (id) => {
    // await deleteFrame(id);
    // const response = await getFrames();
    // props.list.setFrames(response["frames"]);
  };
  return (
    <Container className="mt-3">
      <Row
        md={"12"}
        className="d-flex justify-content-between align-items-center shadow"
      >
        <Col md={"10"}>
          <SearchBar />
        </Col>
        <Col md={"2"}>
          <Button
            className="align-self-center"
            onClick={addNewFrame}
            variant="outline-primary"
          >
            Добавить frame
          </Button>
        </Col>
      </Row>

      <ListGroup as="ol" numbered>
        {list.frames.map((element, index) => {
          return (
            <FrameItem
              key={index}
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
