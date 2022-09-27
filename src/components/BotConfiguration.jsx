import React, { useState } from "react";
import { useContext } from "react";
import { Card, Form, Row } from "react-bootstrap";
import Context from "../utils/context";

const BotConfiguration = () => {
  const { botConfiguration } = useContext(Context);
  // не нравится так, но иначе хз пока что
  const [token, setToken] = useState(botConfiguration.setting.token);
  const [status, setStatus] = useState(botConfiguration.setting.status);
  return (
    <Card className="w-60">
      <Form className="mx-2">
        <Form.Label className="mx-5 my-5 h1">
          Основные настройки чат-бота
        </Form.Label>
        <Form.Group controlId="token" className="my-2">
          <Form.Label>Token:</Form.Label>
          <Form.Control
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
            value={botConfiguration.setting.bot_name}
            disabled
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="status" className="my-2">
          <Form.Check
            type="switch"
            label="Bot status off/on"
            checked={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default BotConfiguration;
