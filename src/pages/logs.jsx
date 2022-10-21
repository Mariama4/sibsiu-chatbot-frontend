import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Context from "../utils/context";
import Loading from "../components/Loading";
import { getFrameLogLimit, getTelegramBotLogLimit } from "../http/logs";
import TableFrameLog from "../components/TableFrameLog";
import TableTelegramBotLog from "../components/TableTelegramBotLog";

const Logs = observer(() => {
  const { logs } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [selectedBtn, setSelectedBtn] = useState("5");
  const buttonLimitGroup = ["5", "10", "15", "20", "25"];
  useEffect(() => {
    document.title = "Logs = SIBSIU";
    let formData = new FormData();
    formData.append("limit", selectedBtn);
    getTelegramBotLogLimit(formData).then((data) =>
      logs.setTelegramBotLog(data["result"])
    );
    getFrameLogLimit(formData)
      .then((data) => logs.setTelegramBotFrameLog(data["result"]))
      .finally(() => setLoading(false));
  }, [selectedBtn]);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container
      as={Row}
      className="d-flex justify-content-center align-items-center"
      fluid
    >
      <Col
        md={12}
        className="pt-3 d-flex justify-content-center align-items-center"
      >
        <ButtonGroup>
          {buttonLimitGroup.map((item, index) => {
            return (
              <Button
                key={index}
                name={item}
                variant="outline-dark"
                active={item == selectedBtn}
                onClick={(e) => setSelectedBtn(e.target.name)}
              >
                {item}
              </Button>
            );
          })}
        </ButtonGroup>
      </Col>
      <Row>
        <Col md={6}>
          <TableFrameLog />
        </Col>
        <Col md={6}>
          <TableTelegramBotLog />
        </Col>
      </Row>
    </Container>
  );
});

export default Logs;
