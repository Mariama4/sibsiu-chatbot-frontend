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
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";

const FrameModalForm = observer(({ data, show, handleClose }) => {
  const uri = import.meta.env.VITE_APP_API_URL;
  const [id, setId] = useState(data.data.frame_id);
  const frameTypes = [
    { type: "text", name: "Текст", tooltip: "Сообщение типа текст" },
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
  // const onDeleteButton = (event) => {
  //   setButtons(
  //     buttons.filter((element, index) => {
  //       return event.target.name != index;
  //     })
  //   );
  // };
  // const onChangeButton = (event) => {
  //   setButtons(
  //     buttons.map((element, index) => {
  //       if (index == event.target.getAttribute("subname")) {
  //         element[event.target.name] = event.target.value;
  //         return element;
  //       } else {
  //         return element;
  //       }
  //     })
  //   );
  // };
  // const onAddButton = (event) => {
  //   setButtons([
  //     ...buttons,
  //     {
  //       TEXT: "new",
  //       REDIRECT_ON_ID_FRAME: "new",
  //     },
  //   ]);
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
  // const saveFrame = async () => {
  //   const data = {
  //     ID: id,
  //     DATA: {
  //       MESSAGE: message,
  //       BUTTONS: buttons,
  //     },
  //   };
  //   let formData = new FormData();
  //   formData.append("id", props.data.id);
  //   formData.append("data", JSON.stringify(data));
  //   if (data.DATA.MESSAGE.TYPE == "PHOTO") {
  //     formData.append("photo", photo[0]);
  //   } else if (data.DATA.MESSAGE.TYPE == "MEDIA_GROUP") {
  //     for (let i = 0; i < mediaGroup.length; i++) {
  //       formData.append("media", mediaGroup[i]);
  //     }
  //   } else if (data.DATA.MESSAGE.TYPE == "VIDEO_NOTE") {
  //     formData.append("video_note", videoNote[0]);
  //   }
  //   const response = await updateFrame(formData);
  //   frame.setFrames(response.data.updatedFrames);
  //   props.handleClose();
  // };

  return (
    <Modal fullscreen={true} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Редактирование: {data.data.frame_id} + test name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="frame_id">
            <Form.Label column md="1">
              Frame id:
            </Form.Label>
            <Col md="11">
              <Form.Control
                type="text"
                name="frame_id"
                placeholder="Введите frame id"
                value={id}
                onChange={(e) => setId(e.target.value)}
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
                        variant="outline-primary"
                        active={element.type == data.data.frame_type}
                      >
                        {element.name}
                      </Button>
                    </OverlayTrigger>
                  );
                })}
              </ButtonGroup>
            </Col>
          </Form.Group>
          <hr />
        </Form>
      </Modal.Body>
    </Modal>
  );
});

export default FrameModalForm;
