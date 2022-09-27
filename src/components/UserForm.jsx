import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const UserForm = (props) => {
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
      className={"d-flex justify-content-center align-items-center p-5"}
    >
      <Card className={"p-5"}>
        <h2 className={"m-auto"}>
          {props.formType === "login" ? "Авторизация" : "Регистрация"}
        </h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            props.action({
              variables: { ...values },
            });
          }}
          className={"d-flex flex-column"}
        >
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
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Введите ваш password..."
              onChange={onChange}
            />
          </Form.Group>

          <Button
            type="Submit"
            variant="primary"
            onClick={props.action.onClick}
          >
            {props.formType === "login" ? "Войти" : "Зарегистрироваться"}
          </Button>
        </Form>
        {props.formType !== "login" ? (
          <Link to={LOGIN_ROUTE}>Войти</Link>
        ) : (
          <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
        )}
      </Card>
    </Container>
  );
};

export default UserForm;
