import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const UserForm = observer((props) => {
  // устанавливаем состояние формы по умолчанию
  const [values, setValues] = useState();

  // обновляем состояние, когда пользователь вводит данные в форму
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Container
      className={"d-flex justify-content-center align-items-center"}
      style={{ height: "80vh" }}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: { ...values },
          });
        }}
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
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Пароль: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Введите ваш пароль..."
            onChange={onChange}
            required
          />
        </Form.Group>

        <Button
          type="Submit"
          variant="outline-dark"
          onClick={props.action.onClick}
        >
          Войти
        </Button>
      </Form>
    </Container>
  );
});

export default UserForm;
