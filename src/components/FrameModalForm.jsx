import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import {
  Form,
  Modal,
  Button,
  ButtonGroup,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Container,
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";
import ButtonsBodyModal from "./frameModal/ButtonsBodyModal";
import TextBodyModal from "./frameModal/TextBodyModal";

const FrameModalForm = observer(({ data, show, handleClose }) => {
  const uri = import.meta.env.VITE_APP_API_URL;
  const [frameId, setFrameId] = useState(data.data.frame_id);
  // const [frameData, setFrameData] = useState(data.data.frame);
  const [frameType, setFrameType] = useState(data.data.frame.type);
  const [buttons, setButtons] = useState(data.data.frame.markup);
  const frameTypes = [
    {
      type: "text",
      name: "Текст",
      tooltip: "Сообщение типа текст",
      modal: <TextBodyModal frame={data.data.frame} />,
    },
    { type: "photo", name: "Фото", tooltip: "Сообщение типа фото" },
    { type: "video", name: "Видео", tooltip: "Сообщение типа видео" },
    { type: "audio", name: "Аудио", tooltip: "Сообщение типа аудио" },
    {
      type: "voice",
      name: "Голосовое сообщение",
      tooltip: "Сообщение типа голосовое сообщение",
    },
    {
      type: "media_group",
      name: "Несколько медиафайлов",
      tooltip: "Сообщение типа медиа файлы",
    },
    {
      type: "video_note",
      name: "Видео круглишок",
      tooltip: "Сообщение типа видео круглишок",
    },
    { type: "venue", name: "Адрес", tooltip: "Сообщение типа адрес" },
    { type: "contact", name: "Контакт", tooltip: "Сообщение типа контакт" },
    {
      type: "web_app",
      name: "Веб-приложение",
      tooltip: "Сообщение типа веб-приложение",
    },
    { type: "document", name: "Документ", tooltip: "Сообщение типа документ" },
    { type: "location", name: "Локация", tooltip: "Сообщение типа локация" },
    { type: "animation", name: "Анимация", tooltip: "Сообщение типа анимация" },
  ];
  // const [message, setMessage] = useState(props.data.data.DATA.MESSAGE);
  // const [buttons, setButtons] = useState(props.data.data.DATA.BUTTONS);
  // const [photo, setPhoto] = useState(props.data.data.DATA.MESSAGE.PHOTO);
  // const [mediaGroup, setMediaGroup] = useState(
  //   props.data.data.DATA.MESSAGE.MEDIA_GROUP
  // );
  // const [videoNote, setVideoNote] = useState(
  //   props.data.data.DATA.MESSAGE.VIDEO_NOTE
  // );
  // const [media, setMedia] = useState();
  // const mediaTypes = ["PHOTO", "MEDIA_GROUP", "VIDEO_NOTE"];
  // const onChangeId = (event) => {
  //   setId(event.target.value);
  // };
  // const onChangeMessage = (event) => {
  //   setMessage({
  //     ...message,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const onChangePhoto = (event) => {
  //   setPhoto(event.target.files);
  // };
  // const onChangeMediaGroup = (event) => {
  //   setMediaGroup(event.target.files);
  // };
  // const onChangeVideoNote = (event) => {
  //   setVideoNote(event.target.files);
  // };
  const saveFrame = async () => {
    data.data.frame_id = frameId;
    data.data.frame = data.data.frame;
    data.data.frame.type = frameType;

    // let formData = new FormData();
    // formData.append("id", data.id);
    // formData.append("data", JSON.stringify(data.data));
    console.log(data);
    // if (data.DATA.MESSAGE.TYPE == "PHOTO") {
    //   formData.append("photo", photo[0]);
    // } else if (data.DATA.MESSAGE.TYPE == "MEDIA_GROUP") {
    //   for (let i = 0; i < mediaGroup.length; i++) {
    //     formData.append("media", mediaGroup[i]);
    //   }
    // } else if (data.DATA.MESSAGE.TYPE == "VIDEO_NOTE") {
    //   formData.append("video_note", videoNote[0]);
    // }
    // const response = await updateFrame(formData);
    // frame.setFrames(response.data.updatedFrames);
    // props.handleClose();
  };

  return (
    <Modal fullscreen={true} show={show} onHide={handleClose}>
      <Modal.Header closeButton className="shadow">
        <Modal.Title>
          Редактирование: {data.data.frame_id} + test name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container className="shadow pt-2 pb-2 rounded" fluid>
            <Form.Group as={Row} className="mb-3" controlId="frame_id">
              <Form.Label column md="1">
                Frame id:
              </Form.Label>
              <Col md="11">
                <Form.Control
                  type="text"
                  name="frame_id"
                  placeholder="Введите frame id"
                  value={frameId}
                  onChange={(e) => setFrameId(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="frame_type">
              <Form.Label column md="1">
                Frame type:
              </Form.Label>
              <Col md="11">
                <ButtonGroup>
                  {frameTypes.map((element, index) => {
                    return (
                      <OverlayTrigger
                        key={index}
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-${element.type}`}>
                            <strong>{element.tooltip}</strong>.
                          </Tooltip>
                        }
                      >
                        <Button
                          name={element.type}
                          variant="outline-primary"
                          active={element.type == frameType}
                          onClick={(e) => setFrameType(e.target.name)}
                        >
                          {element.name}
                        </Button>
                      </OverlayTrigger>
                    );
                  })}
                </ButtonGroup>
              </Col>
            </Form.Group>
          </Container>
          <hr />
          <Container className="shadow pt-2 pb-2 rounded" fluid>
            {
              frameTypes.filter((element) => element.type == frameType)[0]
                ?.modal
            }
          </Container>
          <hr />
          <Container className="shadow pt-2 pb-2 rounded" fluid>
            <ButtonsBodyModal buttons={buttons} setButtons={setButtons} />
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={saveFrame}>
          Сохранить
        </Button>
        <Button variant="outline-secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default FrameModalForm;
