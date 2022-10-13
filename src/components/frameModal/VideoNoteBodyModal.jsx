import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoNoteBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
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
        <Form.Group controlId="video_note_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            type="text"
            name="video_note_caption"
            placeholder="Введите текст сообщения..."
            value={frame.video_note_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="">
        <Card style={{ width: "18rem" }} border="light">
          <Card.Title>Видео:</Card.Title>
          <ReactPlayer
            controls
            width={"250"}
            height={"200"}
            muted
            className="align-self-center rounded"
            url={
              localSrc != ""
                ? localSrc
                : frame.video_note != ""
                ? uri + "public/" + frame.video_note
                : "https://via.placeholder.com/180.png"
            }
          />
          <Card.Body>
            <Form.Group controlId="video_note" className="">
              <Form.Control
                type="file"
                name="video_note"
                onChange={uploadMedia}
                accept=".mp4"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default VideoNoteBodyModal;
