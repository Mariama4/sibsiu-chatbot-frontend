import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Form,
  Modal,
  Button,
  ButtonGroup,
  ToggleButton,
  Row,
  Col,
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";
import Context from "../utils/context";

const FrameModalForm = observer((props) => {
  const { frame } = useContext(Context);
  const [id, setId] = useState(props.data.data.ID);
  const [message, setMessage] = useState(props.data.data.DATA.MESSAGE);
  const [buttons, setButtons] = useState(props.data.data.DATA.BUTTONS);

  const onChangeId = (event) => {
    setId(event.target.value);
    // console.log(id);
    // console.log(message);
  };

  const onChangeMessage = (event) => {
    // console.log({
    //   ...message,
    //   [event.target.name]: event.target.value,
    // });
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };

  const saveFrame = async () => {
    const data = {
      ID: id,
      DATA: {
        MESSAGE: message,
        BUTTONS: buttons,
      },
    };
    let formData = new FormData();
    formData.append("id", props.data.id);
    formData.append("data", JSON.stringify(data));
    const response = await updateFrame(formData);
    frame.setFrames(response.data.updatedFrames);
    props.handleClose();
  };

  return (
    <Modal fullscreen={true} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование: {id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mt-4">
            <Col md={12}>
              <Form.Group controlId="ID" className="">
                <Form.Label>ID: </Form.Label>
                <Form.Control
                  type="text"
                  name="ID"
                  placeholder="Введите ID Frame"
                  value={id}
                  onChange={onChangeId}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <Form.Group controlId="TYPE" className="">
                <Form.Label>TYPE: </Form.Label>
                <Form.Control
                  type="text"
                  name="TYPE"
                  placeholder="Введите TYPE MESSAGE"
                  value={message.TYPE}
                  onChange={onChangeMessage}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="PARSE_MODE" className="">
                <Form.Label>PARSE_MODE: </Form.Label>
                <Form.Control
                  type="text"
                  name="PARSE_MODE"
                  placeholder="Введите PARSE_MODE MESSAGE"
                  value={message.PARSE_MODE}
                  onChange={onChangeMessage}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="TEXT" className="">
                <Form.Label>TEXT: </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="TEXT"
                  placeholder="Введите TEXT MESSAGE"
                  value={message.TEXT}
                  onChange={onChangeMessage}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId="PHOTO_URL" className="">
                <Form.Label>PHOTO_URL: </Form.Label>
                <Form.Control
                  type="file"
                  name="PHOTO_URL"
                  // value={message.TYPE}
                  // onChange={onChangeMessage}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveFrame}>
          Сохранить
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default FrameModalForm;
