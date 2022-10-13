import { observer } from "mobx-react-lite";
import React from "react";
import { useState, useContext } from "react";
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
import { getFrames, updateFrame } from "../http/frameApi";
import ButtonsBodyModal from "./frameModal/ButtonsBodyModal";
import TextBodyModal from "./frameModal/TextBodyModal";
import PhotoBodyModal from "./frameModal/PhotoBodyModal";
import VideoBodyModal from "./frameModal/VideoBodyModal";
import AudioBodyModal from "./frameModal/AudioBodyModal";
import VoiceBodyModal from "./frameModal/VoiceBodyModal";
import MediaGroupBodyModal from "./frameModal/MediaGroupBodyModal";
import VideoNoteBodyModal from "./frameModal/VideoNoteBodyModal";
import VenueBodyModal from "./frameModal/VenueBodyModal";
import Context from "../utils/context";

const FrameModalForm = observer(({ show, handleClose, id }) => {
  const { frame } = useContext(Context);
  const currentFrame = frame.getById(id);
  const [frameId, setFrameId] = useState(currentFrame.data.frame_id);
  const [frameType, setFrameType] = useState(currentFrame.data.frame.type);
  const [buttons, setButtons] = useState(currentFrame.data.frame.markup);
  const [frameData, setFrameData] = useState(currentFrame.data.frame);
  const [media, setMedia] = useState();
  const frameTypes = [
    {
      type: "text",
      name: "Текст",
      tooltip: "Сообщение типа текст",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
    {
      type: "photo",
      name: "Фото",
      tooltip: "Сообщение типа фото",
      modal: (
        <PhotoBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "video",
      name: "Видео",
      tooltip: "Сообщение типа видео",
      modal: (
        <VideoBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "audio",
      name: "Аудио",
      tooltip: "Сообщение типа аудио",
      modal: (
        <AudioBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "voice",
      name: "Голосовое сообщение",
      tooltip: "Сообщение типа голосовое сообщение",
      modal: (
        <VoiceBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "media_group",
      name: "Несколько медиафайлов",
      tooltip: "Сообщение типа медиа файлы",
      modal: (
        <MediaGroupBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "video_note",
      name: "Видео кругляшок",
      tooltip: "Сообщение типа видео кругляшок",
      modal: (
        <VideoNoteBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "venue",
      name: "Адрес",
      tooltip: "Сообщение типа адрес",
      modal: (
        <VenueBodyModal
          frame={frameData}
          setFrame={setFrameData}
          media={media}
          setMedia={setMedia}
        />
      ),
    },
    {
      type: "contact",
      name: "Контакт",
      tooltip: "Сообщение типа контакт",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
    {
      type: "web_app",
      name: "Веб-приложение",
      tooltip: "Сообщение типа веб-приложение",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
    {
      type: "document",
      name: "Документ",
      tooltip: "Сообщение типа документ",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
    {
      type: "location",
      name: "Локация",
      tooltip: "Сообщение типа локация",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
    {
      type: "animation",
      name: "Анимация",
      tooltip: "Сообщение типа анимация",
      modal: <TextBodyModal frame={frameData} setFrame={setFrameData} />,
    },
  ];

  const onChangeType = (event) => {
    setFrameData({
      ...frameData,
      ["type"]: event.target.name,
    });
    setFrameType(event.target.name);
  };

  const onChangeId = (event) => {
    setFrameId(event.target.value);
  };

  const saveFrame = async () => {
    let newData = {
      frame_id: frameId,
      frame: frameData,
    };
    newData.frame.markup = buttons;
    let formData = new FormData();
    formData.append("id", id);
    formData.append("data", JSON.stringify(newData));
    if (typeof media !== "undefined") {
      if (
        newData.frame.type == "photo" ||
        newData.frame.type == "video" ||
        newData.frame.type == "audio" ||
        newData.frame.type == "voice" ||
        newData.frame.type == "video_note" ||
        newData.frame.type == "document" ||
        newData.frame.type == "animation"
      ) {
        formData.append("media", media);
      } else if (newData.frame.type == "media_group") {
        for (let i = 0; i < media.length; i++) {
          formData.append("media", media[i]);
        }
      }
    }
    updateFrame(formData)
      .catch((error) => console.log(error))
      .then((response) => {
        alert(response?.message);
        getFrames().then((response) => {
          frame.setFrames(response["result"]);
          window.location.reload();
        });
      });
  };

  return (
    <Modal fullscreen={true} show={show} onHide={handleClose}>
      <Modal.Header closeButton className="shadow">
        <Modal.Title>Редактирование: {frameId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container className="shadow pt-2 pb-2 rounded" fluid>
            <Form.Group as={Row} className="mb-3" controlId="frame_id">
              <Form.Label column md="1">
                Имя (Frame id):
              </Form.Label>
              <Col md="11">
                <Form.Control
                  type="text"
                  name="frame_id"
                  placeholder="Введите frame id"
                  value={frameId}
                  onChange={onChangeId}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="frame_type">
              <Form.Label column md="1">
                Тип:
              </Form.Label>
              <Col md="11">
                <ButtonGroup className="flex-wrap">
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
                          onClick={onChangeType}
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
            <h3>Сообщение:</h3>
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
