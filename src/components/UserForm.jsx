import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useRef } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const UserForm = observer(({ onClick }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
    onClick(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <Container
      className={"d-flex justify-content-center align-items-center"}
      style={{ height: "80vh" }}
    >
      <Form
        onSubmit={onSubmit}
        style={{ width: "50vh" }}
        className="shadow-lg p-5"
      >
        <Form.Label>
          <h2>Авторизация</h2>
        </Form.Label>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Введите ваш email..."
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Пароль: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Введите ваш пароль..."
            required
            ref={passwordRef}
          />
        </Form.Group>

        <Button type="Submit" variant="outline-dark">
          Войти
        </Button>
      </Form>
    </Container>
  );
});

export default UserForm;
