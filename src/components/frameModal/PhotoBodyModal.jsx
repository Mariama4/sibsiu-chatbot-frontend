import { observer } from "mobx-react-lite";
import React from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";

const PhotoBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
  const uri = import.meta.env.VITE_APP_API_URL;
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Row className="mt-2 mb-2">
      <Col md={9}>
        <Form.Group controlId="photo_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            type="text"
            name="photo_caption"
            placeholder="Введите текст сообщения..."
            value={frame.photo_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="">
        <Card style={{ width: "18rem" }} border="light">
          <Figure.Image
            className="img-fluid rounded align-self-center"
            alt="180x180"
            width={180}
            height={180}
            variant="top"
            src={
              frame.photo != ""
                ? uri + "public/" + frame.photo
                : "https://via.placeholder.com/180.png"
            }
          />
          <Card.Body>
            <Card.Title>Фото:</Card.Title>
            <Form.Group controlId="photo" className="">
              <Form.Control
                type="file"
                name="photo"
                onChange={(e) => setMedia(e.target.files)}
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default PhotoBodyModal;
