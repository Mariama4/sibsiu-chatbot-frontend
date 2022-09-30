import React, { useState } from "react";

import { Badge, Button, Card, Container, Form } from "react-bootstrap";
import {
  UpdateToken,
  UpdateBotName,
  UpdateBotStatus,
} from "../http/botConfigurationApi";

const BotConfiguration = (props) => {
  const botConfiguration = props.data;
  const [id, setId] = useState(botConfiguration.setting.id);
  const [token, setToken] = useState(botConfiguration.setting.token);
  const [botName, setBotName] = useState(botConfiguration.setting.bot_name);
  const [botStatus, setBotStatus] = useState(botConfiguration.setting.status);
  const [updatedAt, setUpdatedAt] = useState(
    botConfiguration.setting.updatedAt
  );

  const onClickSave = async (e) => {
    e.preventDefault();
    await UpdateToken(id, token);
    const res_botName = await UpdateBotName(id, botName);
    botConfiguration.setSetting(res_botName);
    alert("Saved!");
  };

  // да да можно одну функцию на !status, но пока так
  const onClickToggle = async (e) => {
    e.preventDefault();
    const { updatedConfiguration } = await UpdateBotStatus(id, !botStatus);
    botConfiguration.setSetting(updatedConfiguration);
    setBotStatus(botConfiguration.setting.status);
    setUpdatedAt(botConfiguration.setting.updatedAt);
    alert("Updated!");
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

        <Form.Group controlId="bot_name" className="my-2">
          <Form.Label>Bot name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bot name..."
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {botStatus ? (
          <Badge bg="success">Бот включен</Badge>
        ) : (
          <Badge bg="danger">Бот выключен</Badge>
        )}
        <Form.Text className="mx-1">
          Дата последнего обновления данных: {updatedAt}
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
};

export default BotConfiguration;
