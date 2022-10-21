import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
import Context from "../utils/context";

const TableTelegramBotLog = observer(() => {
  const { logs } = useContext(Context);

  return (
    <Container className="mt-3 mb-3" style={{ width: "80vh" }} fluid>
      <h3>Телеграм бот логи</h3>
      <hr />
      <Table responsive hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Пользователь</th>
            <th>Сообщение пользователя</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {logs.telegramBotLog.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>@{item.data.from.username}</td>
                <td>{item.data.text}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
});

export default TableTelegramBotLog;
