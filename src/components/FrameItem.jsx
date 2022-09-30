import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const FrameItem = (props) => {
  const item = JSON.parse(props.item);
  //   console.log(item);
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center"
    >
      {" "}
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.data.ID}</div>
      </div>
      <Button className="mx-1" variant="warning">
        Редактировать
      </Button>
      <Button variant="danger">Удалить</Button>
    </ListGroup.Item>
  );
};

export default FrameItem;
