import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Badge, Button, Container, Form } from "react-bootstrap";
import { UpdateToken, UpdateBotStatus } from "../http/botConfigurationApi";

const BotConfiguration = observer((props) => {
  const botConfiguration = props.data;
  const [token, setToken] = useState(botConfiguration.setting.token);
  const onClickSave = async (e) => {
    e.preventDefault();
    await UpdateToken(botConfiguration.setting.id, token);
    botConfiguration.setSetting(res_botName);
  };

  const onClickToggle = async (e) => {
    e.preventDefault();
    const { result } = await UpdateBotStatus(
      botConfiguration.setting.id,
      !botConfiguration.setting.status
    );
    botConfiguration.setSetting(result);
  };
  return (
    <Container className="shadow-lg p-5">
      <Form>
        <Container className="d-flex justify-content-center">
          <Form.Label className="h4">Основные настройки чат-бота</Form.Label>
        </Container>
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
          <Button type="submit" variant="outline-info" onClick={onClickSave}>
            Сохранить
          </Button>
          <Button
            type="submit"
            variant="outline-success"
            onClick={onClickToggle}
          >
            Включить
          </Button>
          <Button
            type="submit"
            variant="outline-danger"
            onClick={onClickToggle}
          >
            Выключить
          </Button>
        </Container>
      </Form>
    </Container>
  );
});

export default BotConfiguration;
