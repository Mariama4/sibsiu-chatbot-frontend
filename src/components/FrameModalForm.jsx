import React from "react";
import { useState } from "react";
import {
  Form,
  Modal,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";

const FrameModalForm = (props) => {
  const item = props.data;
  //   const [id, setId] = useState(item.data.ID);

  //   const [radioValue, setRadioValue] = useState();
  //   const radios = [
  //     { name: "TEXT", value: "1" },
  //     { name: "PHOTO", value: "2" },
  //     { name: "MEDIA_GROUP", value: "3" },
  //   ];

  // NEW
  const [rawJson, setRawJson] = useState(JSON.stringify(item.data, null, 2));

  const saveFrame = async () => {
    const jsonFrame = JSON.parse(rawJson);
    const { data } = await updateFrame(item.id, jsonFrame);
    console.log(data);
  };

  return (
    <Modal fullscreen={true} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование: {item.data.ID}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="row">
          {/* Оставлю на потом, тк пока для меня сложно :(  */}
          {/* <Form.Group className="mb-1 col-12" controlId="data.id">
            <Form.Label>ID:</Form.Label>
            <Form.Control
              type="text"
              placeholder="id...."
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </Form.Group>
          <h5>Тип сообщения:</h5>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-primary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup> */}

          <Form.Group className="mb-1 col-12" controlId="data">
            <Form.Label>RAW JSON:</Form.Label>
            <Form.Control
              as="textarea"
              rows={40}
              value={rawJson}
              onChange={(e) => setRawJson(e.target.value)}
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
};

export default FrameModalForm;
