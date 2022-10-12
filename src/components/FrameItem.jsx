import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import Context from "../utils/context";

import FrameModalForm from "./FrameModalForm";

const FrameItem = observer(({ id, onDelete }) => {
  const { frame } = useContext(Context);
  const currentFrame = frame.getById(id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-center m-2 rounded shadow"
    >
      {" "}
      <div className="ms-2 me-auto">
        <div className="fw-bold">{currentFrame.data.frame_id}</div>
      </div>
      <Button className="mx-1" variant="outline-success" onClick={handleShow}>
        Редактировать
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => {
          onDelete(currentFrame.id);
        }}
      >
        Удалить
      </Button>
      <FrameModalForm
        id={currentFrame.id}
        show={show}
        handleClose={handleClose}
      />
    </ListGroup.Item>
  );
});

export default FrameItem;
