import React, { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import {
  Login as LoginReq,
  Registration as RegistrationReq,
} from "../http/userApi";
import { observer } from "mobx-react-lite";
import Context from "../utils/context";
import { Container, Card, Form, Button } from "react-bootstrap";

const Login = observer(() => {
  useEffect(() => {
    document.title = "Sign in - SIBSIU";
  });

  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = true;
  // устанавливаем состояние формы по умолчанию
  const [email, setEmail] = useState("");
  // const [name, setName] = useState('')
  const [password, setPassword] = useState("");

  // обновляем состояние, когда пользователь вводит данные в форму
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onClick = async () => {
    try {
      let data;
      if (isLogin) {
        data = await LoginReq(email, password);
      } else {
        data = await RegistrationReq(email, password, "USER");
      }
      user.setUser(user);
      user.setIsAuth(true);
      //   navigate() route to home page
      alert("Signed in!");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className={"d-flex justify-content-center align-items-center"}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className={"p-5"}>
        <h2 className={"m-auto"}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className={"d-flex flex-column"}>
          <Form.Control
            className={"mt-3"}
            placeholder={"Введите ваш email..."}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Control
            className={"mt-3"}
            placeholder={"Введите ваш пароль..."}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></Form.Control>
          <Button
            className={"mt-3"}
            variant={"outline-primary"}
            onClick={onClick}
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Login;
