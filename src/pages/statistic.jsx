import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  getTelegramBotUsers,
  getFrameLog,
  getTelegramBotLog,
} from "../http/statisticApi";
import Context from "../utils/context";
import Loading from "../components/Loading";
import TelegramBotUsers from "../components/TelegramBotUsers";
import ChartTelegramBotNewUsers from "../components/ChartTelegramBotNewUsers";
import ChartFrameUses from "../components/ChartFrameUses";
import { getFrames } from "../http/frameApi";

const Statistic = observer(() => {
  const { statistic, frame } = useContext(Context);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Statistic - SIBSIU";
    getFrames().then((data) => {
      frame.setFrames(data["result"]);
    });
    getTelegramBotUsers().then((data) => {
      statistic.setTelegramBotUsers(data["result"]);
      getFrameLog().then((data) => {
        statistic.setFrameLog(data["result"]);
        getTelegramBotLog()
          .then((data) => {
            statistic.setTelegramBotLog(data["result"]);
          })
          .finally(() => setLoading(false));
      });
    });
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <Container
      as={Row}
      className="d-flex justify-content-around align-items-center"
      fluid
    >
      <Col md={4}>
        <ChartFrameUses />
      </Col>
      <Col md={4}>
        <ChartTelegramBotNewUsers />
      </Col>
      <Col md={12}>
        <TelegramBotUsers />
      </Col>
    </Container>
  );
});

export default Statistic;
