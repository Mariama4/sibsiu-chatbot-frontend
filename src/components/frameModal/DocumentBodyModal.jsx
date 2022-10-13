import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form } from "react-bootstrap";

const DocumentBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
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
        <Form.Group controlId="document_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            type="text"
            name="document_caption"
            placeholder="Введите текст сообщения..."
            value={frame.document_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={3} className="">
        <Card style={{ width: "18rem" }} border="light">
          <Card.Title>Документ:</Card.Title>
          <a
            target="_blank"
            href={
              frame.document == "" ? localSrc : uri + "public/" + frame.document
            }
          >
            {frame.document == "" ? localSrc : uri + "public/" + frame.document}
          </a>
          <Card.Body>
            <Form.Group controlId="document" className="">
              <Form.Control
                type="file"
                name="document"
                onChange={uploadMedia}
                accept=".doc, .docx, .pdf"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default DocumentBodyModal;
