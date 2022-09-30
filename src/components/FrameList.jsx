import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import FrameItem from "./FrameItem";

const FrameList = (props) => {
  return (
    <Container>
      <h1>Frames list:</h1>
      <ListGroup as="ol" numbered>
        {props.list.map((element, index) => {
          // wtf react
          return (
            <FrameItem key={element["id"]} item={JSON.stringify(element)} />
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default FrameList;
