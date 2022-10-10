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
  Figure,
  Card,
} from "react-bootstrap";
import { updateFrame } from "../http/frameApi";
import Context from "../utils/context";

const FrameModalForm = observer((props) => {
  // const uri = import.meta.env.VITE_APP_API_URL;
  // const { frame } = useContext(Context);
  // const [id, setId] = useState(props.data.data.ID);
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
  // return (
  //   <Modal fullscreen={true} show={props.show} onHide={props.handleClose}>
  //     <Modal.Header closeButton>
  //       <Modal.Title>Редактирование: {id}</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>
  //       <Form>
  //         <Row className="mt-4">
  //           <Col md={12}>
  //             <Form.Group controlId="ID" className="">
  //               <Form.Label>ID: </Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 name="ID"
  //                 placeholder="Введите ID Frame"
  //                 value={id}
  //                 onChange={onChangeId}
  //               />
  //             </Form.Group>
  //           </Col>
  //         </Row>
  //         <hr />
  //         <Row>
  //           <Col md={6}>
  //             <Form.Group controlId="TYPE" className="">
  //               <Form.Label>TYPE: </Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 name="TYPE"
  //                 placeholder="Введите TYPE MESSAGE"
  //                 value={message.TYPE}
  //                 onChange={onChangeMessage}
  //               />
  //             </Form.Group>
  //           </Col>
  //           <Col md={6}>
  //             <Form.Group controlId="PARSE_MODE" className="">
  //               <Form.Label>PARSE_MODE: </Form.Label>
  //               <Form.Control
  //                 type="text"
  //                 name="PARSE_MODE"
  //                 placeholder="Введите PARSE_MODE MESSAGE"
  //                 value={message.PARSE_MODE}
  //                 onChange={onChangeMessage}
  //               />
  //             </Form.Group>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col md={12}>
  //             <Form.Group controlId="TEXT" className="">
  //               <Form.Label>TEXT: </Form.Label>
  //               <Form.Control
  //                 as="textarea"
  //                 rows={3}
  //                 type="text"
  //                 name="TEXT"
  //                 placeholder="Введите TEXT MESSAGE"
  //                 value={message.TEXT}
  //                 onChange={onChangeMessage}
  //               />
  //             </Form.Group>
  //           </Col>
  //         </Row>
  //         <Row className="mt-2">
  //           <Col md={3}>
  //             <Card className="p-2">
  //               <Figure className="mt-2">
  //                 <Figure.Image
  //                   width={180}
  //                   height={180}
  //                   alt="180x180"
  //                   src={uri + "public/" + props.data.data.DATA.MESSAGE.PHOTO}
  //                 />
  //                 <Form.Group controlId="PHOTO_URL" className="">
  //                   <Form.Label>PHOTO_URL: </Form.Label>
  //                   <Form.Control
  //                     type="file"
  //                     name="PHOTO_URL"
  //                     onChange={onChangePhoto}
  //                   />
  //                 </Form.Group>
  //                 <Form.Group controlId="PHOTO_CAPTION" className="">
  //                   <Form.Label>PHOTO_CAPTION: </Form.Label>
  //                   <Form.Control
  //                     as="textarea"
  //                     rows={3}
  //                     type="text"
  //                     name="PHOTO_CAPTION"
  //                     value={message.PHOTO_CAPTION}
  //                     onChange={onChangeMessage}
  //                   />
  //                 </Form.Group>
  //               </Figure>
  //             </Card>
  //           </Col>
  //           <Col md={6}>
  //             <Card className="p-2">
  //               <Figure className="mt-2">
  //                 {props.data.data.DATA.MESSAGE.MEDIA_GROUP.map(
  //                   (element, index) => {
  //                     return (
  //                       <Figure.Image
  //                         key={index}
  //                         width={90}
  //                         height={90}
  //                         alt="90x90"
  //                         src={uri + "public/" + element}
  //                       />
  //                     );
  //                   }
  //                 )}
  //                 <Form.Group controlId="MEDIA_GROUP" className="">
  //                   <Form.Label>MEDIA_GROUP: </Form.Label>
  //                   <Form.Control
  //                     multiple
  //                     type="file"
  //                     name="MEDIA_GROUP"
  //                     onChange={onChangeMediaGroup}
  //                   />
  //                 </Form.Group>
  //                 <Form.Group controlId="MEDIA_CAPTION" className="">
  //                   <Form.Label>MEDIA_CAPTION: </Form.Label>
  //                   <Form.Control
  //                     as="textarea"
  //                     rows={3}
  //                     type="text"
  //                     name="MEDIA_CAPTION"
  //                     value={message.MEDIA_CAPTION}
  //                     onChange={onChangeMessage}
  //                   />
  //                 </Form.Group>
  //               </Figure>
  //             </Card>
  //           </Col>
  //           <Col md={3}>
  //             <Card className="p-2">
  //               <video controls width="250" height="200" muted>
  //                 <source
  //                   src={
  //                     uri + "public/" + props.data.data.DATA.MESSAGE.VIDEO_NOTE
  //                   }
  //                 />
  //               </video>
  //               <Figure className="mt-2">
  //                 {/* <Figure.Caption>
  //                   {uri + "public/" + props.data.data.DATA.MESSAGE.VIDEO_NOTE}
  //                 </Figure.Caption> */}
  //                 <Form.Group controlId="VIDEO_NOTE" className="">
  //                   <Form.Label>VIDEO_NOTE: </Form.Label>
  //                   <Form.Control
  //                     type="file"
  //                     name="VIDEO_NOTE"
  //                     onChange={onChangeVideoNote}
  //                   />
  //                 </Form.Group>
  //                 <Form.Group controlId="VIDEO_NOTE_CAPTION" className="">
  //                   <Form.Label>VIDEO_NOTE_CAPTION: </Form.Label>
  //                   <Form.Control
  //                     as="textarea"
  //                     rows={3}
  //                     type="text"
  //                     name="VIDEO_NOTE_CAPTION"
  //                     value={message.VIDEO_NOTE_CAPTION}
  //                     onChange={onChangeMessage}
  //                   />
  //                 </Form.Group>
  //               </Figure>
  //             </Card>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col md={6}>
  //             <Card className="p-2">
  //               <Form.Group controlId="VENUE_LATITUDE" className="">
  //                 <Form.Label>VENUE_LATITUDE: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="VENUE_LATITUDE"
  //                   value={message.VENUE_LATITUDE}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="VENUE_LONGITUDE" className="">
  //                 <Form.Label>VENUE_LONGITUDE: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="VENUE_LONGITUDE"
  //                   value={message.VENUE_LONGITUDE}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="VENUE_TITLE" className="">
  //                 <Form.Label>VENUE_TITLE: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="VENUE_TITLE"
  //                   value={message.VENUE_TITLE}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="VENUE_ADDRESS" className="">
  //                 <Form.Label>VENUE_ADDRESS: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="VENUE_ADDRESS"
  //                   value={message.VENUE_ADDRESS}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="VENUE_CAPTION" className="">
  //                 <Form.Label>VENUE_CAPTION: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="VENUE_CAPTION"
  //                   value={message.VENUE_CAPTION}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //             </Card>
  //           </Col>
  //           <Col md={6}>
  //             <Card className="p-2">
  //               <Form.Group controlId="CONTACT_PHONE_NUMBER" className="">
  //                 <Form.Label>CONTACT_PHONE_NUMBER: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="CONTACT_PHONE_NUMBER"
  //                   value={message.CONTACT_PHONE_NUMBER}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="CONTACT_FIRST_NAME" className="">
  //                 <Form.Label>CONTACT_FIRST_NAME: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="CONTACT_FIRST_NAME"
  //                   value={message.CONTACT_FIRST_NAME}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="CONTACT_LAST_NAME" className="">
  //                 <Form.Label>CONTACT_LAST_NAME: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="CONTACT_LAST_NAME"
  //                   value={message.CONTACT_LAST_NAME}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //               <Form.Group controlId="CONTACT_CAPTION" className="">
  //                 <Form.Label>CONTACT_CAPTION: </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   name="CONTACT_CAPTION"
  //                   value={message.CONTACT_CAPTION}
  //                   onChange={onChangeMessage}
  //                 />
  //               </Form.Group>
  //             </Card>
  //           </Col>
  //         </Row>
  //         <hr />
  //         <Row className="mt-4">
  //           <Col
  //             md={12}
  //             className="d-flex justify-content-between align-items-center"
  //           >
  //             <h3>Кнопки:</h3>
  //             <Button className="mx-2" onClick={onAddButton}>
  //               Добавить
  //             </Button>
  //           </Col>
  //           {buttons.map((element, index) => {
  //             return (
  //               <Card key={index} className="m-2 p-2">
  //                 <Row className="">
  //                   <Col md={5}>
  //                     <Form.Group as={Row} controlId="TEXT">
  //                       <Col md={1}>
  //                         <Form.Label>TEXT:</Form.Label>
  //                       </Col>
  //                       <Col md={11}>
  //                         {" "}
  //                         <Form.Control
  //                           type="text"
  //                           subname={index}
  //                           name="TEXT"
  //                           value={element["TEXT"]}
  //                           onChange={onChangeButton}
  //                         />
  //                       </Col>
  //                     </Form.Group>
  //                   </Col>
  //                   <Col md={5}>
  //                     <Form.Group as={Row} controlId="REDIRECT_ON_ID_FRAME">
  //                       <Col md={5}>
  //                         {" "}
  //                         <Form.Label>REDIRECT_ON_ID_FRAME:</Form.Label>
  //                       </Col>
  //                       <Col md={7}>
  //                         <Form.Control
  //                           type="text"
  //                           subname={index}
  //                           name="REDIRECT_ON_ID_FRAME"
  //                           value={element["REDIRECT_ON_ID_FRAME"]}
  //                           onChange={onChangeButton}
  //                         />
  //                       </Col>
  //                     </Form.Group>
  //                   </Col>
  //                   <Col md={2} className="align-self-center">
  //                     <Button
  //                       name={index}
  //                       variant="danger"
  //                       onClick={onDeleteButton}
  //                     >
  //                       Удалить
  //                     </Button>
  //                   </Col>
  //                 </Row>
  //               </Card>
  //             );
  //           })}
  //         </Row>
  //       </Form>
  //     </Modal.Body>
  //     <Modal.Footer>
  //       <Button variant="primary" onClick={saveFrame}>
  //         Сохранить
  //       </Button>
  //       <Button variant="secondary" onClick={props.handleClose}>
  //         Закрыть
  //       </Button>
  //     </Modal.Footer>
  //   </Modal>
  // );
});

export default FrameModalForm;
