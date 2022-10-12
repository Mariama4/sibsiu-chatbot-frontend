import { observer } from "mobx-react-lite";
import React from "react";
import { deleteFrame } from "../http/frameApi";
import { useState } from "react";
import { Button, Col, Container, ListGroup, Row, Form } from "react-bootstrap";
import { addFrame, getFrames } from "../http/frameApi";
import FrameItem from "./FrameItem";
import Loading from "./Loading";
import { useContext } from "react";
import Context from "../utils/context";

const FrameList = observer(() => {
  const { frame } = useContext(Context);
  const [searchFrames, setSeatchFrames] = useState("");

  const addNewFrame = async () => {
    addFrame().then((response) => {
      getFrames().then((response) => {
        frame.setFrames(response["result"]);
      });
    });
  };

  const delFrame = async (id) => {
    deleteFrame(id).then((response) => {
      getFrames().then((response) => {
        frame.setFrames(response["result"]);
      });
    });
  };

  const onSearchFrames = (event) => {
    setSeatchFrames(event.target.value);
  };

  return (
    <Container className="mt-3">
      <Row
        md={"12"}
        className="d-flex justify-content-between align-items-center shadow"
      >
        <Col md={"10"}>
          <Container className="p-3">
            <Form.Control
              id="searchBar"
              placeholder="Введите frame id для поиска"
              onChange={onSearchFrames}
            />
          </Container>
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
        {frame.frames
          .filter((element) => {
            return element["data"]["frame_id"].includes(searchFrames);
          })
          .map((element, index) => {
            return (
              <FrameItem key={index} id={element.id} onDelete={delFrame} />
            );
          })}
      </ListGroup>
    </Container>
  );
});

export default FrameList;
