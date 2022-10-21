import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
import Context from "../utils/context";

const TelegramBotUsers = observer(() => {
  const { statistic } = useContext(Context);
  return (
    <Container className="mt-3 mb-3" style={{ width: "100vh" }} fluid>
      <hr />
      <Table responsive hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Никнейм</th>
            <th>Дата </th>
          </tr>
        </thead>
        <tbody>
          {statistic.telegramBotUsers.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>@{user.username}</td>
                <td>{user.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
});

export default TelegramBotUsers;
