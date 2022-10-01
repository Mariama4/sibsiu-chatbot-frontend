import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

import FrameModalForm from "./FrameModalForm";

const FrameItem = observer((props) => {
  const item = JSON.parse(props.item);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <Button className="mx-1" variant="warning" onClick={handleShow}>
        Редактировать
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          props.onDelete(item.id);
        }}
      >
        Удалить
      </Button>
      <FrameModalForm data={item} show={show} handleClose={handleClose} />
    </ListGroup.Item>
  );
});

export default FrameItem;
