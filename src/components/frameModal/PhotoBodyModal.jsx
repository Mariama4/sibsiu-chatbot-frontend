import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";

const PhotoBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
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
          <Card.Title>Фото:</Card.Title>
          <Figure.Image
            className="img-fluid rounded align-self-center"
            alt="180x180"
            width={180}
            height={180}
            variant="top"
            src={
              localSrc != ""
                ? localSrc
                : frame.photo != ""
                ? uri + "public/" + frame.photo
                : "https://via.placeholder.com/180.png"
            }
            accept=".jpg, .jpeg, .png"
          />
          <Card.Body>
            <Form.Group controlId="photo" className="">
              <Form.Control type="file" name="photo" onChange={uploadMedia} />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default PhotoBodyModal;
