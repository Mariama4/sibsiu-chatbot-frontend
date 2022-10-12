import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const TextBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={12}>
        <Form.Group controlId="text">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="text"
            placeholder="Введите текст сообщения..."
            value={frame.text}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
    </Row>
  );
});

export default TextBodyModal;
