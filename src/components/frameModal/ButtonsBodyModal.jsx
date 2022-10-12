import React from "react";
import { Row, Button, Col, Form, Container } from "react-bootstrap";

const ButtonsBodyModal = ({ buttons, setButtons }) => {
  const onDeleteButton = (event) => {
    setButtons(
      buttons.filter((element, index) => {
        return event.target.name != index;
      })
    );
  };
  const onChangeButton = (event) => {
    setButtons(
      buttons.map((element, index) => {
        if (index == event.target.getAttribute("subname")) {
          element[event.target.name] = event.target.value;
          return element;
        } else {
          return element;
        }
      })
    );
  };
  const onAddButton = (event) => {
    setButtons([
      ...buttons,
      {
        text: "new",
        callback: "new",
      },
    ]);
  };

  return (
    <Row className="mt-1 mb-5">
      <Col
        md={12}
        className="d-flex justify-content-between align-items-center"
      >
        <h3>Кнопки:</h3>
        <Button
          variant="outline-primary"
          className="mx-2"
          onClick={onAddButton}
        >
          Добавить
        </Button>
      </Col>
      <Container>
        {buttons.map((element, index) => {
          return (
            <Row
              key={index}
              className="d-flex justify-content-between align-items-center pt-2 pb-2 m-1 rounded-pill shadow-sm"
            >
              <Col md={5}>
                <Form.Group
                  as={Row}
                  controlId="text"
                  className="align-items-center"
                >
                  <Col>
                    <Form.Label>Содержимое кнопки:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      subname={index}
                      name="text"
                      placeholder="Текст..."
                      value={element["text"]}
                      onChange={onChangeButton}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group
                  as={Row}
                  controlId="callback"
                  className="align-items-center"
                >
                  <Col>
                    <Form.Label>Перенаправление на frame id:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      subname={index}
                      name="callback"
                      value={element["callback"]}
                      placeholder="frame id...."
                      onChange={onChangeButton}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col md={1}>
                <Button
                  name={index}
                  variant="outline-danger"
                  onClick={onDeleteButton}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Row>
  );
};

export default ButtonsBodyModal;
