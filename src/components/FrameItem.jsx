import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

import FrameModalForm from "./FrameModalForm";

const FrameItem = observer(({ item, onDelete }) => {
  const frame = JSON.parse(item);
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
        <div className="fw-bold">{frame.data.frame_id} + "12312</div>
      </div>
      <Button className="mx-1" variant="outline-success" onClick={handleShow}>
        Редактировать
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => {
          onDelete(frame.id);
        }}
      >
        Удалить
      </Button>
      <FrameModalForm data={frame} show={show} handleClose={handleClose} />
    </ListGroup.Item>
  );
});

export default FrameItem;
