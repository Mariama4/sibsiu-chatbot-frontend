import { observer } from "mobx-react-lite";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const StoredFramesBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  const Options = [
    { value: "timetable_of_classes", text: "Расписание занятий" },
    { value: "current_week", text: "Текущая неделя" },
    { value: "consultation_schedule", text: "Расписание консультаций" },
  ];
  return (
    <Row className="mt-2 mb-2">
      <Col md={12}>
        <Form.Group controlId="stored_frame_id">
          <h2>Кнопки в данном типе сообщения не используются!</h2>
          <Form.Label>Выберите фрейм: </Form.Label>
          <Form.Select
            defaultValue={frame["stored_frame_id"]}
            onChange={onChange}
            name={"stored_frame_id"}
          >
            {Options.map((element, index) => {
              return (
                <option key={index} value={element.value}>
                  {element.text}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
});

export default StoredFramesBodyModal;
