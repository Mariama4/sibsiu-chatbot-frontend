import { observer } from "mobx-react-lite";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const LocationBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={6}>
        <Form.Group controlId="location_latitude">
          <Form.Label>Широта: </Form.Label>
          <Form.Control
            type="text"
            name="location_latitude"
            placeholder="Введите широту точки на карте..."
            value={frame.location_latitude}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="location_longitude">
          <Form.Label>Долгота: </Form.Label>
          <Form.Control
            type="text"
            name="location_longitude"
            placeholder="Введите долготу точки на карте..."
            value={frame.location_longitude}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={12}>
        <Form.Group controlId="location_horizontal_accuracy">
          <Form.Label>Погрешность: </Form.Label>
          <Form.Control
            type="text"
            name="location_horizontal_accuracy"
            placeholder="Введите погрешность на карте..."
            value={frame.location_horizontal_accuracy}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={12}>
        <Form.Group controlId="location_caption">
          <Form.Label>Сообщение: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="location_caption"
            placeholder="Введите текст сообщения..."
            value={frame.location_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
    </Row>
  );
});

export default LocationBodyModal;
