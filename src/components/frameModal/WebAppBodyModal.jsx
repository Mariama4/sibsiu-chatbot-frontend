import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const WebAppBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={6}>
        <Form.Group controlId="web_app">
          <Form.Label>Кнопка-Ссылка: </Form.Label>
          <Form.Control
            type="text"
            name="web_app"
            placeholder="Введите ссылку..."
            value={frame.web_app}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="web_app_button_text">
          <Form.Label>Название ссылки: </Form.Label>
          <Form.Control
            type="text"
            name="web_app_button_text"
            placeholder="Введите название ссылки..."
            value={frame.web_app_button_text}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={12}>
        <Form.Group controlId="web_app_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="web_app_caption"
            placeholder="Введите текст сообщения..."
            value={frame.web_app_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
    </Row>
  );
});

export default WebAppBodyModal;
