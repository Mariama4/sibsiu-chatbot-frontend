import { observer } from "mobx-react-lite";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const VenueBodyModal = observer(({ frame, setFrame }) => {
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={6}>
        <Form.Group controlId="venue_latitude">
          <Form.Label>Широта: </Form.Label>
          <Form.Control
            type="text"
            name="venue_latitude"
            placeholder="Введите широту точки на карте..."
            value={frame.venue_latitude}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="venue_longitude">
          <Form.Label>Долгота: </Form.Label>
          <Form.Control
            type="text"
            name="venue_longitude"
            placeholder="Введите долготу точки на карте..."
            value={frame.venue_longitude}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="venue_title">
          <Form.Label>Название: </Form.Label>
          <Form.Control
            type="text"
            name="venue_title"
            placeholder="Введите название точки на карте..."
            value={frame.venue_title}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="venue_address">
          <Form.Label>Адрес: </Form.Label>
          <Form.Control
            type="text"
            name="venue_address"
            placeholder="Введите адрес на карте..."
            value={frame.venue_address}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={12}>
        <Form.Group controlId="venue_caption">
          <Form.Label>Сообщение: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="venue_caption"
            placeholder="Введите текст сообщения..."
            value={frame.venue_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
    </Row>
  );
});

export default VenueBodyModal;
