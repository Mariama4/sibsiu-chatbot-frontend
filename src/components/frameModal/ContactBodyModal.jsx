import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const ContactBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={12}>
        <Form.Group controlId="contact_phone_number">
          <Form.Label>Номер телефона: </Form.Label>
          <Form.Control
            type="text"
            name="contact_phone_number"
            placeholder="Введите номер телефона..."
            value={frame.contact_phone_number}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="contact_first_name">
          <Form.Label>Имя контакта: </Form.Label>
          <Form.Control
            type="text"
            name="contact_first_name"
            placeholder="Введите имя контакта..."
            value={frame.contact_first_name}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="contact_last_name">
          <Form.Label>Фамилия контакта: </Form.Label>
          <Form.Control
            type="text"
            name="contact_last_name"
            placeholder="Введите фамилию контакта..."
            value={frame.contact_last_name}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={12}>
        <Form.Group controlId="contact_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="contact_caption"
            placeholder="Введите текст сообщения..."
            value={frame.contact_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
    </Row>
  );
});

export default ContactBodyModal;
