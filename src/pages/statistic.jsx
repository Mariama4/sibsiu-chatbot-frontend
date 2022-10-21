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
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";

const Statistic = observer(() => {
  const { statistic } = useContext(Context);
  const [state, setState] = useState([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const onChangeDate = (item) => {
    setState([item.selection]);
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Statistic - SIBSIU";
    // фигня чишо
    let startDate = `${state[0].startDate.getFullYear()}/${
      state[0].startDate.getMonth() + 1
    }/${state[0].startDate.getDate()}`;
    let endDate = `${state[0].endDate.getFullYear()}/${
      state[0].endDate.getMonth() + 1
    }/${state[0].endDate.getDate()}`;

    let formData = new FormData();
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    // переделать
    getTelegramBotUsers(formData).then((data) => {
      statistic.setTelegramBotUsers(data["result"]);
    });
    getFrameLog(formData).then((data) => {
      statistic.setFrameLog(data["result"]);
    });
    getTelegramBotLog(formData)
      .then((data) => {
        statistic.setTelegramBotLog(data["result"]);
      })
      .finally(() => setLoading(false));
  }, [state]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container
      as={Row}
      className="d-flex justify-content-around align-items-top mt-2"
      fluid
    >
      <Row md={12} className="border">
        <Col>
          <h3>Календарь:</h3>
          <DateRangePicker
            onChange={onChangeDate}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </Col>
      </Row>
      <Col md={6}>
        <h3>Статистика использования фреймов:</h3>
        <ChartFrameUses />
      </Col>
      <Col md={6}>
        <Row>
          <h3>Новые пользователи чат-бота:</h3>
          <ChartTelegramBotNewUsers />
        </Row>
        <Row>
          <h3>
            Новые пользователи чат-бота: {statistic.telegramBotUsers.length}
          </h3>
          <TelegramBotUsers />
        </Row>
      </Col>
    </Container>
  );
});

export default Statistic;
