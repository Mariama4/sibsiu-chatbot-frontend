import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Container, Form, Table } from "react-bootstrap";
import Context from "../utils/context";

const TableFrameLog = observer(() => {
  const { logs } = useContext(Context);
  console.log(logs.telegramBotFrameLog);
  return (
    <Container className="mt-3 mb-3" style={{ width: "80vh" }} fluid>
      <h3>Фрейм логи</h3>
      <hr />
      <Table responsive hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Фрейм</th>
            <th>id Пользователя</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          {logs.telegramBotFrameLog.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.frame_id}</td>
                <td>{item.user_id}</td>
                <td>{item.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
});

export default TableFrameLog;
