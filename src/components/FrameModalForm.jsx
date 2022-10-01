import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Form,
  Modal,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";
import Context from "../utils/context";

const FrameModalForm = observer((props) => {
  const [id, setId] = useState(props.data.data.ID);
  const [message, setMessage] = useState(props.data.data.DATA.MESSAGE);

  const onChangeId = (event) => {
    setId(event.target.value);
    // console.log(id);
    // console.log(message);
  };

  const onChangeMessage = (event) => {
    // console.log({
    //   ...message,
    //   [event.target.name]: event.target.value,
    // });
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };

  const saveFrame = async () => {
    console.log({
      id,
      message,
    });
    props.handleClose();
  };

  return (
    <Modal fullscreen={true} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование: {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="row">
          <Form.Group controlId="ID" className="">
            <Form.Label>ID: </Form.Label>
            <Form.Control
              type="text"
              name="ID"
              placeholder="Введите ID Frame"
              value={id}
              onChange={onChangeId}
            />
          </Form.Group>
          <Form.Group controlId="TYPE" className="">
            <Form.Label>TYPE: </Form.Label>
            <Form.Control
              type="text"
              name="TYPE"
              placeholder="Введите TYPE MESSAGE"
              value={message.TYPE}
              onChange={onChangeMessage}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveFrame}>
          Сохранить
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default FrameModalForm;
