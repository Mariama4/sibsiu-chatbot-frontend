import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import axios from "axios";
import { Badge, Button, Card, Container, Form } from "react-bootstrap";
import { UpdateToken, UpdateBotStatus } from "../http/botConfigurationApi";

const BotConfiguration = observer((props) => {
  const botConfiguration = props.data;
  // const [id, setId] = useState(botConfiguration.setting.id);
  const [token, setToken] = useState(botConfiguration.setting.token);
  // const [botStatus, setBotStatus] = useState(botConfiguration.setting.status);
  // const [updatedAt, setUpdatedAt] = useState(
  //   botConfiguration.setting.updatedAt
  // );
  const options = {
    method: "POST",
    url: "https://api.telegram.org/bot5624767303:AAEA-cG-9_RCQQcUdZl43cA36Mky1MWYxw4/getMe",
    headers: {
      accept: "application/json",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  const onClickSave = async (e) => {
    e.preventDefault();
    await UpdateToken(botConfiguration.setting.id, token);
    botConfiguration.setSetting(res_botName);
    // alert("Saved!");
  };

  // да да можно одну функцию на !status, но пока так
  const onClickToggle = async (e) => {
    e.preventDefault();
    const { updatedConfiguration } = await UpdateBotStatus(
      botConfiguration.setting.id,
      !botConfiguration.setting.status
    );
    botConfiguration.setSetting(updatedConfiguration);
    // setBotStatus(botConfiguration.setting.status);
    // setUpdatedAt(botConfiguration.setting.updatedAt);
    // alert("Updated!");
  };
  return (
    <Card className="">
      <Form className="mx-2">
        <Form.Label className="mx-5 my-5 h4">
          Основные настройки чат-бота
        </Form.Label>

        <Form.Group controlId="token" className="my-2">
          <Form.Label>Token:</Form.Label>
          <Form.Control
            className="text-truncate"
            type="text"
            placeholder="Bot token..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {botConfiguration.setting.status ? (
          <Badge bg="success">Бот включен</Badge>
        ) : (
          <Badge bg="danger">Бот выключен</Badge>
        )}
        <Form.Text className="mx-1">
          Дата последнего обновления данных:{" "}
          {botConfiguration.setting.updatedAt}
        </Form.Text>
        <hr />
        <Container className="mb-2 d-flex justify-content-around align-items-around">
          <Button type="submit" variant="success" onClick={onClickSave}>
            Сохранить
          </Button>
          <Button type="submit" variant="warning" onClick={onClickToggle}>
            Включить
          </Button>
          <Button type="submit" variant="danger" onClick={onClickToggle}>
            Выключить
          </Button>
        </Container>
      </Form>
    </Card>
  );
});

export default BotConfiguration;
