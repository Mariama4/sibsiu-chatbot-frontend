import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";
import ReactPlayer from "react-player";

const VoiceBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
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
        <Form.Group controlId="voice_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={17}
            type="text"
            name="voice_caption"
            placeholder="Введите текст сообщения..."
            value={frame.voice_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="">
        <Card border="light" bg="light">
          <Card.Header>Голосовое сообщение:</Card.Header>
          <div className="align-self-top">
            <ReactPlayer
              width={"250"}
              height={"200"}
              controls
              muted
              className="align-self-center"
              url={
                localSrc != ""
                  ? localSrc
                  : frame.voice != ""
                  ? uri + "public/" + frame.voice
                  : "https://via.placeholder.com/180.png"
              }
            />
          </div>
          <Card.Body>
            <Form.Group controlId="voice" className="">
              <Form.Control
                type="file"
                name="voice"
                onChange={uploadMedia}
                accept=".mp3, .ogg"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default VoiceBodyModal;
