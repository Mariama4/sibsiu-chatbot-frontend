import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Card, Col, Figure, Row, Form, Container } from "react-bootstrap";
import ReactPlayer from "react-player";

const MediaGroupBodyModal = observer(({ frame, setFrame, media, setMedia }) => {
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
      let files = event.target.files;
      setMedia(files);
      let filesArr = [];
      for (let id = 0; id < files.length; id++) {
        let file = files[id];
        filesArr.push(URL.createObjectURL(file));
      }
      setLocalSrc(filesArr);
    } catch (error) {
      console.error("error " + error);
    }
  };
  return (
    <Row className="mt-2 mb-2">
      <Col md={5}>
        <Form.Group controlId="media_group_caption">
          <Form.Label>Текст: </Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            type="text"
            name="media_group_caption"
            placeholder="Введите текст сообщения..."
            value={frame.media_group_caption}
            onChange={onChange}
          />
        </Form.Group>
      </Col>
      <Col md={7} className="">
        <Card border="light">
          <Card.Title>Медиа файлы:</Card.Title>
          <Row>
            {(localSrc.length > 0
              ? localSrc
              : frame.media_group.map((url) => {
                  return uri + "public/" + url;
                })
            ).map((element, index) => {
              let ext = element.split(".").pop();
              return (
                <a key={index} target="_blank" href={element}>
                  {element}
                </a>
              );
              //   if (ext == "jpg" || ext == "jpeg" || ext == "png") {
              //     return (
              //       <Col key={index}>
              //         <Figure.Image
              //           className="img-fluid rounded align-self-center"
              //           alt="180x180"
              //           width={180}
              //           height={180}
              //           variant="top"
              //           src={element}
              //           accept=".jpg, .jpeg, .png"
              //         />
              //       </Col>
              //     );
              //   } else {
              //     return (
              //       <Col key={index}>
              //         <ReactPlayer
              //           controls
              //           muted
              //           className="align-self-center"
              //           url={element}
              //         />
              //       </Col>
              //     );
              //   }
            })}
          </Row>
          <Card.Body>
            <Form.Group controlId="media_group" className="">
              <Form.Control
                multiple
                type="file"
                name="media_group"
                onChange={uploadMedia}
                accept=".mp4, .jpg, .jpeg, .png"
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
});

export default MediaGroupBodyModal;
