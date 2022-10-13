import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";
import ReactPlayer from "react-player";

const AnimationBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
  const [localSrc, setLocalSrc] = useState("");
  const uri = import.meta.env.VITE_APP_API_URL;
  const onChange = (event) => {
    setFrame({
      ...frame,
      [event.target.name]: event.target.value,
    });
  };
  const uploadMedia = (event) => {
    try {
      let file = event.target.files[0];
      setMedia(file);

      setLocalSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={9}>
        <Form.Group controlId="animation_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            type="text"
            name="animation_caption"
            placeholder="Введите текст сообщения..."
            value={frame.animation_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="">
        <Card style={{ width: "18rem" }} border="light">
          <Card.Title>Анимация:</Card.Title>
          <Figure.Image
            className="img-fluid rounded align-self-center"
            alt="180x180"
            width={180}
            height={180}
            variant="top"
            src={
              localSrc != ""
                ? localSrc
                : frame.animation != ""
                ? uri + "public/" + frame.animation
                : "https://via.placeholder.com/180.gif"
            }
            accept=".gif"
          />
          <Card.Body>
            <Form.Group controlId="animation" className="">
              <Form.Control
                type="file"
                name="animation"
                onChange={uploadMedia}
                accept=".gif"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default AnimationBodyModal;
